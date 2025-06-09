'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';

// hooks
import useClickOutside from '@hooks/useClickOutside';

// components
import Dropdown from '@components/Dropdown/Dropdown';
import DropdownItem from '@components/Dropdown/DropdownItem';
import ProfilePhoto from '@components/Profile/ProfilePhoto';

const Header: React.FC = () => {
  const wrapperRef = useRef<any>(null);

  const [menu, setMenu] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);

  useClickOutside(wrapperRef, () => {
    setDropdown(false);
  });

  const menuState = (): void => {
    setMenu((state) => !state);
  };

  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'>
              {/* (SVG sin cambios) */}
            </svg>
          </Link>
          <button type='button' onClick={menuState}>
            <span className='material-symbols-outlined'>menu</span>
          </button>
        </div>

        <div className='links responsive-hide'>
          <Link href='/' className='gray'>
            Inicio
          </Link>
          <Link href='/contact' className='gray'>
            Contáctanos
          </Link>
          <Link href='/news' className='gray'>
            Noticias
          </Link>
          <Link href='/streamers' className='gray'>
            Streamers
          </Link>
        </div>

        <div className='members' ref={wrapperRef}>
          {/* Autenticación futura */}
          <Link href='/members/account'>
            <ProfilePhoto
              image='https://i.pinimg.com/736x/68/76/99/6876993a25a8fc274cc09aee12171034.jpg'
              size='small'
            />
          </Link>
          <button type='button' className='menu-opener' onClick={() => setDropdown(!dropdown)}>
            Alex
            <span className='material-symbols-outlined'>
              {dropdown ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
            </span>
          </button>
          {dropdown && (
            <Dropdown color='gray'>
              <DropdownItem url='members/tickets' text='Mis entradas' />
              <DropdownItem url='members/account' text='Mi cuenta' />
              <hr />
              <DropdownItem url='members/signout' text='Cerrar sesión' />
            </Dropdown>
          )}
        </div>
      </div>

      {menu && (
        <div className='main-menu-backdrop'>
          <div className='main-menu'>
            <div className='top'>
              <button type='button' onClick={menuState}>
                <span className='material-symbols-outlined'>close</span>
              </button>
              <div className='center'>
                <Link href='/' className='logo'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'>
                    {/* (SVG sin cambios) */}
                  </svg>
                </Link>
              </div>
            </div>

            <div className='padding-top center'>
              <ul>
                <li>
                  <Link href='/' className='white'>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href='/news' className='white'>
                    Noticias
                  </Link>
                </li>
                <li>
                  <Link href='/help' className='white'>
                    Ayuda
                  </Link>
                </li>
                <li>
                  <Link href='/venues' className='white'>
                    Recintos
                  </Link>
                </li>
                <li>
                  <Link href='/tickets' className='white'>
                    Mis entradas
                  </Link>
                </li>
                <li>
                  <Link href='/streamers' className='white'>
                    Streamers
                  </Link>
                </li>
                <li>
                  <Link href='/contact' className='white'>
                    Contáctanos
                  </Link>
                </li>
                <li>
                  <Link href='/promoters' className='white'>
                    Para organizadores
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
