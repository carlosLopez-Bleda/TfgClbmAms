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
          <Heading type={1} color='gray' text='¿Olvidaste tu contraseña?' />
          <p className='gray form-information'>
            Por favor, introduce tu correo electrónico registrado. Te enviaremos instrucciones para
            restablecer tu contraseña. Si no ves el correo en unos minutos, revisa tu bandeja de
            spam o correo no deseado.
          </p>
        </div>
        <Form />
      </div>
    </Section>
  </Master>
);

const title = '¿Olvidaste tu contraseña?';
const canonical = 'https://stream-events.com/members/forgot';
const description = 'StreamEvents es tu plataforma para eventos de streamers en España.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'streamers, eventos, entradas, streaming, España',
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
