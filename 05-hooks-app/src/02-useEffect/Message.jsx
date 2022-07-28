import { useEffect } from 'react';

export const Message = () => {
  useEffect(() => {
    console.log(`%c ⮞⮞ Message Mounted`, 'color: white; background: teal');
    return () => {
      console.log(
        `%c ⮞⮞ Message Unmounted`,
        'color: white; background: darkred'
      );
    };
  }, []);

  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show text-center mt-4"
        role="alert"
      >
        <strong>Upsss!</strong> User already exists.
      </div>
    </>
  );
};
