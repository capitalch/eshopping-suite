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
     setweight(to_tsvector('pg_catalog.english', coalesce(new.name,'')), 'A') ||
	 setweight(to_tsvector('pg_catalog.english', coalesce(new.descr,'')), 'C') ||
	 setweight(array_to_tsvector(coalesce(new.tag,array[]::text[])), 'B') ||
	 setweight(to_tsvector('pg_catalog.english', coalesce(get_product_label(new.product_info),'')), 'A') ||
	 setweight(to_tsvector('pg_catalog.english', coalesce(product_trim_product_info_plv8(new.product_info),'{}')), 'A') ||
	 setweight(to_tsvector('pg_catalog.english',coalesce((select "name" from brand where id = new.brand_id),'')), 'A');
  return new;
end
$$ LANGUAGE plpgsql;

drop trigger if exists product_tsv_trigger on product;
CREATE TRIGGER product_tsv_trigger BEFORE INSERT OR UPDATE
    ON product FOR EACH ROW EXECUTE PROCEDURE product_tsv();

CREATE INDEX name ON table USING GIN (column);