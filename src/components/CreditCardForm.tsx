import React from 'react';

type CreditCardProps = {
  name: string;
  cardNumber: string;
  date: string;
  cvc: string;
  setName: (v: string) => void;
  setCardNumber: (v: string) => void;
  setDate: (v: string) => void;
  setCvc: (v: string) => void;
  setConfirmed: (v: boolean) => void;
};

export default function CreditCardForm({
  name,
  cardNumber,
  date,
  cvc,
  setName,
  setCardNumber,
  setDate,
  setCvc,
  setConfirmed,
}: CreditCardProps) {
  const handleSubmit = () => {
    setConfirmed(true);
    console.log(name, cardNumber, date, cvc);
  };

  return (
    <form className='mt-56 lg:mt-0 flex flex-col justify-center lg:h-screen lg:gap-8 gap-4 max-w-md' >
      <div>
        <label htmlFor='cardholderName'>Cardholder Name</label>
        <input
          type='text'
          name='cardholderName'
          id='cardholderName'
          placeholder='e.g. Jane Appleseed'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='cardNumber'>Card Number</label>
        <input
          type='text'
          name='cardNumber'
          id='cardNumber'
          placeholder='e.g. 1234 5678 9123 0000'
          maxLength={19}
          required
          value={cardNumber
            .replace(/\s/g, '')
            .replace(/(\d{4})/g, '$1 ')
            .trim()}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <article className='flex items-center justify-between gap-8 '>
        <div className='flex-1'>
          <label htmlFor='expDate'>Exp.Date(MM/YY)</label>
          <input
            type='month'
            name='expDate'
            id='expDate'
            placeholder='MM / YY'
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className='flex-1'>
          <label htmlFor='cvc'>CVC</label>
          <input
            type='number'
            name='cvc'
            id='cvc'
            placeholder='e.g. 123'
            maxLength={3}
            required
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
          />
        </div>
      </article>
      <button
        className='bg-c-very-dark-violet text-c-white py-3 px-6 rounded shadow text-base tracking-wide lg:text-lg '
        onClick={handleSubmit}
      >
        Confirm
      </button>
    </form>
  );
}
