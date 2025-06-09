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
        <div className='flex'>
          <div className='help-left'>
            <Heading type={2} color='gray' text='Cuenta' />
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
                  Restablecer contraseña
                </Link>
              </li>
            </ul>
          </div>
          <div className='help-right'>
            <Heading type={1} color='gray' text='Artículo de ayuda' />
            <div className='paragraph-container'>
              <p>
                Para iniciar sesión en tu cuenta de StreamEvents, haz clic en el botón "Iniciar
                sesión" en la parte superior derecha de la página. Ingresa tu correo electrónico y
                contraseña, y pulsa "Entrar".
              </p>
              <p>
                Si aún no tienes cuenta, puedes registrarte fácilmente desde la sección de
                "Registro". Solo necesitas un correo electrónico válido y una contraseña segura.
                También puedes iniciar sesión con tu cuenta de Twitch.
              </p>
              <p>
                ¿Olvidaste tu contraseña? Haz clic en "¿Olvidaste tu contraseña?" en la pantalla de
                inicio de sesión y sigue los pasos para restablecerla.
              </p>
            </div>

            <div className='button-container right'>
              <ButtonLink color='gray-overlay' text='Volver a la categoría' url='help/category/1' />
              &nbsp; &nbsp;
              <ButtonLink color='blue-filled' text='Volver a la ayuda' url='help' />
            </div>
          </div>
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
              url='contact'
            />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Ayuda';
const canonical = 'https://streamevents.com/help/answer/1';
const description =
  'Centro de ayuda de StreamEvents: respuestas a preguntas frecuentes sobre cuentas, eventos y más.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'streamevents, ayuda, soporte, cuenta',
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
