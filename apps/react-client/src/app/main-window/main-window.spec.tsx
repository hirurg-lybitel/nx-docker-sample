import { render } from '@testing-library/react';

import MainWindow from './main-window';

describe('MainWindow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainWindow />);
    expect(baseElement).toBeTruthy();
  });
});
