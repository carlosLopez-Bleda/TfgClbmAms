import Link from 'next/link';

// components
import ButtonLink from '@components/Button/ButtonLink';

const Footer: React.FC = () => (
  <footer>
    <div className='container'>
      <div className='logo'>
        <Link href='/'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'>
            {/* Puedes cambiar este SVG por el logotipo de StreamEvents */}
            <path d='M 9 16 C 6.8026661 16 5 17.802666 ...' />
          </svg>
        </Link>
      </div>

      <div className='links'>
        <Link href='/' className='white'>
          Inicio
        </Link>
        <Link href='/venues' className='white'>
          Lugares
        </Link>
        <Link href='/members/tickets' className='white'>
          Mis entradas
        </Link>
        <Link href='/members/account' className='white'>
          Mi cuenta
        </Link>
      </div>

      <div className='links'>
        <Link href='/help' className='white'>
          Ayuda
        </Link>
        <Link href='/news' className='white'>
          Noticias
        </Link>
        <Link href='/contact' className='white'>
          Contacto
        </Link>
        <Link href='/promoters' className='white'>
          Para organizadores
        </Link>
      </div>

      <div className='members'>
        <Link href='/members/signup' className='white'>
          Crear cuenta
        </Link>
        <span>o</span>
        <ButtonLink color='blue-filled' text='Iniciar sesión' url='members/signin' />
      </div>
    </div>

    <div className='newsletter'>
      <p>No te pierdas las últimas novedades de eventos de streamers.</p>
      <div className='input-container'>
        <input
          type='email'
          name='email'
          autoComplete='off'
          placeholder='tucorreo@ejemplo.com'
          required
        />
        <button type='submit'>
          <span className='material-symbols-outlined'>arrow_forward</span>
        </button>
      </div>
    </div>

    <div className='copy'>
      <span>&copy; 2024 - StreamEvents</span>
      <div className='terms'>
        <Link href='/legal/privacy-policy'>Política de privacidad</Link>
        &nbsp;&bull;&nbsp;
        <Link href='/legal/cookies'>Cookies</Link>
        &nbsp;&bull;&nbsp;
        <Link href='/legal/terms-of-service'>Términos de servicio</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
