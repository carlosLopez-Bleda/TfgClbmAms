import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonGroup from '@components/Button/ButtonGroup';
import ButtonGroupItem from '@components/Button/ButtonGroupItem';

import FormMain from './components/FormMain';
import FormPhoto from './components/FormPhoto';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Mi cuenta' />
          <p className='gray form-information'>
            Aquí puedes actualizar tu foto de perfil y los datos de tu cuenta.
          </p>
          <div className='button-container'>
            <ButtonGroup color='gray'>
              <ButtonGroupItem url='members/tickets' text='Mis entradas' />
              <ButtonGroupItem url='members/account' text='Mi cuenta' active />
            </ButtonGroup>
          </div>
          <div className='padding-top'>
            <FormPhoto data='https://www.streamevents.com/content/profile.jpg' />
          </div>
        </div>
      </div>
    </Section>
    <Section className='white-background'>
      <div className='container'>
        <FormMain
          data={{
            name: 'Alex',
            lastname: 'Martinez',
            email: 'alex@streamevents.com',
          }}
        />
      </div>
    </Section>
  </Master>
);

const title = 'Mi cuenta';
const canonical = 'https://streamevents.com/members/account';
const description = 'StreamEvents es una solución moderna para gestionar eventos y entradas, de tus streamers favoritos';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'entradas, eventos, plataforma de eventos',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'Modern Ticketing',
    images: 'https://streamevents.com/logo192.png',
  },
};

export default Page;
