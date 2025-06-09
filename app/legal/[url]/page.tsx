import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Aviso legal y términos' />
          <p className='gray'>
            Aquí encontrarás toda la información legal sobre el uso de StreamEvents. Te recomendamos
            leer atentamente nuestros términos, política de privacidad y condiciones de compra.
          </p>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Aviso legal';
const canonical = 'https://stream-events.com/legal';
const description =
  'Consulta los términos legales, privacidad y condiciones de uso de StreamEvents.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'términos legales, condiciones de uso, política de privacidad, eventos streamers',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'StreamEvents',
    images: 'https://modern-ticketing.com/logo192.png', // usa tu propio logo si lo tienes
  },
};

export default Page;
