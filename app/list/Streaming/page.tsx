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
          <Heading type={1} color='gray' text='Eventos de streaming en España 2025' />
          <p className='gray'>
            Vive el streaming en directo desde el público con tus creadores favoritos: especiales, shows IRL y experiencias únicas.
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
          url='streamhouse-live-2025'
          from='20'
          color='purple'
          when='Vie, 14 Feb 2025 20:00'
          name='StreamHouse LIVE - Streaming con público'
          venue='WiZink Center, Madrid'
          image='https://images.unsplash.com/photo-1626785774573-4ec8c8bd484e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='ibai-24h-stream'
          from='25'
          color='red'
          when='Sáb, 29 Mar 2025 19:00'
          name='Ibai 24H Live - Edición Presencial'
          venue='Palau Sant Jordi, Barcelona'
          image='https://images.unsplash.com/photo-1620138546026-d2f10ee2c2ae?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='charlando-tranquilamente-live'
          from='30'
          color='gray'
          when='Dom, 13 Abr 2025 18:00'
          name='Charlando Tranquilamente - IRL con invitados'
          venue='Teatro Coliseum, Madrid'
          image='https://images.unsplash.com/photo-1626785773906-7bfe94bd18da?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='grefg-streamarena'
          from='22'
          color='orange'
          when='Sáb, 3 May 2025 20:00'
          name='TheGrefg - Stream Arena Experience'
          venue='Auditorio El Batel, Cartagena'
          image='https://images.unsplash.com/photo-1603572219216-2cd8d7f4b6b2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='twitchrooms-malaga'
          from='15'
          color='blue'
          when='Dom, 18 May 2025 12:00'
          name='Twitch Rooms - Setups abiertos al público'
          venue='FYCMA, Málaga'
          image='https://images.unsplash.com/photo-1618220179428-e836e9d2b2f3?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='streamfest-gala2025'
          from='35'
          color='green'
          when='Vie, 20 Jun 2025 21:00'
          name='StreamFest Gala 2025 - Premios en vivo'
          venue='Cartuja Center, Sevilla'
          image='https://images.unsplash.com/photo-1619856456515-b0771eec7049?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
      </div>
    </Section>
  </Master>
);

const title = 'Eventos de streaming en España 2025';
const canonical = 'https://streamevents.com/eventos-streaming-espana-2025';
const description = 'Eventos presenciales de streaming en vivo, especiales IRL y shows únicos con streamers y youtubers en España durante 2025.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'streaming en directo, IRL, streamers, eventos twitch, shows en vivo, españa 2025',
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
