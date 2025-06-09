import Link from 'next/link';
import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import EventCard from '@components/Card/EventCard';
import CardGroup from '@components/Card/CardGroup';

import TicketForm from './components/TicketForm';

const Page: React.FC = () => (
  <Master>
    <div className='blur-cover'>
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3")`,
        }}
        className='event-cover cover-image flex flex-v-center flex-h-center'
      />
      <div className='cover-info'>
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3")`,
          }}
          className='cover-image image'
        />
        <Heading type={1} color='white' text='La Velada del Año 4' />
        <Heading type={5} color='white' text='Sábado, 13 de julio de 2024 – 19:00' />
        <Heading type={6} color='white' text='Estadio Santiago Bernabéu, Madrid' />
      </div>
    </div>

    <Section className='white-background'>
      <div className='container'>
        <div className='event-details'>
          <div>
            <Heading type={4} color='gray' text='Detalles del evento' />
            <div className='paragraph-container gray'>
              <p>
                La Velada del Año es el evento de boxeo organizado por Ibai Llanos que reúne a los
                streamers más populares de España y Latinoamérica en una noche de combates, música y
                espectáculo sin igual.
              </p>
              <p>
                En su cuarta edición, el evento se celebra en el Estadio Santiago Bernabéu con
                artistas invitados y más de 80.000 asistentes presenciales. Una experiencia única
                tanto para fans del streaming como del entretenimiento en vivo.
              </p>
            </div>
          </div>
          <div>
            <div className='ticket-box'>
              <div className='ticket-box-header'>
                <Heading type={4} color='gray' text='Entradas disponibles' />
              </div>
              <TicketForm
                data={[
                  {
                    id: 1,
                    name: 'Grada General',
                    price: '20€',
                    ordering: 1,
                  },
                  {
                    id: 2,
                    name: 'VIP Experience',
                    price: '60€',
                    ordering: 2,
                    information: 'Incluye acceso preferente y zona exclusiva.',
                  },
                  {
                    id: 3,
                    name: 'Palco Premium',
                    price: '120€',
                    ordering: 3,
                    soldout: true,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section className='white-background'>
      <div className='container'>
        <Heading type={4} color='gray' text='Ubicación: Estadio Santiago Bernabéu' />
        <Heading type={6} color='gray' text='Dirección' />
        <div className='paragraph-container'>
          <p className='gray'>Av. de Concha Espina, 1, 28036 Madrid, España.</p>
        </div>
        <Heading type={6} color='gray' text='¿Cómo llegar?' />
        <div className='paragraph-container'>
          <p className='gray'>
            Puedes llegar fácilmente en metro (Línea 10, parada Santiago Bernabéu) o autobús.
          </p>
          <p className='gray'>
            <Link href='/venue/1' className='blue'>
              Ver detalles del recinto
            </Link>
            &nbsp; &bull; &nbsp;
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.google.com/maps?q=santiago+bernabeu'
              className='blue'
            >
              Cómo llegar
            </a>

            &nbsp; &bull; &nbsp;

            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.google.com/maps/place/Santiago+Bernabeu'
              className='blue'
            >
              Ver en mapa
            </a>
                </p>
        </div>
      </div>
    </Section>

    <CardGroup url='list' title='Eventos similares' color='orange' background='gray'>
      <EventCard
        url='2'
        from='15'
        color='orange'
        when='Viernes, 20 de septiembre de 2024 – 21:00'
        name='El Partidazo de Youtubers 5'
        venue='Cívitas Metropolitano, Madrid'
        image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop'
      />
      <EventCard
        url='3'
        from='12'
        color='orange'
        when='Sábado, 17 de agosto de 2024 – 20:30'
        name='Tortillaland All Stars'
        venue='FIBES Sevilla'
        image='https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=400&auto=format&fit=crop'
      />
      <EventCard
        url='4'
        from='18'
        color='orange'
        when='Domingo, 6 de octubre de 2024 – 17:00'
        name='Squid Craft Games Show'
        venue='Palau Sant Jordi, Barcelona'
        image='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop'
      />
    </CardGroup>
  </Master>
);

const title = 'La Velada del Año 4';
const canonical = 'https://streamevents.com/event/velada4';
const description =
  'Toda la información y entradas para La Velada del Año 4, el evento de boxeo de streamers más esperado en España.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'la velada del año, eventos streamers, entradas, ibai',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'StreamEvents',
    images: 'https://streamevents.com/logo192.png',
  },
};

export default Page;
