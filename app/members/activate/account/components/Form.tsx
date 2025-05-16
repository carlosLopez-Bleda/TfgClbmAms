'use client';

import { useState } from 'react';

// hooks
import useAlert from '@hooks/useAlert';

// components
import Input from '@components/Form/Input';
import Button from '@components/Button/Button';
import Loader from '@components/Loader/Loader';

// utils
import Request, { type IRequest, type IResponse } from '@utils/Request';

// interfaces
interface IFormProps {
  code: string;
}

const Form: React.FC = () => {
  const { showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<IFormProps>({
    code: '',
  });

  /**
   * Maneja los cambios en los campos del formulario.
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
   * @param {React.FormEvent<HTMLFormElement>} e - Evento de envío.
   * @returns {Promise<any>}
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault();

    hideAlert();
    setLoading(true);

    const parameters: IRequest = {
      url: 'v1/signin/password',
      method: 'POST',
      postData: {
        email: '',
        password: '',
      },
    };

    const req: IResponse = await Request.getResponse(parameters);
    const { status, data } = req;

    if (status === 200) {
      // Puedes redirigir aquí si todo va bien
    } else {
      showAlert({ type: 'error', text: data.title ?? 'Error desconocido al activar la cuenta.' });
    }

    setLoading(false);
  };

  if (loading) {
    return <Loader type='inline' color='gray' text='Un momento por favor...' />;
  }

  return (
    <form
      className='form shrink'
      noValidate
      onSubmit={(e) => {
        void handleSubmit(e);
      }}
    >
      <div className='form-elements'>
        <div className='form-line'>
          <div className='label-line flex flex-v-center flex-space-between'>
            <label htmlFor='code'>Código de activación</label>
          </div>
          <Input
            type='text'
            name='code'
            value={formValues.code}
            maxLength={10}
            placeholder='Introduce tu código de activación'
            required
            onChange={handleChange}
          />
        </div>
        <div className='form-buttons'>
          <Button type='submit' color='blue-filled' text='Activar cuenta e iniciar sesión' />
        </div>
      </div>
    </form>
  );
};

export default Form;
