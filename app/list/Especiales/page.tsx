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
          <Heading type={1} color='gray' text='Eventos especiales en España 2025' />
          <p className='gray'>
            Vive los momentos más exclusivos de tus creadores favoritos: shows únicos, celebraciones y experiencias irrepetibles.
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
          url='auron-aniversario'
          from='45'
          color='gold'
          when='Sáb, 12 Abr 2025 21:00'
          name='AuronPlay - 20 años en YouTube (Show Exclusivo)'
          venue='Palau de la Música, Barcelona'
          image='https://images.unsplash.com/photo-1558980664-10e7170c2011?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='thegrefg-mistery-show'
          from='55'
          color='purple'
          when='Vie, 17 Oct 2025 20:00'
          name='TheGrefg - Mistery Show Experience'
          venue='Auditorio AXA, Barcelona'
          image='https://images.unsplash.com/photo-1621609760416-8100ec77d97d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='rubius-metaverse'
          from='60'
          color='blue'
          when='Sáb, 26 Jul 2025 22:00'
          name='Rubius - Metaverse IRL + Virtual Tour'
          venue='IFEMA Madrid + Streaming'
          image='https://images.unsplash.com/photo-1551836022-e8f36f6a472d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='ibi-xperience'
          from='35'
          color='red'
          when='Dom, 20 Abr 2025 18:00'
          name='Ibai - IBI Xperience (Live + Cena VIP)'
          venue='WiZink Center, Madrid'
          image='https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='bytarifa-gala'
          from='25'
          color='green'
          when='Sáb, 3 May 2025 20:30'
          name='Bytarifa - Gala 10M de Seguidores'
          venue='Gran Teatro Falla, Cádiz'
          image='https://images.unsplash.com/photo-1616469829581-73909324d321?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='xokas-vs-audience'
          from='20'
          color='teal'
          when='Vie, 8 Ago 2025 21:00'
          name='Xokas vs. La Audiencia - Noche de debate extremo'
          venue='Cartuja Center, Sevilla'
          image='https://images.unsplash.com/photo-1581368120207-86d38011f4a1?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
      </div>
    </Section>
  </Master>
);

const title = 'Eventos especiales en España 2025';
const canonical = 'https://streamevents.com/eventos-especiales-espana-2025';
const description = 'Disfruta de los eventos más exclusivos y únicos organizados por streamers y youtubers en España durante 2025.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'eventos especiales, youtubers, streamers, twitch, exclusivos, España 2025',
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
