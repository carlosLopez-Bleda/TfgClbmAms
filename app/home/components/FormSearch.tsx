'use client';

import { useState } from 'react';

// hooks
import useAlert from '@hooks/useAlert';

// components
import Input from '@components/Form/Input';

// interfaces
interface IFormProps {
  keyword: string;
}

const FormSearch: React.FC = () => {
  const { showAlert } = useAlert();

  const [formValues, setFormValues] = useState<IFormProps>({
    keyword: '',
  });

  /**
   * Maneja el evento de cambio en los inputs del formulario.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de cambio del input.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  /**
   * Maneja el envío del formulario.
   *
   * Previene el envío por defecto, valida si hay al menos 3 caracteres,
   * y muestra una alerta de error si no es válido.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - Evento de envío del formulario.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { keyword } = formValues;

    if (keyword === '' || keyword.length < 3) {
      showAlert({ type: 'error', text: 'Introduce al menos 3 caracteres para buscar.' });
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className='search-inputs flex flex-h-center flex-space-between'>
        <Input
          type='text'
          name='keyword'
          value={formValues.keyword}
          maxLength={64}
          placeholder='Evento, streamer o palabra clave'
          required
          onChange={handleChange}
        />
        <button type='submit'>
          <span className='material-symbols-outlined'>buscar</span>
        </button>
      </div>
    </form>
  );
};

export default FormSearch;
