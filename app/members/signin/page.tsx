import Link from 'next/link';
import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import Form from './components/Form';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Iniciar sesión' />
          <p className='gray form-information'>
            Introduce tu correo electrónico y contraseña para acceder a tu cuenta. ¿No tienes cuenta?{' '}
            <Link href='/members/signup' className='blue'>
              Regístrate aquí
            </Link>
          </p>
        </div>
        <Form />
      </div>
    </Section>
  </Master>
);

const title = 'Iniciar sesión';
const canonical = 'https://modern-ticketing.com/members/signin';
const description = 'StreamEvents es una solución moderna para eventos en línea y en vivo.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'entradas, eventos, streamers, conciertos, teatro, streaming',
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
