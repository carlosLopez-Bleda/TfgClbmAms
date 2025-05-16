'use client';

import { useEffect } from 'react';

// hooks
import useAlert from '@hooks/useAlert';

// components
import Progress from '@components/Progress/Progress';

const AUTO_DISMISS_MS = 7000;

const Alert: React.FC = () => {
  const { alert, hideAlert } = useAlert();

  useEffect(() => {
    if (!alert.show) return;

    const timeout = setTimeout(hideAlert, AUTO_DISMISS_MS);
    return () => clearTimeout(timeout);
  }, [alert.show, hideAlert]);

  if (!alert.show) return null;

  return (
    <div className='main-menu-backdrop'>
      <div className={`alert ${alert.type}`}>
        <div className='container'>
          <p>{alert.text}</p>
          <button
            type='button'
            className='close-button'
            onClick={hideAlert}
            aria-label='Close alert'
          >
            <span className='material-symbols-outlined'>close</span>
          </button>
        </div>
        <Progress ms={AUTO_DISMISS_MS} />
      </div>
    </div>
  );
};

export default Alert;
