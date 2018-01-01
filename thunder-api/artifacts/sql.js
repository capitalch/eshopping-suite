let sqls = {
  'post:query:products:on:category': `with recursive cte1 as (
    select id,label, parent_id
        from category where id = %s
      union
        select c1.id, c1.label, c1.parent_id
          from category c1 inner join cte1 c2
            on c1.parent_id = c2.id
      )
      select * , count(0) OVER() as count from product where cat_id in (
          select id from cte1 where id not in( select parent_id from cte1 where parent_id is not null)
      ) order by id offset %s limit %s;`
  , 'post:query:categories:with:count': `with cte1 as (select c1.id, c1.label, c1.parent_id, sum(CASE WHEN c2.id is null then 0 else 1 end) as cat_cnt	
      from category c1 left outer join category c2 
          on c1.id = c2.parent_id
              group by c1.id
                order by c1.id),
        cte2 as (select c1.id, c1.label, c1.parent_id, min(c1.cat_cnt) as cat_cnt,
        sum(CASE WHEN p.id is null then 0 else 1 end) as product_cnt
          from cte1 c1 left outer join product p   	
              on c1.id = p.cat_id
                  group by c1.id, c1.label, c1.parent_id
                    order by c1
                    .id)
        select c2.id, c2.label || ' (' || 
        CASE WHEN c2.cat_cnt = 0 then c2.product_cnt else c2.cat_cnt END
        || ')' as label, c2.parent_id, c2.cat_cnt,c2.product_cnt from cte2 c2;`
  , 'post:query:categories:product:on:input': `
  with cte0 as (    
    select id, name as label, cat_id as parent_id
      from product
          where to_tsvector('english', name) @@ to_tsquery('english', %L)    
  )    
  , cte1 as(        
    select id,label, 0 as parent_id
        from category
          where id in(select parent_id from cte0)
  ), cte3 as(
      select 0 as id, 'All categories' as label, null::int as parent_id, (select count(0) from cte1)::int as cat_cnt, 0::int as product_cnt
      union
    select cte1.id, cte1.label, cte1.parent_id, 0 as cat_cnt, count(0)::int as product_cnt 
      from cte1 inner join cte0
        on cte1.id = cte0.parent_id
        group by cte1.id, cte1.label, cte1.parent_id
        order by id
  )
  select id,
--    CASE
--     	WHEN id = 0 then label
--         else label || '(' || product_cnt || ')'
--         end
--         as label , parent_id, cat_cnt, product_cnt from cte3 order by label
  label || '(' || GREATEST(product_cnt,cat_cnt) || ')' as label, parent_id, cat_cnt, product_cnt from cte3 order by id
  `,

  'post:query:categories:product:on:input1': `with recursive 
  cte0 as (
      select id, name as label, cat_id as parent_id
        from product
            where to_tsvector('english', name) @@ to_tsquery('english', %L)
    ),
    cte1 as (
      SELECT id, label, parent_id
            FROM category
                WHERE 
                to_tsvector('english', label) @@ to_tsquery('english', %L)
        union
      SELECT id, label, parent_id
        from category where id in(
          select parent_id from cte0
        ) 
    ), 
    cte2 as(
      select id, label, 
        CASE
          WHEN parent_id in(select id from cte1)
          then parent_id
          else null::int
        END as parent_id
        from cte1
    ) , 
    cte3 as(  
        select id, label, parent_id from cte2 
        union all
          select c1.id, c1.label, c1.parent_id
            from category c1 inner join cte3 c3
              on c1.parent_id = c3.id
    ) ,
    cte4 as (select c1.id, c1.label, c1.parent_id, sum(CASE WHEN c2.id is null then 0 else 1 end) as cat_cnt	
          from cte3 c1 left outer join cte3 c2 
              on c1.id = c2.parent_id
                  group by c1.id, c1.label, c1.parent_id
                    order by c1.id),
    cte5 as (select c1.id, c1.label, c1.parent_id, min(c1.cat_cnt) as cat_cnt,
            sum(CASE WHEN p.id is null then 0 else 1 end) as product_cnt
              from cte4 c1 left outer join product p   	
                  on c1.id = p.cat_id
                      group by c1.id, c1.label, c1.parent_id
                        order by c1
                        .id),
    cte6 as (
        select 0 as id, 'Any category' as label, null::int as parent_id, 0 as cat_cnt, (select count(0) from cte0) as product_cnt
    )
    select
    id, '(' || product_cnt || ') ' || label as label , parent_id, cat_cnt, product_cnt from cte6 
          union
        select c2.id, '(' || 
        CASE WHEN c2.cat_cnt = 0 then c2.product_cnt else c2.cat_cnt END
        || ') ' || c2.label as label, c2.parent_id, c2.cat_cnt,c2.product_cnt from cte5 c2
            order by id;`
  , multiSql: `
    with cte1 as(
      SELECT id, label,  parent_id
          FROM cats
            WHERE to_tsvector('english', label) @@ to_tsquery('english', 'pork')
    ) select * from cte1;
    select count(0) from cats;
    `
}
module.exports = sqls;