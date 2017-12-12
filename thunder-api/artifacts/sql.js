let sqls = {
  'post:query:products:on:category': `select * from product where cat_id = %s;`
  , 'post:query:categories:with:count': `with cte2 as (
    with cte1 as (
      select c1.id,c1.label,c1.parent_id, 
        COALESCE(c2.id,0) as id2 
          from category c1 left join category c2 on c1.id = c2.parent_id
    )
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
  , 'post:query:categories:product:on:input': `WITH RECURSIVE cte AS (
      SELECT id, label, 0 as parent_id
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
  , mock: 'select id, label, parent_id from category'
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