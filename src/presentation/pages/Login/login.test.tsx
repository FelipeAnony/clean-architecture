import { render, screen } from '@testing-library/react';

import Login from './index';

const renderSut = () => {
  return render(<Login />);
};

describe('', () => {
  it('Should not render spinner and error message on start', () => {
    renderSut();
    expect(screen.queryByTestId('errorWrapper')).not.toBeInTheDocument();
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });

  it('Should have inputs to receive email and password', () => {
    renderSut();
    expect(screen.getByPlaceholderText('example@mail.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
  });

  it('Should have a login button to send data', () => {
    renderSut();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });
});
