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
          <Heading type={1} color='gray' text='Activación de cuenta' />
          <p className='gray form-information'>
            Antes de poder iniciar sesión, debes activar tu cuenta con el código enviado a tu
            correo electrónico. Si no ves el correo en unos minutos, revisa la carpeta de correo
            no deseado o spam. También puedes hacerlo más tarde desde el enlace de tu correo.
          </p>
        </div>
        <Form />
      </div>
    </Section>
  </Master>
);

const title = 'Activación de cuenta';
const canonical = 'https://modern-ticketing.com/members/activate/account';
const description = 'Modern Ticketing es una solución moderna para gestionar eventos y entradas.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'entradas, eventos, activación de cuenta',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'Modern Ticketing',
    images: 'https://modern-ticketing.com/logo192.png',
  },
};

export default Page;
