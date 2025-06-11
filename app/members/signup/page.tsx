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
          <Heading type={1} color='gray' text='Crear cuenta' />
          <p className='gray form-information'>
            Crea una cuenta para personalizar tu experiencia en el proceso de compra de entradas.{' '}
            <Link href='/members/signin' className='blue'>
              Haz clic aquí
            </Link>{' '}
            si ya tienes una cuenta.
          </p>
        </div>
        <Form />
      </div>
    </Section>
  </Master>
);

const title = 'Crear cuenta';
const canonical = 'https://streamevents.com/members/signup';
const description = 'Modern ticketing es una solución moderna de venta de entradas';

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