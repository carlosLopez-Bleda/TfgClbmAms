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
          <Heading type={1} color='gray' text='Eventos para niños en España 2025' />
          <p className='gray'>
            Descubre shows familiares y eventos infantiles organizados por streamers y creadores para los más pequeños.
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
          url='minecraft-familia-aventura'
          from='12'
          color='lightgreen'
          when='Dom, 23 Mar 2025 12:00'
          name='Aventura Minecraft en Familia'
          venue='Palacio de Congresos, Granada'
          image='https://images.unsplash.com/photo-1597764693982-a94d964b1b08?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='thegrefg-kids-day'
          from='15'
          color='orange'
          when='Sáb, 19 Abr 2025 11:00'
          name='TheGrefg Kids Day - Juegos & Fotos'
          venue='Auditorio de Castellón, Castellón'
          image='https://images.unsplash.com/photo-1574175679008-5cbb6ea3a5a4?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='magiaytuber-show'
          from='10'
          color='yellow'
          when='Sáb, 10 May 2025 17:00'
          name='Show de Magia con Youtubers Kids'
          venue='Teatro Olympia, Valencia'
          image='https://images.unsplash.com/photo-1551554781-9ecfadc3633f?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='ladypache-showkids'
          from='14'
          color='pink'
          when='Dom, 8 Jun 2025 12:00'
          name='LadyPache Kids Show - Canta & Crea'
          venue='Teatro Cervantes, Málaga'
          image='https://images.unsplash.com/photo-1531266751318-4f588e894f9c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='familia-streamers-taller'
          from='8'
          color='skyblue'
          when='Sáb, 21 Jun 2025 10:30'
          name='Taller Creativo con Familia de Streamers'
          venue='Espacio Cultural Matadero, Madrid'
          image='https://images.unsplash.com/photo-1526634332515-d56c5fd169ba?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='canta-juega-kidsfest'
          from='11'
          color='lightcoral'
          when='Dom, 5 Oct 2025 11:00'
          name='KidsFest: Canta, Juega y Baila'
          venue='Pabellón Multiusos, Salamanca'
          image='https://images.unsplash.com/photo-1531605912074-c1f50c3f9889?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
      </div>
    </Section>
  </Master>
);

const title = 'Eventos para niños en España 2025';
const canonical = 'https://streamevents.com/eventos-ninos-espana-2025';
const description = 'Explora espectáculos familiares y eventos infantiles organizados por youtubers y streamers para niños en toda España.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'eventos niños, streamers, youtubers kids, familia, espectáculos infantiles, España 2025',
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
