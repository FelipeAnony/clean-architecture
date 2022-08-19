import { render } from '@testing-library/react';

import Login from './index';

describe('', () => {
  it('Should not render spinner and error on start', () => {
    const { getByTestId } = render(<Login />);
    const errorWrapper = getByTestId('errorWrapper');
    const spinner = getByTestId('spinner');

    expect(errorWrapper.childElementCount).toBe(0);
    expect(spinner.childElementCount).toBe(0);
  });
});
