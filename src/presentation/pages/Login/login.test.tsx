import { useLoginForm } from '@/presentation/components/organisms/LoginForm/useLoginForm';
import { render, screen } from '@testing-library/react';

import Login from './index';

jest.mock('@/presentation/components/organisms/LoginForm/useLoginForm');
const mockedUseLoginForm = useLoginForm as jest.MockedFn<typeof useLoginForm>;

const renderSut = () => render(<Login />);

describe('', () => {
  it('Should not render spinner and error message on start', () => {
    mockedUseLoginForm.mockReturnValue({
      error: '',
      handleClick: () => {},
      isLoading: false,
    });

    renderSut();

    expect(screen.queryByTestId('errorWrapper')).not.toBeInTheDocument();
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });

  it('Should render spinner when loading state is true', async () => {
    mockedUseLoginForm.mockReturnValue({
      error: '',
      handleClick: () => {},
      isLoading: true,
    });

    renderSut();

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
