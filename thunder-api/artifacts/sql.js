let sqls = {
  'get:products:on:category': `select * from product where cat_id in (%s);`
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
  , catWithProduct:`drop table temp2;
  with cte1 as (
  with cte as (
  select c.id, c.label, c.parent_id,c1.id as temp1
      from category c
        left join category c1 
          on c.id = c1.parent_id)
  select id,label,parent_id,
    CASE
        WHEN  min(temp1) is null
            then 0
          ELSE
            count(*)
      END as cnt
    from cte
        group by id, label,parent_id      	
            order by id
  ) select id, label, parent_id, cnt into temp2 from cte1;
  select t.id,label,parent_id,cnt as cnt1, p.cat_id from temp2 t inner join product p on t.id = p.cat_id`
  , catWithProduct1:`drop table temp1;
  with cte1 as(
    select c1.id,c1.label,c1.parent_id, 
      COALESCE(c2.id,0) as id2 
        from categories c1 left join categories c2 on c1.id = c2.parent_id
  )
  select id,label,parent_id ,
    CASE min(id2)
        WHEN 0
            then 0
          ELSE
            count(id)
      END as cnt into temp1
    from cte1 
        group by id,label,parent_id 
        order by id;
  select t.id, label,parent_id, min(cnt) as cnt,  count(p.id) as pcnt
    from temp1 t
        left join products p
            on t.id = p.cat_id
                group by t.id,label,parent_id`
}
module.exports = sqls;