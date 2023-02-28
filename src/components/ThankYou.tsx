import CompleteIcon from '../assets/icon-complete.svg';

type ThankYouProps = {
  setConfirmed: (v: boolean) => void;
};

export default function ThankYou({ setConfirmed }: ThankYouProps) {
  return (
    <div className='flex flex-col items-center justify-center lg:h-screen max-w-lg mx-auto mt-52 lg:mt-0'>
      <img src={CompleteIcon} alt='' className='block mx-auto' />
      <h1 className='text-c-very-dark-violet text-3xl my-6 uppercase text-center'>
        Thank You
      </h1>
      <p className='text-c-dark-grayish-violet text-center'>
        We've added your card details
      </p>
      <button
        onClick={() => setConfirmed(false)}
        className='bg-c-very-dark-violet text-c-white py-3 px-6 rounded shadow text-base tracking-wide lg:text-lg block mx-auto mt-10 w-full'
      >
        Continue
      </button>
    </div>
  );
}
