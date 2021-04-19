import { render, screen } from '@testing-library/react';
import SiteHeader from './SiteHeader';

test('Shows the rock svg', () => {
    let args = {
        user: null
    }
    render(<SiteHeader {...args} />);
    const headerText = screen.getByRole('heading');
    expect(headerText).toHaveTextContent('SharpStone');
  });