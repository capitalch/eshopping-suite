let sqls = {
  'post:add:to:cart': `
    insert into shopping_cart(user_id,product_id,qty, isactive)
    select user_id,product_id,qty,isactive 
      from jsonb_populate_record(null::shopping_cart
        , %L)
    `

  , 'post:delete:from:cart': ``

  , 'post:modify:cart': ``

  , 'post:query:cart': `select s.id, s.mdate, s.user_id, s.product_id,s.qty, p.name as product_name, b.name, p.descr,
      get_product_label(p.product_info) as label       
      from shopping_cart s inner join	"user" u
        on s.user_id = u.id
      inner join product p
        on p.id = s.product_id
      inner join brand b
        on b.id = p.brand_id
      where s.isactive and user_id = %s`

  , 'post:query:product:details:on:id': `select *, get_product_label(p.product_info) as label      
      --(select a->'values' from jsonb_array_elements(p.product_info) as a where a->>'name' = 'label' limit 1 ) as label
      from product p where id = %s;
      select q.id, q.content, q.likes, q.product_id, q.is_approved, q.user_id, q.mdate , array_to_json(array_agg(to_json(a))) as answers
      from question q left join lateral (select id, mdate, content, likes, user_id, is_approved from answer a where a.question_id = q.id ) a
      on true where q.product_id =%s
      group by q.id
      order by q.id;
      select r.id, r.user_id, r.product_id, r.mdate, r.rating, r.images, r.content, r.is_approved, r.likes, r.title, array_to_json(array_agg(to_json(a))) as responses
      from review r left join lateral (select id, user_id, review_id, content, likes, mdate, is_approved from response a where a.review_id = r.id ) a
      on true where r.product_id = %s
        group by r.id
          order by r.id`

  , 'post:query:products:on:category': `with recursive cte1 as (
      select id,label, parent_id
      from category where id::text like %L
      union
        select c1.id, c1.label, c1.parent_id
          from category c1 inner join cte1 c2
            on c1.parent_id = c2.id
      )
      select 
      p.id, p.name, list_price, product_code,descr,  offer_price, model, images[1] as image,
      get_product_label(p.product_info) as label
      --(select a->'values' from jsonb_array_elements(p.product_info) as a where a->>'name' = 'label' limit 1 ) as label
      from product p 		  
      where cat_id in (
          select id from cte1 where id not in( select parent_id from cte1 where parent_id is not null)
      )  order by p.id offset %s limit %s;`

  , 'post:search:products:on:criteria': `select p.id, p.name, list_price, product_code,descr, b.name as brand, offer_price, model, images[1] as image
      from product p left join brand b 
      on p.brand_id = b.id
      where cat_id::text LIKE %L and to_tsvector('english', p.name) @@ to_tsquery('english',%L)
      order by p.id offset %s limit %s;`

  , 'post:query:categories:with:count': `with recursive cte1 as(
      select c.id,c.label, c.parent_id, count(0) as product_cnt, true as leaf
        from category c inner join product p
          on p.cat_id = c.id
            group by c.id, c.parent_id 
      union all
        select c.id,c.label, c.parent_id, cte1.product_cnt, false as leaf
          from category c join cte1
            on c.id = cte1.parent_id
      ), cte2 as (select id, label, parent_id, sum(product_cnt) as product_cnt, leaf
      from cte1
        group by id, parent_id, label, leaf
            order by id, parent_id)
        select id, label || ' (' || product_cnt || ')' as label, parent_id, product_cnt, leaf from cte2`

  , 'post:search:products:categories:on:criteria': `with cte0 as (    
      select id, name as label, cat_id
      from product
          where to_tsvector('english', name) @@ to_tsquery('english', %L)    
      )
      , cte1 as (
  	  select 0 as id, 'All categories' as label, null::int as parent_id, (select count(0) from cte0)::int as product_cnt, false as leaf
      union
        select c1.id, c1.label, 0::int as parent_id, count(0), true as leaf
    	  from category c1 inner join cte0 c2
      		on c1.id = c2.cat_id
      			group by c1.id, c1.label
      ) select id, label || ' (' || product_cnt || ')' as label, parent_id, product_cnt, leaf from cte1
  	    order by id`
}

module.exports = sqls;