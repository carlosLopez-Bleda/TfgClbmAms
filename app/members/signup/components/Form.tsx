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

    if (!formValues.tos) {
      showAlert({ type: 'error', text: 'Debes aceptar los términos y condiciones.' });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formValues.email,
          password: formValues.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Guardar usuario en localStorage
        localStorage.setItem(
          'user',
          JSON.stringify({
            name: formValues.name,
            lastname: formValues.lastname,
            email: formValues.email,
          })
        );

        showAlert({ type: 'success', text: 'Cuenta creada correctamente.' });
        window.location.href = '/members/account';
      } else {
        showAlert({ type: 'error', text: data.error || 'Error al crear cuenta.' });
      }
    } catch (error) {
      showAlert({ type: 'error', text: 'Error en el servidor. Inténtalo más tarde.' });
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
