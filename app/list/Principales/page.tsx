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
          <Heading type={1} color='gray' text='Eventos en España' />
          <p className='gray'>
            Explora, busca y filtra los mejores eventos de streamers en España.
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
          url='1'
          from='10'
          color='blue'
          when='Sáb, 21 Sep 2024 19:00'
          name='Marbella Vice IRL'
          venue='Teatro EDP Gran Vía, Madrid'
          image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='2'
          from='15'
          color='blue'
          when='Vie, 9 Ago 2024 22:00'
          name='Ibai & Amigos Show'
          venue='WiZink Center, Madrid'
          image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='3'
          from='8'
          color='blue'
          when='Dom, 14 Mar 2024 15:00'
          name='StreeGaming Valencia'
          venue='Palau de la Música, Valencia'
          image='https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='4'
          from='20'
          color='blue'
          when='Lun, 2 Jul 2024 20:00'
          name='Grefg Tour en directo'
          venue='FIBES, Sevilla'
          image='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='5'
          from='12'
          color='blue'
          when='Sáb, 21 Sep 2024 19:00'
          name='Final Twitch Rivals España'
          venue='Auditorio AXA, Barcelona'
          image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='6'
          from='18'
          color='blue'
          when='Vie, 9 Ago 2024 22:00'
          name='AuronPlay + Biyín IRL Show'
          venue='Cartuja Center, Sevilla'
          image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
      </div>
    </Section>
  </Master>
);

const title = 'Eventos';
const canonical = 'https://stream-events.com/list';
const description = 'Descubre todos los eventos presenciales de tus streamers favoritos en España.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'eventos streamers, España, Twitch, shows IRL, conciertos, streaming',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'StreamEvents',
    images: 'https://stream-events.com/logo192.png',
  },
};

export default Page;
