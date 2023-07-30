import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ProfileGitHub } from './index';

jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        name: 'Lucas Anselmo Moraes Da Silva ',
        avatar_url: 'https://avatars.githubusercontent.com/u/53938849?v=4',
      },
    })
  ),
}));

describe('Profile GitHub Component', () => {
  it('should GitHub Username', async () => {
    render(<ProfileGitHub />);

    await waitFor(() => screen.getByText('Lucas Anselmo Moraes Da Silva'));

    expect(screen.getByAltText('User Profile photo')).toHaveAttribute(
      'src',
      'https://avatars.githubusercontent.com/u/53938849?v=4'
    );
  });
});
