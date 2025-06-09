'use client';

import { useState, useEffect } from 'react';

// hooks
import useAlert from '@hooks/useAlert';

// components
import Button from '@components/Button/Button';
import Loader from '@components/Loader/Loader';

// interfaces
interface IData {
  id: number;
  name: string;
  price: string;
  ordering: number;
  soldout?: boolean;
  quantity?: number;
  information?: string;
}

interface IProps {
  data: IData[];
}

const TicketForm: React.FC<IProps> = ({ data }) => {
  const { showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState<boolean>(true);
  const [formValues, setFormValues] = useState<IData[]>(data);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const orderTickets = (array: IData[]): IData[] => array.sort((a, b) => a.ordering - b.ordering);

  const countTickets = (array: IData[]): number =>
    array.reduce((sum, curr) => {
      return curr.quantity != null && !isNaN(curr.quantity) ? sum + curr.quantity : sum;
    }, 0);

  const handleDecrease = (ticket: IData): void => {
    const tickets = formValues.filter((e) => e.id !== ticket.id);
    let newTicket: IData;

    if (ticket?.quantity == null || isNaN(ticket.quantity)) {
      newTicket = { ...ticket, quantity: 0 };
    } else {
      newTicket = {
        ...ticket,
        quantity: ticket.quantity > 0 ? ticket.quantity - 1 : 0,
      };
    }

    tickets.push(newTicket);
    setFormValues(orderTickets(tickets));
  };

  const handleIncrease = (ticket: IData): void => {
    const tickets = formValues.filter((e) => e.id !== ticket.id);
    let newTicket: IData;

    if (ticket?.quantity == null || isNaN(ticket.quantity)) {
      newTicket = { ...ticket, quantity: 1 };
    } else {
      newTicket = {
        ...ticket,
        quantity: ticket.quantity < 9 ? ticket.quantity + 1 : 9,
      };
    }

    tickets.push(newTicket);
    setFormValues(orderTickets(tickets));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault();
    hideAlert();

    const quantity = countTickets(formValues);

    if (quantity > 0) {
      setLoading(true);
      window.location.href = '/buy';
    } else {
      showAlert({
        type: 'error',
        text: 'Debes seleccionar al menos una entrada para este evento.',
      });
    }
  };

  if (loading) {
    return <Loader type='inline' color='gray' text='Un momento por favor...' />;
  }

  return (
    <form noValidate onSubmit={(e) => void handleSubmit(e)}>
      <div className='ticket-box-content'>
        {formValues?.map((ticket) => (
          <div key={ticket.id} className='ticket-box-line'>
            {ticket.soldout === true ? (
              <>
                <span className='material-symbols-outlined'>lock</span>
                <span>{ticket.name}</span>
                <strong>Agotado</strong>
                {ticket.information && (
                  <span className='material-symbols-outlined icon' title={ticket.information}>
                    info
                  </span>
                )}
              </>
            ) : (
              <>
                <div className='quantity'>
                  <button type='button' onClick={() => handleDecrease(ticket)}>
                    -
                  </button>
                  <input
                    readOnly
                    type='text'
                    name={`t-${ticket.id}`}
                    value={ticket.quantity ?? 0}
                    onChange={() => {}}
                  />
                  <button type='button' onClick={() => handleIncrease(ticket)}>
                    +
                  </button>
                </div>
                <span>{ticket.name}</span>
                <strong>{ticket.price}</strong>
                {ticket.information && (
                  <span className='material-symbols-outlined icon' title={ticket.information}>
                    info
                  </span>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <div className='ticket-box-buttons'>
        {formValues.length > 0 ? (
          <Button
            type='submit'
            color='blue-filled'
            text='Comprar entradas'
            rightIcon='arrow_forward'
          />
        ) : (
          <Button type='submit' color='disabled' text='Entradas no disponibles' />
        )}
      </div>
    </form>
  );
};

export default TicketForm;
