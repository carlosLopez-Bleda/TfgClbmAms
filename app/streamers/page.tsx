'use client';

import { useState } from 'react';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import StreamerCard from '@components/Card/StreamerCard';

// Tipos
interface Streamer {
  id: number;
  name: string;
  username: string;
  platform: 'Twitch' | 'YouTube';
  image: string;
  followers: string;
  description: string;
  favorite?: boolean;
}

const streamers: Streamer[] = [
  {
    id: 1,
    name: 'Ibai Llanos',
    username: 'ibai',
    platform: 'Twitch',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Ibai_Llanos_%282024%292.jpg',
    followers: '15M+',
    description: 'Streamer, presentador y organizador de eventos como La Velada y Kings League.',
  },
  {
    id: 2,
    name: 'AuronPlay',
    username: 'auronplay',
    platform: 'Twitch',
    image:
      'https://www.lavanguardia.com/peliculas-series/images/profile/1988/11/w300/Ej3ntC4kZMRkkdeVjYITk8ppRN.jpg',
    followers: '14M+',
    description:
      'Uno de los streamers más vistos del mundo, conocido por Tortillaland y contenido humorístico.',
  },
  {
    id: 3,
    name: 'ElRubius',
    username: 'elrubius',
    platform: 'YouTube',
    image:
      'https://phantom-expansion.unidadeditorial.es/b10f8545e55b24d9da2a22bdefea4c3f/crop/0x0/1278x852/resize/414/f/jpg/assets/multimedia/imagenes/2021/01/23/16114188761310.jpg',
    followers: '40M+',
    description: 'Creador de contenido veterano y referente global del entretenimiento online.',
  },
  {
    id: 4,
    name: 'TheGrefg',
    username: 'thegrefg',
    platform: 'Twitch',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/09/TheGrefg_en_el_torneo_de_p%C3%A1del_de_Ibai_%282021%29.png',
    followers: '11M+',
    description:
      'Streamer y empresario. Organizador de los ESLAND y participante en la Kings League.',
  },
  {
    id: 5,
    name: 'xBuyer',
    username: 'xbuyer',
    platform: 'Twitch',
    image: 'https://pbs.twimg.com/profile_images/1551525694655676416/Uf54fztU_400x400.jpg',
    followers: '3M+',
    description: 'Creador de contenido y copresidente de xBuyer Team en la Kings League.',
  },
  {
    id: 6,
    name: 'Reven',
    username: 'reven',
    platform: 'Twitch',
    image:
      'https://imagenes.20minutos.es/files/image_990_556/files/fp/uploads/imagenes/2023/06/28/el-streamer-reven-ganador-de-la-primera-velada-del-ano.r_d.540-366-9167.jpeg',
    followers: '2M+',
    description: 'Analista y streamer de videojuegos, con presencia en eventos competitivos.',
  },
  {
    id: 7,
    name: 'Cristinini',
    username: 'cristinini',
    platform: 'Twitch',
    image:
      'https://piks.eldesmarque.com/thumbs/o/1200/bin/2021/09/17/whatsapp_image_2021_09_17_at_125127jpeg.jpeg',
    followers: '3M+',
    description:
      'Periodista y streamer. Participa en eventos como Twitch Rivals y colaboradora de TV.',
  },
  {
    id: 8,
    name: 'IlloJuan',
    username: 'illojuan',
    platform: 'Twitch',
    image: 'https://media.vandalsports.com/master/5-2023/2023518112542_1.jpg',
    followers: '2.5M+',
    description: 'Conocido por su humor andaluz, su comunidad es una de las más activas y fieles.',
  },
  {
    id: 9,
    name: 'RubiusOMG',
    username: 'rubius',
    platform: 'YouTube',
    image:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/a2592e98-5ba6-4c9a-9d9e-cf036d6f64c2-profile_image-300x300.jpg',
    followers: '40M+',
    description: 'Uno de los creadores españoles más influyentes del mundo.',
  },
  {
    id: 10,
    name: 'MenosTrece',
    username: 'menostrece',
    platform: 'Twitch',
    image: 'https://setupstreamers.com/wp-content/uploads/2021/07/Clipboard-10.jpg',
    followers: '1M+',
    description: 'Streamer de variedad, humor negro y contenido muy característico.',
  },
];

const Page: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]));
  };

  return (
    <Master>
      <Section className='white-background'>
        <div className='container'>
          <div className='padding-bottom center'>
            <Heading type={1} color='gray' text='Streamers españoles' />
            <p className='gray'>
              Descubre los principales streamers de España. Haz clic para ver más detalles o
              añadirlos a favoritos.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '2rem',
              paddingBottom: '4rem',
            }}
          >
            {streamers.map((streamer) => (
              <StreamerCard
                key={streamer.id}
                {...streamer}
                isFavorite={favorites.includes(streamer.id)}
                onToggleFavorite={() => toggleFavorite(streamer.id)}
              />
            ))}
          </div>
        </div>
      </Section>
    </Master>
  );
};

export default Page;
