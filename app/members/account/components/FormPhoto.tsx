'use client';

import { useState } from 'react';

// hooks
import useAlert from '@hooks/useAlert';

// components
import Loader from '@components/Loader/Loader';
import ProfilePhoto from '@components/Profile/ProfilePhoto';

// utils
import Request, { type IRequest, type IResponse } from '@utils/Request';

// interfaces
interface IProps {
  data: string;
}

const FormPhoto: React.FC<IProps> = ({ data }) => {
  const { showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Maneja el envío del formulario.
   *
   * Esta función se ejecuta al enviar el formulario. Previene el comportamiento por defecto,
   * oculta alertas previas, muestra el loader, realiza una solicitud POST (actualmente de ejemplo)
   * y muestra un mensaje de error si la respuesta no es exitosa.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - Evento de envío del formulario.
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

    if (status !== 200) {
      showAlert({ type: 'error', text: data.title ?? 'Error al actualizar la foto' });
    }

    setLoading(false);
  };

  if (loading) {
    return <Loader type='inline' color='gray' text='Un momento...' />;
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        void handleSubmit(e);
      }}
    >
      <div className='upload-picture'>
        <input type='file' name='image' id='image' className='input-file' accept='.jpg,.jpeg' />
        <label htmlFor='image'>
          <span className='material-symbols-outlined'>add_a_photo</span>
        </label>
        <ProfilePhoto image={data} size='large' />
        <span className='muted'>haz clic en la imagen para cambiarla</span>
      </div>
    </form>
  );
};

export default FormPhoto;
