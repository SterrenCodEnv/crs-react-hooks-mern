import { memo } from 'react';

// memo prevents the component from re-rendering if the parent component does
export const Result = memo(({ value }) => {
  return <mark>{value}</mark>;
});
