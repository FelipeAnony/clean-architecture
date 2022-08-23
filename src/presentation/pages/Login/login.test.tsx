import { render, screen } from '@testing-library/react';

import Login from './index';

const renderSut = () => render(<Login />);

describe('', () => {
  it('Should not render spinner and error message on start', () => {
    renderSut();

    expect(screen.queryByTestId('errorWrapper')).not.toBeInTheDocument();
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });
});
