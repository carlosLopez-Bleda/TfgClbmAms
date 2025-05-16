// components
import Slider from '@components/Slider/Slider';
import ButtonCircle from '@components/Button/ButtonCircle';

const CircleButtons: React.FC = () => (
  <Slider>
    <ButtonCircle icon='star' text='Principales' url='list' />
    <ButtonCircle icon='music_note' text='Conciertos' url='list' />
    <ButtonCircle icon='child_friendly' text='Niños' url='list' />
    <ButtonCircle icon='sports_esports' text='Juegos' url='list' />
    <ButtonCircle icon='emoji_events' text='Torneos' url='list' />
    <ButtonCircle icon='sports_soccer' text='Deportes' url='list' />
    <ButtonCircle icon='stream' text='Streaming' url='list' />
    <ButtonCircle icon='new_releases' text='Especiales' url='list' />
  </Slider>
);

export default CircleButtons;
