import Link from 'next/link';
import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Categoría: Cuenta de usuario' />
          <p>Mostrando todas las respuestas dentro de esta categoría.</p>
        </div>
      </div>
    </Section>

    <Section className='white-background'>
      <div className='container'>
        <div className='help-answers center'>
          <ul>
            <li>
              <Link href='/help/answer/1' className='blue'>
                ¿Cómo iniciar sesión?
              </Link>
            </li>
            <li>
              <Link href='/help/answer/1' className='blue'>
                ¿Cómo registrarse?
              </Link>
            </li>
            <li>
              <Link href='/help/answer/1' className='blue'>
                Restablecer mi contraseña
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Section>

    <Section className='gray-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={3} color='gray' text='¿Tienes más preguntas?' />
          <p className='gray'>
            Si no encuentras lo que buscas o necesitas más ayuda, contáctanos y estaremos encantados
            de ayudarte.
          </p>

          <div className='button-container'>
            <ButtonLink
              color='blue-filled'
              rightIcon='arrow_forward'
              text='Contactar con soporte'
              url='/contact'
            />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Ayuda - Cuenta de usuario';
const canonical = 'https://streamevents.com/help/category/1';
const description = 'Consulta respuestas relacionadas con tu cuenta de usuario en StreamEvents.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'streamevents, ayuda cuenta, soporte, iniciar sesión',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'StreamEvents',
    images: 'https://modern-ticketing.com/logo192.png',
  },
};

export default Page;
