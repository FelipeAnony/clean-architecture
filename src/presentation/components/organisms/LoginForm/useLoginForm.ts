import { useState } from 'react';

import { emailValidation } from '@/main/EmailValidation';
import { Validation } from '@/presentation/protocols/validation';

export type UseLoginFormReturn = {
  error: string;
  isLoading: boolean;
  handleClick: (params: any) => void;
  validation: Validation;
};

export const useLoginForm = (): UseLoginFormReturn => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsLoading(!isLoading);
  };

  return { error, handleClick, isLoading, validation: emailValidation };
};
