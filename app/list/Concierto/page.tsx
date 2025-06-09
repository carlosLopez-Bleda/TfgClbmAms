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
          <Heading type={1} color='gray' text='Conciertos en España 2025' />
          <p className='gray'>
            Descubre los conciertos más destacados que tendrán lugar en España durante 2025.
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
          url='ana-belen-gira'
          from='35'
          color='red'
          when='Sáb, 5 Jul 2025 21:00'
          name='Ana Belén - Gira "Más D Ana"'
          venue='Teatro Real, Madrid'
          image='https://anabelen.es/wp-content/uploads/2024/12/CARTEL-MAS-DE-ANA-296-CM-X-210-CM-0P1-SIN-TEXTOS-CMYK-OK-.jpg'
        />
        <EventCard
          url='nil-moliner-nexo'
          from='40'
          color='green'
          when='Sáb, 22 Nov 2025 20:30'
          name='Nil Moliner - Gira "NEXO"'
          venue='Navarra Arena, Pamplona'
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzEggyAwErQG38CPO2bJiUdi0m8vcJRqh2Q&s'
        />
        <EventCard
          url='leiva-tour-gigante'
          from='45'
          color='blue'
          when='Vie, 8 Nov 2025 20:00'
          name='Leiva - Tour Gigante 2025'
          venue='Palau Sant Jordi, Barcelona'
          image='https://marenostrumfuengirola.com/wp-content/uploads/2024/11/Leiva-Fuengirola-1920x1080-2025.jpg'
        />
        <EventCard
          url='ed-sheeran-madrid'
          from='60'
          color='orange'
          when='Sáb, 31 May 2025 21:00'
          name='Ed Sheeran - Mathematics Tour'
          venue='Estadio Metropolitano, Madrid'
          image='https://img-estaticos.atleticodemadrid.com/system/file5s/92842/medium2x2/PsYtqd87SF_ES-RiyadhAir1920x108030+31may.jpg?1748368382'
        />
        <EventCard
          url='emilia-madrid'
          from='50'
          color='purple'
          when='Sáb, 7 Jun 2025 20:00'
          name='Emilia - Tour 2025'
          venue='Movistar Arena, Madrid'
          image='https://le-cdn.website-editor.net/s/8ac6ded52b0d4b63b24d376ef1d71628/dms3rep/multi/opt/GIRA+EMILIA+ACTUALIZADO-640w.jpg?Expires=1751450476&Signature=Trd62Tw1KFj321iT8zEqRSLaJswosWBTSDsyqDDV0HNnNL-~riLxS2ldIUBlf29621Zy41O3uoC9FNib7NDDO4HNGJuTyyAKiEp68Rrbt-bIFlToFmaWla4BeizEaExkzqdFI5R9OC5hHkYlDss2jhTQmSd51fskLcleN6R92bpvym5m9wkHEEP6Yt4f9gE2DuBOCp~P7TC6QZSH-6AuqCUPJPwy8eZZ20qlnazt3rwTj7R7214mns01o9C-DhwQD80s01YzlUofaRo7rDqfcSiMAj2xErk6Sl2sYMEbKXDRJnbpSsWyVqbSkFpFD~NIWB3ElbAMmdPTahkk1voYeA__&Key-Pair-Id=K2NXBXLF010TJW'
        />
        <EventCard
          url='mana-vivir-sin-aire'
          from='55'
          color='teal'
          when='Vie, 20 Jun 2025 22:00'
          name='Maná - Vivir Sin Aire Tour'
          venue='Marenostrum Fuengirola, Málaga'
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIuECAkWOUbsbBiJJYVgr7FRLYeQ9tl7WOdYaOymojsBHOYmdsjrn-BhkdZz7ND-Omow0&usqp=CAU'
        />
      </div>
    </Section>
  </Master>
);

const title = 'Conciertos en España 2025';
const canonical = 'https://streamevents.com/conciertos-espana-2025';
const description = 'Explora los conciertos más esperados en España durante el año 2025.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'conciertos 2025, España, música en vivo, giras, eventos musicales',
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
