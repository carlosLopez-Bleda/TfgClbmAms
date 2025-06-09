import Link from 'next/link';

import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';

import FormSearch from './components/FormSearch';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Centro de ayuda' />
          <p className='gray'>¿En qué podemos ayudarte hoy?</p>

          <div className='top-search'>
            <FormSearch />
          </div>
          <div className='help-top flex flex-v-center flex-space-around'>
            <div className='center'>
              <Heading type={5} color='gray' text='Sobre nosotros' />
              <Link href='/help/answer/1' className='blue'>
                <span className='material-symbols-outlined yellow'>star</span>
                ¿Qué es StreamEvents?
              </Link>
            </div>
            <div className='center'>
              <Heading type={5} color='gray' text='Cuenta' />
              <Link href='/help/answer/1' className='blue'>
                <span className='material-symbols-outlined yellow'>star</span>
                ¿Cómo iniciar sesión?
              </Link>
            </div>
            <div className='center'>
              <Heading type={5} color='gray' text='Uso del sistema' />
              <Link href='/help/answer/1' className='blue'>
                <span className='material-symbols-outlined yellow'>star</span>
                ¿Cómo consigo mis entradas?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={2} color='gray' text='Respuestas destacadas' />
          <div className='help-bottom flex flex-space-around padding-top padding-bottom'>
            <div className='help-bottom-box'>
              <div className='links'>
                <Heading type={5} color='gray' text='Sobre nosotros' />
                <Link href='/help/answer/1' className='blue'>
                  ¿Qué es StreamEvents?
                </Link>
                <Link href='/help/answer/1' className='blue'>
                  ¿Cómo funciona la plataforma?
                </Link>
              </div>

              <ButtonLink
                color='gray-overlay'
                rightIcon='arrow_forward'
                text='Ver todo'
                url='help/category/1'
              />
            </div>
            <div className='help-bottom-box'>
              <div className='links'>
                <Heading type={5} color='gray' text='Cuenta' />
                <Link href='/help/answer/1' className='blue'>
                  ¿Cómo iniciar sesión?
                </Link>
                <Link href='/help/answer/1' className='blue'>
                  ¿Cómo registrarme?
                </Link>
              </div>

              <ButtonLink
                color='gray-overlay'
                rightIcon='arrow_forward'
                text='Ver todo'
                url='help/category/1'
              />
            </div>
            <div className='help-bottom-box'>
              <div className='links'>
                <Heading type={5} color='gray' text='Uso del sistema' />
                <Link href='/help/answer/1' className='blue'>
                  ¿Cómo consigo mis entradas?
                </Link>
              </div>

              <ButtonLink
                color='gray-overlay'
                rightIcon='arrow_forward'
                text='Ver todo'
                url='help/category/1'
              />
            </div>
          </div>

          <div className='button-container'>
            <ButtonLink
              color='gray-filled'
              rightIcon='arrow_forward'
              text='Ver todas las respuestas'
              url='help/answers'
            />
          </div>
        </div>
      </div>
    </Section>

    <Section className='gray-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={3} color='gray' text='¿Tienes alguna pregunta?' />
          <p className='gray'>
            Si no encuentras lo que buscas o necesitas más ayuda, contáctanos y estaremos encantados
            de ayudarte.
          </p>

          <div className='button-container'>
            <ButtonLink
              color='blue-filled'
              rightIcon='arrow_forward'
              text='Contáctanos'
              url='contact'
            />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Ayuda';
const canonical = 'https://stream-events.com/help';
const description = 'Centro de ayuda de StreamEvents, la plataforma de eventos de streamers.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'ayuda, soporte, eventos, streamers, entradas',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'StreamEvents',
    images: 'https://modern-ticketing.com/logo192.png', // reemplázalo si tienes logo propio
  },
};

export default Page;
