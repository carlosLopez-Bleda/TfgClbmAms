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
          <Heading type={1} color='gray' text='Cambiar contraseña' />
          <p className='gray form-information'>
            Por favor, introduce tu nueva contraseña. Es recomendable utilizar una contraseña segura
            que no estés usando en otros sitios. Tu nueva contraseña debe tener al menos 8
            caracteres.
          </p>
        </div>
        <Form />
      </div>
    </Section>
  </Master>
);

const title = 'Cambiar contraseña';
const canonical = 'https://streamevents.com/members/password';
const description = 'StreamEvents es la plataforma moderna para eventos de streamers en España';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'eventos streamers españa',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'StreamEvents',
    images: 'https://streamevents.com/logo192.png', // cámbialo si ya tienes un logo nuevo
  },
};

export default Page;
