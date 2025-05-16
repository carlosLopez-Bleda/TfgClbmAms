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
          <Heading type={1} color='gray' text='Todas las respuestas' />
          <p className='gray'>Consulta todas las categorías de ayuda y sus respuestas disponibles.</p>
        </div>
      </div>
    </Section>

    <Section className='white-background'>
      <div className='container'>
        <div className='help-answers center'>
          <Link href='/help/category/1'>
            <Heading type={5} color='gray' text='Cuenta de usuario' />
          </Link>

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

          <Link href='/help/category/2'>
            <Heading type={5} color='gray' text='Entradas y pagos' />
          </Link>

          <ul>
            <li>
              <Link href='/help/answer/2' className='blue'>
                ¿Cómo comprar entradas?
              </Link>
            </li>
            <li>
              <Link href='/help/answer/3' className='blue'>
                ¿Qué métodos de pago están disponibles?
              </Link>
            </li>
            <li>
              <Link href='/help/answer/4' className='blue'>
                ¿Puedo devolver una entrada?
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
            Si no encuentras lo que buscas o necesitas más ayuda, contáctanos y estaremos encantados de ayudarte.
          </p>

          <div className='button-container'>
            <ButtonLink
              color='blue-filled'
              rightIcon='arrow_forward'
              text='Contactar con soporte'
              url='contact'
            />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Centro de ayuda - Todas las respuestas';
const canonical = 'https://streamevents.com/help/answers';
const description = 'Explora las respuestas a las preguntas frecuentes sobre StreamEvents. Ayuda sobre cuentas, entradas y más.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'streamevents, ayuda, soporte, preguntas frecuentes',
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
