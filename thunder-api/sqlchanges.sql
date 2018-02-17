ALTER TABLE public.shopping_cart
    ADD CONSTRAINT user_product UNIQUE (user_id, product_id);

ALTER TABLE public.order_details
    ADD CONSTRAINT order_id FOREIGN KEY (order_id)
    REFERENCES public.morder (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
-- Table: public.morder

-- DROP TABLE public.morder;
CREATE SEQUENCE public.morder_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;
CREATE SEQUENCE public.order_details_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.shopping_cart_id_seq
    OWNER TO postgres;-- Table: public.morder

CREATE SEQUENCE public.morder_order_no_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.shopping_cart_id_seq
    OWNER TO postgres;
    
-- DROP TABLE public.morder;

CREATE TABLE public.morder
(
    id bigint NOT NULL DEFAULT nextval('morder_id_seq'::regclass),
    order_no integer NOT NULL DEFAULT nextval('morder_order_no_seq'::regclass),
    mdate timestamp with time zone NOT NULL DEFAULT now(),
    descr text COLLATE pg_catalog."default",
    user_id integer NOT NULL,
    amount numeric(12,2) default 0,
    CONSTRAINT morder_pkey PRIMARY KEY (id),
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.morder
    OWNER to postgres;

-- Table: public.order_details

-- DROP TABLE public.order_details;

-- Table: public.order_details

-- DROP TABLE public.order_details;

CREATE TABLE public.order_details
(
    id bigint NOT NULL DEFAULT nextval('order_details_id_seq'::regclass),
    order_id bigint NOT NULL,
    product_id bigint NOT NULL,
    qty integer NOT NULL,
    descr text COLLATE pg_catalog."default",
    price numeric(12,2) NOT NULL,
    CONSTRAINT order_details_pkey PRIMARY KEY (id),
    CONSTRAINT product_id FOREIGN KEY (product_id)
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.order_details
    OWNER to postgres;