import { type Metadata } from 'next';

// components
import Box from '@components/Box/Box';
import Master from '@components/Layout/Master';
import Slider from '@components/Slider/Slider';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='padding-bottom center'>
          <Heading type={1} color='gray' text='Organizadores' />
          <p className='gray form-information'>
            Tanto si organizas un evento presencial como una experiencia online para tus seguidores,
            StreamEvents te ofrece la infraestructura ideal para centralizar la información y atraer
            a tu audiencia.
          </p>
        </div>
      </div>
    </Section>

    <Section>
      <div className='container'>
        <div className='center'>
          <Heading type={5} color='gray' text='Gestiona todo desde una sola plataforma' />
          <p className='gray form-information'>
            Con nuestra herramienta para organizadores puedes publicar eventos, enlazar entradas,
            recibir estadísticas de seguimiento y conectar directamente con tu comunidad. ¡Y es
            totalmente gratuito!
          </p>
          <div className='button-container'>
            <ButtonLink
              text='Publica tu evento'
              color='gray-filled'
              rightIcon='arrow_forward'
              url='/contact'
            />
          </div>
        </div>
      </div>
    </Section>

    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={5} color='gray' text='Promociona con estilo' />
          <p className='gray form-information'>
            Crea páginas atractivas y personalizadas para tus eventos. Añade imágenes, información,
            fechas y enlaces oficiales de compra de entradas. Nosotros nos encargamos del diseño
            responsive y profesional.
          </p>
          <div className='button-container'>
            <ButtonLink
              text='Empieza ahora'
              color='gray-filled'
              rightIcon='arrow_forward'
              url='/contact'
            />
          </div>
        </div>
      </div>
    </Section>

    <Section>
      <div className='container'>
        <div className='center'>
          <Heading type={5} color='gray' text='¿Cómo funciona?' />
          <p className='gray'>
            Te acompañamos en cada paso para asegurar que tu evento sea un éxito.
          </p>
        </div>
      </div>

      <div className='carousel padding-top'>
        <Slider>
          <Box className='gray'>
            <span className='material-symbols-outlined gray'>calendar_month</span>
            <p>Publica eventos fácilmente desde tu panel de organizador</p>
          </Box>
          <Box className='gray'>
            <span className='material-symbols-outlined gray'>visibility</span>
            <p>Obtén visibilidad entre miles de fans de streamers</p>
          </Box>
          <Box className='gray'>
            <span className='material-symbols-outlined gray'>insights</span>
            <p>Consulta estadísticas de interés y visualizaciones</p>
          </Box>
          <Box className='gray'>
            <span className='material-symbols-outlined gray'>link</span>
            <p>Enlaza tu venta de entradas desde cualquier plataforma externa</p>
          </Box>
          <Box className='gray'>
            <span className='material-symbols-outlined gray'>groups</span>
            <p>Conecta con tu comunidad a través de recomendaciones personalizadas</p>
          </Box>
          <Box className='gray'>
            <span className='material-symbols-outlined gray'>workspace_premium</span>
            <p>Destaca tu evento con opciones de promoción destacada</p>
          </Box>
        </Slider>
      </div>

      <div className='button-container center'>
        <ButtonLink
          text='Quiero colaborar'
          color='gray-filled'
          rightIcon='arrow_forward'
          url='/contact'
        />
      </div>
    </Section>
  </Master>
);

const title = 'Organizadores';
const canonical = 'https://streamevents.app/organizers';
const description =
  'StreamEvents conecta organizadores de eventos con miles de fans del mundo streaming.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'eventos streamers, organizar evento twitch, promotores, streamevents',
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
