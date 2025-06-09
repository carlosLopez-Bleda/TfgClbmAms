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
          <Heading type={1} color='gray' text='Torneos de streamers en España 2025' />
          <p className='gray'>
            Participa o disfruta en directo de los torneos más épicos organizados por tus streamers y youtubers favoritos.
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
          url='torneo-fortnite-duos-2025'
          from='20'
          color='blue'
          when='Sáb, 15 Feb 2025 18:00'
          name='Torneo Fortnite Duos - Influencer Edition'
          venue='Palacio de Congresos, Zaragoza'
          image='https://images.unsplash.com/photo-1625200833545-c097518be84c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='valorant-allstars-2025'
          from='25'
          color='purple'
          when='Dom, 23 Mar 2025 19:00'
          name='Valorant All-Stars by Mixwell & Friends'
          venue='Auditorio AXA, Barcelona'
          image='https://images.unsplash.com/photo-1611605698335-d7cc45f9f8b5?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='fifa23-streamers-cup'
          from='15'
          color='green'
          when='Vie, 11 Abr 2025 20:30'
          name='FIFA Streamers Cup - Ibai vs Spursito'
          venue='WiZink Center, Madrid'
          image='https://images.unsplash.com/photo-1612635043493-b4c7402a35e2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='leagueoflegends-5vs5-showdown'
          from='18'
          color='orange'
          when='Sáb, 17 May 2025 17:00'
          name='LoL 5v5 Streamers Showdown'
          venue='FIBES, Sevilla'
          image='https://images.unsplash.com/photo-1598137268411-d3886edba68a?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='cod-mobile-clash'
          from='10'
          color='gray'
          when='Dom, 29 Jun 2025 16:00'
          name='Call of Duty Mobile - Influencer Clash'
          venue='La Farga, L’Hospitalet'
          image='https://images.unsplash.com/photo-1615812760385-d0f32ed9b391?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
        <EventCard
          url='torneo-fortnite-build-fight'
          from='22'
          color='teal'
          when='Sáb, 9 Ago 2025 18:30'
          name='Fortnite Build Fight Royale - Creators Only'
          venue='Palacio de Ferias, Málaga'
          image='https://images.unsplash.com/photo-1615915763499-0ff39a9ae0b6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3'
        />
      </div>
    </Section>
  </Master>
);

const title = 'Torneos de streamers en España 2025';
const canonical = 'https://streamevents.com/torneos-espana-2025';
const description = 'Consulta los torneos de videojuegos organizados por streamers y youtubers en España durante 2025. Fortnite, Valorant, LoL, FIFA y más.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'torneos videojuegos, streamers, fortnite, valorant, lol, fifa, españa 2025, youtubers',
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
