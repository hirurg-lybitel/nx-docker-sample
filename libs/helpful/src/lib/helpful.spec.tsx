import { render } from '@testing-library/react';

import Helpful from './helpful';

describe('Helpful', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Helpful />);
    expect(baseElement).toBeTruthy();
  });
});
