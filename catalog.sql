PGDMP     '    "                {            catalog    15.1    15.1     
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    178321    catalog    DATABASE     {   CREATE DATABASE catalog WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE catalog;
                postgres    false            �            1259    178342 	   directory    TABLE     i   CREATE TABLE public.directory (
    id bigint NOT NULL,
    directory_name text,
    parent_id bigint
);
    DROP TABLE public.directory;
       public         heap    postgres    false            �            1259    178341    directory_id_seq    SEQUENCE     �   ALTER TABLE public.directory ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.directory_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    219            �            1259    178331    feedback    TABLE     f   CREATE TABLE public.feedback (
    id bigint NOT NULL,
    text text,
    fk_goods bigint NOT NULL
);
    DROP TABLE public.feedback;
       public         heap    postgres    false            �            1259    178330    feedback_id_seq    SEQUENCE     �   ALTER TABLE public.feedback ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.feedback_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    217            �            1259    178323    goods    TABLE     �   CREATE TABLE public.goods (
    id bigint NOT NULL,
    name text,
    image text,
    description text,
    price double precision
);
    DROP TABLE public.goods;
       public         heap    postgres    false            �            1259    178322    goods_id_seq    SEQUENCE     �   ALTER TABLE public.goods ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.goods_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215                      0    178342 	   directory 
   TABLE DATA           B   COPY public.directory (id, directory_name, parent_id) FROM stdin;
    public          postgres    false    219                    0    178331    feedback 
   TABLE DATA           6   COPY public.feedback (id, text, fk_goods) FROM stdin;
    public          postgres    false    217   X                 0    178323    goods 
   TABLE DATA           D   COPY public.goods (id, name, image, description, price) FROM stdin;
    public          postgres    false    215   u                  0    0    directory_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.directory_id_seq', 6, true);
          public          postgres    false    218                       0    0    feedback_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.feedback_id_seq', 9, true);
          public          postgres    false    216                       0    0    goods_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.goods_id_seq', 3, true);
          public          postgres    false    214            r           2606    178348    directory directory_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.directory
    ADD CONSTRAINT directory_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.directory DROP CONSTRAINT directory_pkey;
       public            postgres    false    219            p           2606    178329    goods goods_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.goods
    ADD CONSTRAINT goods_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.goods DROP CONSTRAINT goods_pkey;
       public            postgres    false    215            s           2606    178336    feedback fk_good    FK CONSTRAINT     z   ALTER TABLE ONLY public.feedback
    ADD CONSTRAINT fk_good FOREIGN KEY (fk_goods) REFERENCES public.goods(id) NOT VALID;
 :   ALTER TABLE ONLY public.feedback DROP CONSTRAINT fk_good;
       public          postgres    false    217    3184    215               7   x��� 0���0H��������lYP?���Mc��Dض`!w9��b� K	F            x������ � �            x�3估��/,�0��$��Ă���2���t�{/��paP~�Ş{/v_��i�g�e�y�(��b��f�T?��[��[��!ZL���Z.�]��4EKL�M�!i1�1������ cJUS     