import { render, screen } from '@testing-library/react';
import { Home } from './index';

describe('Home component', () => {
  it('should render Home page with title', () => {
    render(<Home />);

    screen.getByText(/Attendance list/i);
  });
});
