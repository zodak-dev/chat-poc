// todo: separate different fils
import { useState } from 'react';

export const useInput = base => {
  const [data, setData] = useState(base);

  return [
    data,
    setData,
    event => {
      setData(current => ({ ...current, [event.target.name]: event.target.value }));
    }
  ];
};