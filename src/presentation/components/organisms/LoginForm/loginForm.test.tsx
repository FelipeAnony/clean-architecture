import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  defaultUseLoginReturn,
  mockedUseLoginForm,
} from '@/presentation/mocks';

import Login from './index';
import { useLoginForm } from './useLoginForm';

jest.mock('@/presentation/components/organisms/LoginForm/useLoginForm');

const renderSut = (params = defaultUseLoginReturn) => {
  mockedUseLoginForm.mockReturnValue(params);
  return render(<Login />);
};

describe('', () => {
  it('Should not render spinner when isLoading state is false ', () => {
    renderSut();
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });

  it('Should render spinner when isLoading state is true', async () => {
    renderSut({
      ...defaultUseLoginReturn,
      error: '',
      handleClick: () => {},
      isLoading: true,
    });

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('Should not render error when error state is empty ', () => {
    renderSut();
    expect(screen.queryByTestId('errorWrapper')).not.toBeInTheDocument();
  });

  it('Should render error with correct value when error state exists', async () => {
    renderSut({
      ...defaultUseLoginReturn,
      error: 'any_error',
      handleClick: () => {},
      isLoading: false,
    });

    expect(screen.getByText('any_error')).toBeInTheDocument();
  });

  it('Should call validation with correct value when user types', async () => {
    renderSut();
    const { validation } = useLoginForm();
    const validate = jest.spyOn(validation, 'validate');

    await userEvent.type(screen.getByPlaceholderText(/email/i), 'a');
    expect(validate).toBeCalledWith('a');
  });
});
