// interfaces
interface IProps {
  text: string;
  type: number;
  color: string;
}

const Heading: React.FC<IProps> = ({ text, type, color }) => {
  if (type === 1) {
    return <h1 className={color}>{text}</h1>;
  }

  if (type === 2) {
    return <h2 className={color}>{text}</h2>;
  }

  if (type === 3) {
    return <h3 className={color}>{text}</h3>;
  }

  if (type === 4) {
    return <h4 className={color}>{text}</h4>;
  }

  if (type === 5) {
    return <h5 className={color}>{text}</h5>;
  }

  if (type === 6) {
    return <h6 className={color}>{text}</h6>;
  }

  throw Error('¡Tipo no válido! Usa un valor entre 1 y 6.');
};

export default Heading;
