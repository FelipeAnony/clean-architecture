import { useState } from 'react';

export type UseLoginFormReturn = {
  error: string;
  isLoading: boolean;
  handleClick: (params: any) => void;
};

export const useLoginForm = (): UseLoginFormReturn => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsLoading(!isLoading);
  };

  return { error, handleClick, isLoading };
};
