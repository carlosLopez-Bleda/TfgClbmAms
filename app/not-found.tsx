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
          <Heading type={1} color='gray' text='404 – Página no encontrada' />
          <p className='gray form-information'>
            Parece que el evento o la página que buscabas no existe o fue eliminada. Puedes volver al inicio para seguir explorando próximos eventos de tus streamers favoritos.
          </p>

          <div className='button-container'>
            <ButtonLink color='blue-filled' text='Volver al inicio' url='/' />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

export default Page;
