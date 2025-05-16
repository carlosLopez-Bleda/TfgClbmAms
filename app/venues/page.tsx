import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import VenueCard from '@components/Card/VenueCard';
import CardGroup from '@components/Card/CardGroup';
import FormSearch from './components/FormSearch';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Recintos y lugares' />
          <p className='gray'>
            Explora los recintos más destacados donde se celebran eventos de streamers. Encuentra
            fácilmente dónde tendrá lugar tu próximo evento favorito.
          </p>
          <div className='top-search'>
            <FormSearch />
          </div>
        </div>
      </div>
    </Section>

    <CardGroup url='venues' title='Recintos destacados' color='gray' background='gray'>
      <VenueCard
        url='/venue/wizink-center'
        color='gray'
        name='WiZink Center'
        location='Madrid, España'
        image='https://images.unsplash.com/photo-1667323567047-434d8bc4aca2?q=80&w=1000&auto=format&fit=crop'
      />
      <VenueCard
        url='/venue/palau-sant-jordi'
        color='gray'
        name='Palau Sant Jordi'
        location='Barcelona, España'
        image='https://images.unsplash.com/photo-1654111922009-74dbebd0a70f?q=80&w=1000&auto=format&fit=crop'
      />
      <VenueCard
        url='/venue/eventim-apollo'
        color='gray'
        name='Eventim Apollo'
        location='Londres, Reino Unido'
        image='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop'
      />
      <VenueCard
        url='/venue/royal-albert-hall'
        color='gray'
        name='Royal Albert Hall'
        location='Londres, Reino Unido'
        image='https://images.unsplash.com/photo-1521334726092-b509a19597c6?q=80&w=1000&auto=format&fit=crop'
      />
    </CardGroup>

    <CardGroup url='venues' title='Otros lugares' color='gray' background='white'>
      <VenueCard
        url='/venue/ifema-madrid'
        color='gray'
        name='IFEMA Madrid'
        location='Madrid, España'
        image='https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=1000&auto=format&fit=crop'
      />
      <VenueCard
        url='/venue/somerset-house'
        color='gray'
        name='Somerset House'
        location='Londres, Reino Unido'
        image='https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?q=80&w=1000&auto=format&fit=crop'
      />
      <VenueCard
        url='/venue/southbank-centre'
        color='gray'
        name='Southbank Centre'
        location='Londres, Reino Unido'
        image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1000&auto=format&fit=crop'
      />
    </CardGroup>
  </Master>
);

const title = 'Recintos de eventos';
const canonical = 'https://streamevents.app/venues';
const description =
  'Explora los mejores lugares donde se celebran los grandes eventos del mundo streamer. Descubre recintos como el WiZink Center, Palau Sant Jordi o Royal Albert Hall.';

export const metadata: Metadata = {
  title,
  description,
  keywords:
    'streamers, eventos de streamers, recintos, madrid, barcelona, londres, velada del año, streamevents',
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
