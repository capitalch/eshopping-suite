ALTER TABLE public.product
    ADD COLUMN tag text[];
ALTER TABLE public.product
    ADD COLUMN tsv tsvector;

CREATE OR REPLACE FUNCTION product_trim_product_info_plv8(data jsonb)
RETURNS jsonb AS $$
  var f = function removeKeys(obj, keys){
    var index;
    for (var prop in obj) {
        if(obj.hasOwnProperty(prop)){
            switch(typeof(obj[prop])){
                case 'string':
                    index = keys.indexOf(prop);
                    if(index > -1){
                        delete obj[prop];
                    }
                    break;
                case 'object':
                    index = keys.indexOf(prop);
                    if(index > -1){
                        delete obj[prop];
                    }else{
                        removeKeys(obj[prop], keys);
                    }
                    break;
            }
        }
    }
    return(obj);
};
return(f(data,["name"]));
$$ LANGUAGE plv8 IMMUTABLE STRICT;

CREATE or replace FUNCTION product_tsv() RETURNS trigger AS $$
begin
  new.tsv :=
     setweight(to_tsvector('pg_catalog.english', coalesce(regexp_replace(new.name,'[-,!#$%]+',' ','g'),'')), 'A') ||
	 setweight(to_tsvector('pg_catalog.english', coalesce(regexp_replace(new.descr,'[-,!#$%]+',' ','g'),'')), 'C') ||
	 setweight(array_to_tsvector(coalesce(regexp_replace(new.tag,'[-,!#$%]+',' ','g'),  array[]::text[])), 'B') ||
	 setweight(to_tsvector('pg_catalog.english', coalesce(get_product_label(new.product_info),'')), 'A') ||
	 setweight(to_tsvector('pg_catalog.english', coalesce(product_trim_product_info_plv8(new.product_info),'{}')), 'A') ||
	 setweight(to_tsvector('pg_catalog.english',coalesce((select "name" from brand where id = new.brand_id),'')), 'A');
  return new;
end
$$ LANGUAGE plpgsql;

drop trigger if exists product_tsv_trigger on product;
CREATE TRIGGER product_tsv_trigger BEFORE INSERT OR UPDATE
    ON product FOR EACH ROW EXECUTE PROCEDURE product_tsv();

CREATE INDEX index_product_on_tsv ON product USING gin(tsv);
update product set descr = lipsum(50);

//22-02-2018
drop function get_product_label;
CREATE or replace FUNCTION get_product_label(product_info jsonb) RETURNS text AS $$
declare  
    returnValue_ text := '';
	type_ text :='';
  begin
  	type_ := (select jsonb_typeof(product_info));
	if type_ <> 'object' then
  		returnValue_ := (select a->'values' from jsonb_array_elements(product_info) as a where a->>'name' = 'label' limit 1 );
	end if;
    return returnValue_;
  end;
$$ LANGUAGE plpgsql;

CREATE or replace FUNCTION product_tsv() RETURNS trigger AS $$
begin
  new.tsv :=
     setweight(to_tsvector('pg_catalog.english', coalesce(regexp_replace(new.name,'[-,!#$%]+',' ','g'),'')), 'A') ||
	 setweight(to_tsvector('pg_catalog.english', coalesce(regexp_replace(new.descr,'[-,!#$%]+',' ','g'),'')), 'C') ||
-- 	 setweight(array_to_tsvector(coalesce(regexp_replace(new.tag,'[-,!#$%]+',' ','g'),  array[]::text[])), 'B') ||
	 setweight(to_tsvector(coalesce(regexp_replace(array_to_string(new.tag, ' '),'[-,!#$%]+',' ','g'),  '')), 'B') ||
 	 setweight(to_tsvector('pg_catalog.english', coalesce(get_product_label(new.product_info),'')), 'A') ||
	 setweight(to_tsvector('pg_catalog.english', coalesce(product_trim_product_info_plv8(new.product_info),'{}')), 'A') ||
	 setweight(to_tsvector('pg_catalog.english',coalesce((select "name" from brand where id = new.brand_id),'')), 'A');
  return new;
end
$$ LANGUAGE plpgsql;