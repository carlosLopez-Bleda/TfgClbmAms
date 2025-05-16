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
          <Heading type={1} color='gray' text='Comprar entradas' />
          <p className='gray'>
            Introduce tus datos personales y de pago. Te enviaremos las entradas a tu correo electrónico de forma inmediata.
          </p>
        </div>

        <div className='padding-top center'>
          <div className='padding-top'>
            <Heading type={5} color='gray' text='Detalles del evento' />
            <p>
              <strong>Evento:</strong> Nombre del evento aquí
            </p>
            <p>
              <strong>Lugar:</strong> WiZink Center, Madrid
            </p>
            <p>
              <strong>Fecha:</strong> Martes, 21 de septiembre de 2024 - 19:00 h
            </p>
          </div>
        </div>

        <div className='form shrink'>
          <table className='table'>
            <thead>
              <tr>
                <th className='left'>Tipo</th>
                <th className='center'>Cant.</th>
                <th className='right'>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='left'>Entrada Infantil</td>
                <td className='center'>2</td>
                <td className='right'>23 €</td>
              </tr>
              <tr>
                <td className='left'>Entrada General</td>
                <td className='center'>2</td>
                <td className='right'>23 €</td>
              </tr>
              <tr>
                <td className='right' colSpan={3}>
                  <strong>Total: </strong> 46 €
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Form />

        <div className='paragraph-container center'>
          <p>
            Al hacer clic en el botón de pago, acepto los&nbsp;
            <Link href='/legal/terms-of-service' className='blue'>
              Términos del servicio
            </Link>
          </p>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Comprar entradas';
const canonical = 'https://streamevents.com/comprar';
const description = 'StreamEvents es la plataforma para descubrir y asistir a los eventos más importantes de streamers en España.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'streamers, eventos, entradas, España, Twitch',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'StreamEvents',
    images: 'https://streamevents.com/logo.png',
  },
};

export default Page;
