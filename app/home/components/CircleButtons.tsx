// components
import Slider from '@components/Slider/Slider';
import ButtonCircle from '@components/Button/ButtonCircle';

const CircleButtons: React.FC = () => (
  <Slider>
    <ButtonCircle icon='star' text='Principales' url='/list/Principales' />
    <ButtonCircle icon='music_note' text='Conciertos' url='/list/Concierto' />
    <ButtonCircle icon='child_friendly' text='Niños' url='/list/Ninos' />
    <ButtonCircle icon='sports_esports' text='Juegos' url='/list/Juegos' />
    <ButtonCircle icon='emoji_events' text='Torneos' url='/list/Torneos' />
    <ButtonCircle icon='sports_soccer' text='Deportes' url='/list/Deportes' />
    <ButtonCircle icon='stream' text='Streaming' url='/list/Streaming' />
    <ButtonCircle icon='new_releases' text='Especiales' url='/list/Especiales' />
  </Slider>
);

export default CircleButtons;
