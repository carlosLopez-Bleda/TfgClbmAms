// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import EventCard from '@components/Card/EventCard';
import CardGroup from '@components/Card/CardGroup';

import FormSearch from './home/components/FormSearch';
import CircleButtons from './home/components/CircleButtons';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Explorar' />
          <p className='text-muted-foreground'>
            Descubre, busca y filtra los mejores eventos de streamers en España.
          </p>
        </div>
      </div>

      <div className='center'>
        <div className='container'>
          <div className='top-search'>
            <FormSearch />
          </div>
        </div>
        <div className='circle-buttons'>
          <CircleButtons />
        </div>
      </div>
    </Section>

    <CardGroup url='list' title='Próximos eventos' color='blue' background='gray'>
      <EventCard
        url='1'
        from='0'
        color='blue'
        when='Sábado, 13 de julio de 2024 - 21:00'
        name='La Velada del Año 4'
        venue='Wanda Metropolitano, Madrid'
        image='images/velada4.jpg'
      />
      <EventCard
        url='2'
        from='0'
        color='blue'
        when='Martes, 20 de agosto de 2024 - 18:00'
        name='Squid Craft Games 3 - Final'
        venue='Evento online - Twitch.tv/Auronplay'
        image='/images/squidcraft3.jpg'
      />
      <EventCard
        url='3'
        from='0'
        color='blue'
        when='Domingo, 1 de septiembre de 2024 - 17:00'
        name='El Partidazo de Youtubers 2024'
        venue='Estadio La Romareda, Zaragoza'
        image='/images/partidazo2025.jpg'
      />
    </CardGroup>

    <CardGroup url='list' title='Eventos destacados' color='red' background='white'>
      <EventCard
        url='4'
        from='0'
        color='red'
        when='Viernes, 25 de octubre de 2024 - 20:00'
        name='Final Minecraft Extremo'
        venue='Twitch.tv/TheGrefg'
        image='/images/minecraftextremo.jpg'
      />
      <EventCard
        url='5'
        from='0'
        color='red'
        when='Miércoles, 11 de diciembre de 2024 - 21:00'
        name='Ibai Presenta: El Año en Twitch'
        venue='Palau Sant Jordi, Barcelona'
        image='/images/ibai2024.jpg'
      />
    </CardGroup>

    <CardGroup url='list' title='Sugerencias del editor' color='orange' background='gray'>
      <EventCard
        url='6'
        from='0'
        color='orange'
        when='Sábado, 14 de septiembre de 2024 - 19:00'
        name='Marbella Vice 3: Gran Reencuentro'
        venue='Evento online - Twitch.tv/streamers'
        image='/images/marbellavice3.jpg'
      />
      <EventCard
        url='7'
        from='0'
        color='orange'
        when='Domingo, 3 de noviembre de 2024 - 16:00'
        name='Showmatch Legends - Xokas vs Reven'
        venue='Auditorio Nacional, Madrid'
        image='/images/xokas-evento.jpg'
      />
    </CardGroup>

    <CardGroup url='list' title='Para todos los públicos' color='purple' background='white'>
      <EventCard
        url='8'
        from='0'
        color='purple'
        when='Sábado, 10 de agosto de 2024 - 12:00'
        name='Torneos Infantiles de Minecraft'
        venue='Twitch.tv/BarbeQ'
        image='/images/minecraftniños.jpg'
      />
      <EventCard
        url='9'
        from='0'
        color='purple'
        when='Domingo, 8 de septiembre de 2024 - 17:30'
        name='Fortnite Junior Cup'
        venue='Evento online - Twitch.tv/KidiStreamer'
        image='/images/fortnitekids.jpg'
      />
    </CardGroup>
  </Master>
);

export default Page;
