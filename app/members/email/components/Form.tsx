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
  email: string;
  emailAgain: string;
}

const Form: React.FC = () => {
  const { showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<IFormProps>({
    email: '',
    emailAgain: '',
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
      window.location.href = '/members/activate/email';
    } else {
      showAlert({ type: 'error', text: data.title ?? '' });
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
          <div className='one-line'>
            <div className='label-line'>
              <label htmlFor='email'>Nuevo correo electrónico</label>
            </div>
            <Input
              type='email'
              name='email'
              value={formValues.email}
              maxLength={128}
              placeholder='Introduce tu nuevo correo electrónico'
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='form-line'>
          <div className='one-line'>
            <div className='label-line'>
              <label htmlFor='emailAgain'>Confirma el correo electrónico</label>
            </div>
            <Input
              type='email'
              name='emailAgain'
              value={formValues.emailAgain}
              maxLength={128}
              placeholder='Repite tu nuevo correo electrónico'
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='form-buttons'>
          <ButtonLink color='gray-overlay' text='Volver' url='members/account' />
          &nbsp; &nbsp;
          <Button type='submit' color='blue-filled' text='Confirmar' />
        </div>
      </div>
    </form>
  );
};

export default Form;
