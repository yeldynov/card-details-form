import { useState } from 'react';
import BgMobile from './assets/bg-main-mobile.png';
import BgDesktop from './assets/bg-main-desktop.png';

import CreditCardForm from './components/CreditCardForm';
import ThankYou from './components/ThankYou';
import Cards from './components/Cards';

function App() {
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [date, setDate] = useState('');
  const [cvc, setCvc] = useState('');

  return (
    <>
      <section>
        <div className='absolute -z-10'>
          <picture>
            <source media='(min-width: 768px)' srcSet={BgDesktop} />
            <img src={BgMobile} alt='' className='w-full' />
          </picture>
        </div>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 '>
          <Cards name={name} cardNumber={cardNumber} date={date} cvc={cvc} />
          <div className='pt-8 px-5 pb-20'>
            {!confirmed ? (
              <CreditCardForm
                name={name}
                cardNumber={cardNumber}
                date={date}
                cvc={cvc}
                setName={setName}
                setCardNumber={setCardNumber}
                setDate={setDate}
                setCvc={setCvc}
                setConfirmed={setConfirmed}
              />
            ) : (
              <ThankYou setConfirmed={setConfirmed} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
