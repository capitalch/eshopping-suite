let sqls = {
  'post:query:products:on:category': `select * from product where cat_id = %s;`
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
                    order by c1.id)
        select c2.id, c2.label || ' (' || 
        CASE WHEN c2.cat_cnt = 0 then c2.product_cnt else c2.cat_cnt END
        || ')' as label, c2.parent_id, c2.cat_cnt,c2.product_cnt from cte2 c2;`
  , 'post:query:categories:product:on:input': `with cte2 as (
    with cte1 as (
        SELECT id, label, cast(nullif(NULL, '') AS int) as parent_id,
        COALESCE(parent_id,0) as id2
      FROM category WHERE id in(
       SELECT id
       FROM category
      WHERE to_tsvector('english', label) @@ to_tsquery('english', %L)
    ))
    select id,label,parent_id ,
      CASE min(id2)
          WHEN 0
              then 0
          ELSE
              count(id)
          END as cat_cnt
      from cte1 
          group by id,label,parent_id 
          order by id
  )
    select c2.id, label || ' (' || 
      CASE
      WHEN min(cat_cnt) = 0 
      then count(p.id)
      ELSE min(cat_cnt)
      end
      || ')' as label,parent_id, min(cat_cnt) as cat_cnt,  count(p.id) as product_cnt
      from cte2 c2
          left join product p
              on c2.id = p.cat_id
                  group by c2.id,label,parent_id
                    order by c2.id;`
  , 'post:query:categories:product:on:input1': `WITH RECURSIVE cte1 AS (
      SELECT id, label, cast(nullif(NULL, '') AS int) as parent_id
      FROM category WHERE id in(
      SELECT id
      FROM category
      WHERE to_tsvector('english', label) @@ to_tsquery('english', %L)
      )
      UNION ALL
      SELECT c1.id, c1.label, c1.parent_id
      FROM category c1, cte1
      WHERE c1.parent_id = cte1.id
    ) select distinct on (label) * FROM cte1;`
  , genre1: `WITH RECURSIVE genres_materialized_path AS (
        SELECT id, name, ARRAY[]::INTEGER[] AS path
        FROM genres WHERE parent_id IS NULL
      
        UNION ALL
      
        SELECT genres.id, genres.name, genres_materialized_path.path || genres.parent_id
        FROM genres, genres_materialized_path
        WHERE genres.parent_id = genres_materialized_path.id
      ) SELECT * FROM genres_materialized_path WHERE 15 = genres_materialized_path.path[array_upper(genres_materialized_path.path,1)];`
  , emp: `with recursive cte1 as (
        select id, name, parent_id from emp where parent_id is null
          
          union all
          
          select e.id, e.name, e.parent_id from emp e
            inner join cte1 c
              on e.parent_id = c.id                    
      ) select * from cte1 order by id;`
  , emp1: `WITH RECURSIVE cte1 AS (
        SELECT id, name, parent_id,ARRAY[]::INTEGER[] AS path
        FROM emp WHERE parent_id IS NULL
      
        UNION ALL
      
        SELECT emp.id, emp.name, emp.parent_id, cte1.path || emp.parent_id
        FROM emp, cte1
        WHERE emp.parent_id = cte1.id
      ) SELECT * FROM cte1;`
  , mockCnt: `WITH RECURSIVE cte1 AS (
    SELECT id, label, parent_id,0 AS cnt
    FROM mock_data WHERE parent_id IS NULL
  
    UNION ALL
  
    SELECT mock.id, mock.label, mock.parent_id, cte1.cnt + 1
    FROM mock_data mock, cte1
    WHERE mock.parent_id = cte1.id
  ) SELECT * FROM cte1;`
}
module.exports = sqls;