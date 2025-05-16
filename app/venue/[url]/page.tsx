import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import EventCard from '@components/Card/EventCard';
import CardGroup from '@components/Card/CardGroup';

const Page: React.FC = () => (
  <Master>
    <div className='blur-cover'>
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3")`,
        }}
        className='event-cover cover-image flex flex-v-center flex-h-center'
      />
      <div className='cover-info'>
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3")`,
          }}
          className='cover-image image'
        />
        <Heading type={1} color='white' text='Wizink Center' />
        <Heading type={6} color='white' text='Madrid, España' />
      </div>
    </div>

    <Section className='white-background'>
      <div className='container'>
        <div className='venue-details'>
          <Heading type={4} color='gray' text='Sobre el recinto' />
          <div className='paragraph-container gray'>
            <p>
              El Wizink Center es uno de los espacios más icónicos para eventos multitudinarios en España. 
              Su infraestructura moderna y capacidad de más de 17.000 personas lo convierten en el lugar ideal para galas, conciertos y eventos de gran formato.
            </p>
            <p>
              Este recinto ha acogido importantes shows de música y deportes, y ahora es también el epicentro de los mayores eventos de streamers en el país, como "La Velada del Año", "Squid Craft Games Live", y otros espectáculos en directo protagonizados por creadores de contenido.
            </p>
          </div>
        </div>
      </div>
    </Section>

    <Section className='white-background'>
      <div className='container'>
        <Heading type={6} color='gray' text='Dirección' />
        <div className='paragraph-container'>
          <p className='gray'>Avenida Felipe II, s/n – 28009 Madrid</p>
        </div>

        <Heading type={6} color='gray' text='¿Cómo llegar?' />
        <div className='paragraph-container'>
          <p className='gray'>
            Puedes llegar en metro (Línea 2 – Goya) o en varias líneas de autobús (2, 28, 30, 56, 143). También hay parking disponible en las cercanías.
          </p>
          <p className='gray'>
            <a target='_blank' href='https://www.google.com/maps' className='blue'>
              Obtener indicaciones
            </a>
            &nbsp; &bull; &nbsp;
            <a target='_blank' href='https://www.google.com/maps' className='blue'>
              Ver en el mapa
            </a>
          </p>
        </div>

        <Heading type={6} color='gray' text='Accesibilidad' />
        <div className='paragraph-container'>
          <p className='gray'>
            El recinto cuenta con accesos adaptados, plazas reservadas y baños accesibles para personas con movilidad reducida. Si necesitas asistencia, contacta con la organización del evento.
          </p>
        </div>
      </div>
    </Section>

    <CardGroup url='list' title='Próximos eventos en este recinto' color='gray' background='gray'>
      <EventCard
        url='/events/velada-iv'
        from='25'
        color='orange'
        when='Sáb, 5 Jul 2025 20:00'
        name='La Velada del Año IV'
        venue='Wizink Center'
        image='https://images.unsplash.com/photo-1598387990657-d87e8141f3ef?q=80&w=400&auto=format&fit=crop'
      />
      <EventCard
        url='/events/golden-scene'
        from='15'
        color='orange'
        when='Dom, 14 Sep 2025 18:00'
        name='Golden Scene Awards'
        venue='Wizink Center'
        image='https://images.unsplash.com/photo-1616469831765-3ce3b5e5f3ff?q=80&w=400&auto=format&fit=crop'
      />
      <EventCard
        url='/events/twitch-live-madrid'
        from='30'
        color='orange'
        when='Vie, 10 Oct 2025 21:00'
        name='Twitch Live Madrid'
        venue='Wizink Center'
        image='https://images.unsplash.com/photo-1621267562525-c09c114e7898?q=80&w=400&auto=format&fit=crop'
      />
    </CardGroup>
  </Master>
);

const title = 'Wizink Center – Madrid';
const canonical = 'https://streamevents.app/venue/wizink-center';
const description = 'Descubre los próximos eventos de streamers en el Wizink Center con StreamEvents. Información del recinto, cómo llegar, accesibilidad y eventos destacados.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'wizink center, eventos streamers, madrid, velada del año, streamevents',
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
