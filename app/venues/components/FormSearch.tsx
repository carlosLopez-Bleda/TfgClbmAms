'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// hooks
import useAlert from '@hooks/useAlert';

// components
import Input from '@components/Form/Input';

interface IFormProps {
  keyword: string;
}

const FormSearch: React.FC = () => {
  const { showAlert } = useAlert();
  const router = useRouter();

  const [formValues, setFormValues] = useState<IFormProps>({
    keyword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const trimmedKeyword = formValues.keyword.trim();

    if (trimmedKeyword.length < 3) {
      showAlert({ type: 'error', text: 'Introduce al menos 3 caracteres para buscar.' });
      return;
    }

    // Redirige a la ruta de búsqueda con query
    router.push(`/search?keyword=${encodeURIComponent(trimmedKeyword)}`);
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className='search-inputs flex flex-h-center flex-space-between'>
        <Input
          type='text'
          name='keyword'
          value={formValues.keyword}
          maxLength={64}
          placeholder='Buscar evento, streamer o ciudad'
          required
          onChange={handleChange}
        />
        <button type='submit' aria-label='Buscar'>
          <span className='material-symbols-outlined'>search</span>
        </button>
      </div>
    </form>
  );
};

export default FormSearch;
