ALTER TABLE public.shopping_cart
    ADD CONSTRAINT user_product UNIQUE (user_id, product_id);
-- Table: public.morder

-- DROP TABLE public.morder;

CREATE TABLE public.morder
(
    id bigint NOT NULL DEFAULT nextval('morder_id_seq'::regclass),
    order_no integer NOT NULL DEFAULT nextval('morder_order_no_seq'::regclass),
    mdate timestamp with time zone NOT NULL,
    descr text COLLATE pg_catalog."default",
    CONSTRAINT morder_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.morder
    OWNER to postgres;

-- Table: public.order_details

-- DROP TABLE public.order_details;

CREATE TABLE public.order_details
(
    id bigint NOT NULL DEFAULT nextval('order_details_id_seq'::regclass),
    order_id bigint NOT NULL,
    product_id bigint NOT NULL,
    user_id integer NOT NULL,
    qty integer NOT NULL,
    descr text COLLATE pg_catalog."default",
    jdescr jsonb,
    CONSTRAINT order_details_pkey PRIMARY KEY (id),
    CONSTRAINT product_id FOREIGN KEY (product_id)
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.order_details
    OWNER to postgres;