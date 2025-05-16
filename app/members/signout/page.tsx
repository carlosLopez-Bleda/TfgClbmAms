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
        <div className='center'>
          <Heading type={1} color='gray' text='Sesión cerrada' />
          <p className='gray form-information'>
            Has cerrado sesión correctamente. Ahora puedes volver a la página de inicio con seguridad.
          </p>

          <div className='button-container'>
            <ButtonLink color='gray-overlay' text='Volver al inicio' url='/' />
            &nbsp; &nbsp;
            <ButtonLink color='blue-filled' text='Iniciar sesión de nuevo' url='/members/signin' />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Cerrar sesión';
const canonical = 'https://modern-ticketing.com/members/signout';
const description = 'StreamEvents es una solución moderna para eventos en línea y en vivo.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'eventos, entradas, streamers, conciertos, streaming',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'StreamEvents',
    images: 'https://modern-ticketing.com/logo192.png',
  },
};

export default Page;
