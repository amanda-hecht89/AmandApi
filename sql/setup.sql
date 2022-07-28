-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
drop table if exists amandas;

create table amandas (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    last_name VARCHAR NOT NULL,
    age INT,
    year INT,
    image_url VARCHAR,
    famous VARCHAR,
    alive BOOLEAN

);

insert into amandas (last_name, age, year, image_url, famous, alive) values
('Seyfried', 35, 1985, 'https://www.biography.com/actor/amanda-seyfried', ' Actress: Mean Girls', true),
('Bynes', 36, 1986, 'https://en.wikipedia.org/wiki/Amanda_Bynes', 'Actress: The Amanda Show', true),
('Peet', 50, 1972, 'https://mubi.com/cast/amanda-peet', 'Actress: Saving Silverman', true),
('Jones', 44, 1835, 'https://en.wikipedia.org/wiki/Amanda_Jones_(inventor)#/media/File:AmandaJones_August1879a_rescanned.jpg', 'Inventor: Inventing the vaccuum method for canning food', false),
('Setton', 36, 1985, 'https://en.wikipedia.org/wiki/Amanda_Setton#/media/File:Amanda_Setton,_2009_(cropped).jpg', 'Actress: Gossip Girl', 'true'),
('Perez', 42, 1980, 'https://www.tunefind.com/artist/amanda-perez', 'American R&B singer-songwriter', true),
('Moore', 38, 1984, 'https://en.wikipedia.org/wiki/Mandy_Moore#/media/File:Mandy_Moore_at_SXSW_2018_(25904503147)_(cropped).jpg', 'Actress and singer-songwriter', true),
('Kessel', 30, 1991, 'https://en.wikipedia.org/wiki/Amanda_Kessel#/media/File:AmandaKessel.jpg', 'Athlete: Ice Hokey Olympian', true);


