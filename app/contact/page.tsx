import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='padding-bottom center'>
          <Heading type={1} color='gray' text='Contacto' />
          <p className='gray form-information'>
            No dudes en ponerte en contacto con nosotros a través de los siguientes canales de comunicación
            para cualquier duda, sugerencia o incidencia.
          </p>
        </div>
      </div>
    </Section>

    <Section className='gray-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={5} color='gray' text='Atención al cliente' />
          <p className='gray form-information'>
            Nuestro equipo de soporte está disponible de lunes a viernes de <strong>9:00 a 18:00</strong>,
            y los fines de semana de <strong>10:00 a 14:00</strong>. Haz clic en el botón de abajo para atención en directo.
          </p>
          <div className='button-container'>
            <ButtonLink
              color='gray-overlay'
              text='Atención en directo'
              rightIcon='arrow_forward'
              url=''
            />
            &nbsp; &nbsp;
            <ButtonLink
              color='gray-filled'
              text='Envíanos un e-mail'
              rightIcon='arrow_forward'
              url=''
            />
          </div>
        </div>
      </div>
    </Section>

    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={5} color='gray' text='¿En qué podemos ayudarte?' />
          <p className='gray form-information'>
            ¿Quieres consultar primero nuestra sección de ayuda para ver si encuentras allí tu respuesta?
          </p>
          <div className='button-container'>
            <ButtonLink color='gray-filled' text='Ir a la ayuda' rightIcon='arrow_forward' url='help' />
          </div>
        </div>
      </div>
    </Section>

    <Section className='gray-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={5} color='gray' text='Datos de contacto' />
          <div className='paragraph-container'>
            <p className='gray'>
              Puedes escribirnos directamente a
              <br />
              <strong>hola@streamevents.com</strong>
              <br />
              <br />
              o llamarnos al
              <br />
              <strong>+34 912 345 678</strong>
              <br />
              <br />
              <strong>Nuestra oficina está en</strong>
              <br />
              Calle de los Streamers, 12<br />
              28010 Madrid, España
            </p>
          </div>
          <div className='button-container'>
            <ButtonLink color='blue-filled' text='Abrir en mapas' rightIcon='arrow_forward' url='' />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Contacto';
const mainUrl = 'https://www.streamevents.com';
const canonical = `${mainUrl}/contacto`;
const description = 'StreamEvents es la plataforma donde descubrir eventos de streamers en España.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'streamers, eventos, contacto, atención al cliente, España',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'StreamEvents',
    images: `${mainUrl}/logo.png`,
  },
};

export default Page;
