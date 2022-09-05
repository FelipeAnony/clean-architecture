import {
  useLoginForm,
  UseLoginFormReturn,
} from '../components/organisms/LoginForm/useLoginForm';

export const mockedUseLoginForm = useLoginForm as jest.MockedFn<
  typeof useLoginForm
>;

export const defaultUseLoginReturn: UseLoginFormReturn = {
  error: '',
  handleClick: () => {},
  isLoading: false,
  validation: {
    validate(email) {
      return '';
    },
  },
};
