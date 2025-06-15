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
          <Heading type={1} color='gray' text='Cambiar correo electrónico' />
          <p className='gray form-information'>
            Por favor, introduce tu nuevo correo electrónico. Te enviaremos un email de verificación
            con un código de activación. Tu correo actual es <strong>cenk@cenksari.com</strong>
          </p>
        </div>
        <Form />
      </div>
    </Section>
  </Master>
);

const title = 'Cambiar correo electrónico';
const canonical = 'https://streamevents.com/members/email';
const description = 'Una solución moderna para la gestión de entradas en línea.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'entradas modernas, gestión eventos, streamEvents',
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
