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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { keyword } = formValues;

    if (keyword === '' || keyword.length < 3) {
      showAlert({ type: 'error', text: 'Por favor, introduce al menos 3 caracteres para buscar.' });
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
          placeholder='Buscar evento, streamer, ciudad...'
          required
          onChange={handleChange}
        />
        <button type='submit'>
          <span className='material-symbols-outlined'>search</span>
        </button>
      </div>
    </form>
  );
};

export default FormSearch;
