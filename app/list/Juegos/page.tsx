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
          <Heading type={1} color='gray' text='Eventos de videojuegos en España 2025' />
          <p className='gray'>
            Participa en experiencias y eventos únicos centrados en videojuegos, con tus streamers y creadores favoritos.
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
          url='minecraft-extremo-show'
          from='30'
          color='green'
          when='Sáb, 15 Mar 2025 17:00'
          name='Minecraft Extremo - IRL Show & Survival Arena'
          venue='IFEMA, Madrid'
          image='https://images.unsplash.com/photo-1608222351219-58c8c6c8f6be?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='cod-torneo-warz'
          from='20'
          color='gray'
          when='Dom, 4 May 2025 18:00'
          name='Call of Duty Warzone - Torneo & Meet'
          venue='Auditorio Mar de Vigo, Galicia'
          image='https://images.unsplash.com/photo-1601314078641-05a5f0f1781a?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='assassins-creed-live'
          from='35'
          color='red'
          when='Vie, 30 May 2025 20:00'
          name='Assassin’s Creed Live - Experiencia Histórica'
          venue='Teatro Lope de Vega, Sevilla'
          image='https://images.unsplash.com/photo-1618681763795-2cd38d8b96b2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='gta-roleplay-meet'
          from='18'
          color='purple'
          when='Sáb, 7 Jun 2025 19:30'
          name='GTA V Roleplay Meet IRL'
          venue='La Farga, Hospitalet de Llobregat'
          image='https://images.unsplash.com/photo-1635334316809-b5e6e3c9b3b9?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='valorant-cup-influencers'
          from='22'
          color='teal'
          when='Dom, 21 Sep 2025 17:00'
          name='Valorant Influencer Cup'
          venue='Palacio de Congresos, Zaragoza'
          image='https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='fortnite-live-battle'
          from='25'
          color='blue'
          when='Vie, 10 Oct 2025 18:00'
          name='Fortnite Live Battle - Ibailand vs SquadK'
          venue='Bilbao Arena, Bilbao'
          image='https://images.unsplash.com/photo-1580128636132-df7c2ac9b9b2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
      </div>
    </Section>
  </Master>
);

const title = 'Eventos de videojuegos en España 2025';
const canonical = 'https://streamevents.com/eventos-videojuegos-espana-2025';
const description = 'Descubre los mejores eventos presenciales dedicados a videojuegos como Minecraft, Call of Duty, GTA o Valorant en España, organizados por streamers e influencers.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'videojuegos, eventos gaming, influencers, Minecraft, COD, GTA, Fortnite, España 2025',
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
