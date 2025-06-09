import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import EventCard from '@components/Card/EventCard';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='padding-bottom center'>
          <Heading type={1} color='gray' text='Eventos deportivos en España 2025' />
          <p className='gray'>
            Encuentra los eventos deportivos más destacados organizados por streamers, influencers y youtubers en España.
          </p>
        </div>
      </div>
    </Section>

    <Section className='list-cards'>
      <div
        className='container'
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          justifyItems: 'center',
          paddingInline: '1rem',
        }}
      >
        <EventCard
          url='partidazo-youtubers-2025'
          from='25'
          color='red'
          when='Sáb, 14 Jun 2025 19:00'
          name='Partidazo de Youtubers 5.0'
          venue='Estadio Benito Villamarín, Sevilla'
          image='https://images.unsplash.com/photo-1606214174585-449ab3b0b8b7?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='kings-league-final-2025'
          from='30'
          color='blue'
          when='Dom, 6 Jul 2025 20:00'
          name='Final Kings League by Piqué & Ibai'
          venue='Cívitas Metropolitano, Madrid'
          image='https://images.unsplash.com/photo-1613151833897-c74e5a7806c9?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='velada-boxeo-4'
          from='35'
          color='purple'
          when='Sáb, 19 Jul 2025 21:00'
          name='La Velada del Año 4 - Deporte & Show'
          venue='Estadio Olímpico, Barcelona'
          image='https://images.unsplash.com/photo-1598887142487-48c464f3c8ee?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='padel-show-ibai'
          from='15'
          color='green'
          when='Vie, 10 Oct 2025 18:00'
          name='Ibai & Amigos - Pádel Showdown'
          venue='WiZink Center, Madrid'
          image='https://images.unsplash.com/photo-1624298351066-2b380d9727c4?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='retos-challenge-parkour'
          from='12'
          color='orange'
          when='Dom, 28 Sep 2025 12:00'
          name='TheGrefg - Urban Challenge & Parkour'
          venue='Espacio Multiusos, Valencia'
          image='https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='beast-match-lolito'
          from='20'
          color='teal'
          when='Sáb, 1 Nov 2025 19:30'
          name='Beast Match by Lolito Fdez'
          venue='Pabellón Martín Carpena, Málaga'
          image='https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
      </div>
    </Section>
  </Master>
);

const title = 'Eventos deportivos en España 2025';
const canonical = 'https://streamevents.com/eventos-deportivos-espana-2025';
const description = 'Encuentra todos los eventos deportivos de streamers, youtubers e influencers en España durante 2025.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'eventos deportivos, influencers, youtubers, twitch, España 2025, Kings League, Velada del Año, Partidazo',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'Stream Events',
    images: 'https://streamevents.com/logo.png',
  },
};

export default Page;
