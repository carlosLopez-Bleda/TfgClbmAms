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
          <Heading type={1} color='gray' text='Change password' />
          <p className='gray form-information'>
             Por favor, introduce tu nueva contraseña. Es recomendable usar una contraseña segura que no estés utilizando en otro sitio. Tu nueva contraseña debe tener al menos 8 caracteres.
          </p>
        </div>
        <Form />
      </div>
    </Section>
  </Master>
);

const title = 'Change password';
const canonical = 'https://streamevents.com/members/password';
const description = '';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'stream events',
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
