import { Validation } from '@/presentation/protocols/validation';

class EmailValidation implements Validation {
  validate(email: string): string {
    return '';
  }
}

export const emailValidation = new EmailValidation();
