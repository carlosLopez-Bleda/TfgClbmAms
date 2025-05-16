import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import NewsCard from '@components/Card/NewsCard';

const news = [
  {
    when: 'Lun, 15 May 2025 12:00',
    name: 'StreamEvents lanza su beta privada para testers',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=400&auto=format&fit=crop',
    url: '/news/beta-lanzamiento',
  },
  {
    when: 'Dom, 12 May 2025 18:00',
    name: 'La Velada del Año IV ya aparece en StreamEvents con todos los detalles',
    image: 'https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?q=80&w=400&auto=format&fit=crop',
    url: '/news/velada-iv',
  },
  {
    when: 'Vie, 10 May 2025 09:00',
    name: 'Nuevas funciones: ahora puedes seguir a tus streamers favoritos',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop',
    url: '/news/favoritos-streamers',
  },
  {
    when: 'Mié, 8 May 2025 16:30',
    name: 'Partidazo de Youtubers 5: preventa disponible',
    image: 'https://images.unsplash.com/photo-1606813903284-4fef8f7d41f9?q=80&w=400&auto=format&fit=crop',
    url: '/news/partidazo-5',
  },
  {
    when: 'Lun, 6 May 2025 14:00',
    name: 'Colaboración con Atomcal: sincroniza eventos con tu calendario',
    image: 'https://images.unsplash.com/photo-1606788075761-8f8682f98d6a?q=80&w=400&auto=format&fit=crop',
    url: '/news/atomcal-sync',
  },
  {
    when: 'Sáb, 4 May 2025 11:00',
    name: 'Entrevista exclusiva: cómo nació StreamEvents',
    image: 'https://images.unsplash.com/photo-1515162305284-9f75b5c8733e?q=80&w=400&auto=format&fit=crop',
    url: '/news/origen-streamevents',
  },
];

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='padding-bottom center'>
          <Heading type={1} color='gray' text='Noticias' />
          <p className='gray'>Actualizaciones importantes y novedades del equipo de StreamEvents.</p>
        </div>
      </div>
    </Section>

    <Section className='list-cards'>
      <div className='container center'>
        {news.map((item, index) => (
          <NewsCard
            key={index}
            url={item.url}
            color='red'
            when={item.when}
            name={item.name}
            image={item.image}
          />
        ))}
      </div>
    </Section>
  </Master>
);

const title = 'Noticias';
const canonical = 'https://streamevents.app/news';
const description = 'Todas las novedades y comunicados de StreamEvents, la plataforma de eventos de streamers.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'streaming, twitch, eventos streamers, noticias, streamevents',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'StreamEvents',
    images: 'https://streamevents.app/logo192.png',
  },
};

export default Page;
