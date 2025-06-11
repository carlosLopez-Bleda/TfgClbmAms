

// ✅ Ahora sí marcamos la parte que es cliente
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonGroup from '@components/Button/ButtonGroup';
import ButtonGroupItem from '@components/Button/ButtonGroupItem';

import FormMain from './components/FormMain';
import FormPhoto from './components/FormPhoto';

const Page: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<{
    name?: string;
    lastname?: string;
    email: string;
  } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem('user');
        router.replace('/members/signin');
      }
    } else {
      router.replace('/members/signin');
    }
  }, [router]);

  if (!user) return null;

  return (
    <Master>
      <Section className='white-background'>
        <div className='container'>
          <div className='center'>
            <Heading type={1} color='gray' text='Mi cuenta' />
            <p className='gray form-information'>
              Aquí puedes actualizar tu foto de perfil y los datos de tu cuenta.
            </p>
            <div className='button-container'>
              <ButtonGroup color='gray'>
                <ButtonGroupItem url='members/tickets' text='Mis entradas' />
                <ButtonGroupItem url='members/account' text='Mi cuenta' active />
              </ButtonGroup>
            </div>
            <div className='padding-top'>
              <FormPhoto data='https://www.streamevents.com/content/profile.jpg' />
            </div>
          </div>
        </div>
      </Section>

      <Section className='white-background'>
        <div className='container'>
          <FormMain
            data={{
              name: user.name ?? '',
              lastname: user.lastname ?? '',
              email: user.email,
            }}
          />
        </div>
      </Section>
    </Master>
  );
};

export default Page;
