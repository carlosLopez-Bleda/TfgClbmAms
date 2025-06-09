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
          <Heading type={1} color='gray' text='Activación de e-mail' />
          <p className='gray form-information'>
            Debes activar tu nueva dirección de correo electrónico con el código enviado. Si no ves
            el correo en unos minutos, revisa tu carpeta de correo no deseado o spam. También puedes
            hacerlo más tarde con el enlace enviado a tu e-mail.
          </p>
        </div>
        <Form />
      </div>
    </Section>
  </Master>
);

const title = 'Activación de e-mail';
const canonical = 'https://streamevents.com/members/activate/email';
const description = 'Stream Events es una solución moderna para eventos y entradas';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'entradas eventos ticketing moderno',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'Stream Events',
    images: 'https://streamevents.com/logo192.png',
  },
};

export default Page;
