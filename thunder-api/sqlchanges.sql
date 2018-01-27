ALTER TABLE public.shopping_cart
    ADD CONSTRAINT user_product UNIQUE (user_id, product_id);