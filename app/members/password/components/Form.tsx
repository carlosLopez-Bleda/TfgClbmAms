'use client';

import { useState } from 'react';

// hooks
import useAlert from '@hooks/useAlert';

// components
import Input from '@components/Form/Input';
import Button from '@components/Button/Button';
import Loader from '@components/Loader/Loader';
import ButtonLink from '@components/Button/ButtonLink';

// utils
import Request, { type IRequest, type IResponse } from '@utils/Request';

// interfaces
interface IFormProps {
  password: string;
  newPassword: string;
  newPasswordAgain: string;
}

const Form: React.FC = () => {
  const { showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<IFormProps>({
    password: '',
    newPassword: '',
    newPasswordAgain: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

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
      // Éxito (puedes agregar redirección o mensaje aquí)
    } else {
      showAlert({ type: 'error', text: data.title ?? 'Error al cambiar la contraseña.' });
    }

    setLoading(false);
  };

  if (loading) {
    return <Loader type='inline' color='gray' text='Un momento...' />;
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
          <div className='label-line'>
            <label htmlFor='password'>Contraseña actual</label>
          </div>
          <Input
            type='password'
            name='password'
            value={formValues.password}
            maxLength={64}
            placeholder='Introduce tu contraseña actual'
            required
            onChange={handleChange}
          />
        </div>
        <div className='form-line'>
          <div className='label-line'>
            <label htmlFor='newPassword'>Nueva contraseña</label>
          </div>
          <Input
            type='password'
            name='newPassword'
            value={formValues.newPassword}
            maxLength={64}
            placeholder='Introduce tu nueva contraseña'
            required
            onChange={handleChange}
          />
        </div>
        <div className='form-line'>
          <div className='label-line'>
            <label htmlFor='newPasswordAgain'>Repite la nueva contraseña</label>
          </div>
          <Input
            type='password'
            name='newPasswordAgain'
            value={formValues.newPasswordAgain}
            maxLength={64}
            placeholder='Vuelve a introducir la nueva contraseña'
            required
            onChange={handleChange}
          />
        </div>
        <div className='form-buttons'>
          <ButtonLink color='gray-overlay' text='Volver' url='members/account' />
          &nbsp; &nbsp;
          <Button type='submit' color='blue-filled' text='Actualizar contraseña' />
        </div>
      </div>
    </form>
  );
};

export default Form;
