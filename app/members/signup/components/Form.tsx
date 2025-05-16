'use client';

import { useState } from 'react';
import Link from 'next/link';

// hooks
import useAlert from '@hooks/useAlert';

// components
import Input from '@components/Form/Input';
import Switch from '@components/Form/Switch';
import Button from '@components/Button/Button';
import Loader from '@components/Loader/Loader';

// utils
import Request, { type IRequest, type IResponse } from '@utils/Request';

// interfaces
interface IFormProps {
  tos: boolean;
  name: string;
  email: string;
  lastname: string;
  password: string;
}

const Form: React.FC = () => {
  const { showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<IFormProps>({
    name: '',
    email: '',
    lastname: '',
    password: '',
    tos: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = e.target;
    setFormValues({ ...formValues, [name]: checked });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault();
    hideAlert();
    setLoading(true);

    const parameters: IRequest = {
      url: 'v1/signin/password',
      method: 'POST',
      postData: {
        email: formValues.email,
        password: formValues.password,
      },
    };

    const req: IResponse = await Request.getResponse(parameters);
    const { status, data } = req;

    if (status === 200) {
      window.location.href = '/members/activate/account';
    } else {
      showAlert({ type: 'error', text: data.title ?? '' });
    }

    setLoading(false);
  };

  if (loading) {
    return <Loader type='inline' color='gray' text='Un momento, por favor…' />;
  }

  return (
    <form className='form shrink' noValidate onSubmit={(e) => void handleSubmit(e)}>
      <div className='form-elements'>
        <div className='form-line'>
          <div className='one-line'>
            <button type='button' className='google-button'>
              <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                width='18px'
                height='18px'
                viewBox='0 0 48 48'
              >
                <g>
                  <path
                    fill='#EA4335'
                    d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'
                  />
                  <path
                    fill='#4285F4'
                    d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'
                  />
                  <path
                    fill='#FBBC05'
                    d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'
                  />
                  <path
                    fill='#34A853'
                    d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'
                  />
                  <path fill='none' d='M0 0h48v48H0z' />
                </g>
              </svg>
              <span>Registrarse con Google</span>
            </button>
          </div>
        </div>

        <div className='or-line'>
          <hr />
          <span>O</span>
        </div>

        <div className='form-line'>
          <div className='one-line'>
            <div className='label-line'>
              <label htmlFor='name'>Nombre</label>
            </div>
            <Input
              type='text'
              name='name'
              value={formValues.name}
              maxLength={64}
              placeholder='Introduce tu nombre'
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='form-line'>
          <div className='one-line'>
            <div className='label-line'>
              <label htmlFor='lastname'>Apellido</label>
            </div>
            <Input
              type='text'
              name='lastname'
              value={formValues.lastname}
              maxLength={64}
              placeholder='Introduce tu apellido'
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='form-line'>
          <div className='one-line'>
            <div className='label-line'>
              <label htmlFor='email'>Correo electrónico</label>
            </div>
            <Input
              type='email'
              name='email'
              value={formValues.email}
              maxLength={128}
              placeholder='Introduce tu correo electrónico'
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='form-line'>
          <div className='label-line'>
            <label htmlFor='password'>Contraseña</label>
          </div>
          <Input
            type='password'
            name='password'
            value={formValues.password}
            maxLength={64}
            placeholder='Introduce tu contraseña'
            required
            onChange={handleChange}
          />
        </div>

        <div className='form-line'>
          <div className='label-line'>
            <label htmlFor='tos'>Términos y condiciones</label>
          </div>
          <Switch name='tos' color='blue' onChange={handleCheckboxChange}>
            Acepto la{' '}
            <Link href='/legal/privacy-policy' className='blue'>
              Política de privacidad
            </Link>{' '}
            y los{' '}
            <Link href='/legal/terms-of-service' className='blue'>
              Términos de servicio
            </Link>
          </Switch>
        </div>

        <div className='form-buttons'>
          <Button type='submit' color='blue-filled' text='Crear cuenta' />
        </div>
      </div>
    </form>
  );
};

export default Form;
