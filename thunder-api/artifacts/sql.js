let sqls = {
  genre1: `WITH RECURSIVE genres_materialized_path AS (
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
  , mock:'select id, label, parent_id from category'
  , mockCnt :`WITH RECURSIVE cte1 AS (
    SELECT id, label, parent_id,0 AS cnt
    FROM mock_data WHERE parent_id IS NULL
  
    UNION ALL
  
    SELECT mock.id, mock.label, mock.parent_id, cte1.cnt + 1
    FROM mock_data mock, cte1
    WHERE mock.parent_id = cte1.id
  ) SELECT * FROM cte1;`
}
module.exports = sqls;