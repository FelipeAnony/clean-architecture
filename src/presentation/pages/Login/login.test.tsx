import { render, screen } from '@testing-library/react';

import {
  defaultUseLoginReturn,
  mockedUseLoginForm,
} from '@/presentation/mocks';

import Login from './index';

jest.mock('@/presentation/components/organisms/LoginForm/useLoginForm');

const renderSut = (params = defaultUseLoginReturn) => {
  mockedUseLoginForm.mockReturnValue(params);
  return render(<Login />);
};

describe('', () => {
  it('Should not render spinner and error message on start', () => {
    renderSut();
    expect(screen.queryByTestId('errorWrapper')).not.toBeInTheDocument();
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });

  it('Should render spinner when loading state is true', async () => {
    renderSut({
      error: '',
      handleClick: () => {},
      isLoading: true,
    });

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
