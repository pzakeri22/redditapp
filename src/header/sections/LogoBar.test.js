import { render, screen } from '../../test-utils.js';
import LogoBar from './LogoBar.js';

test('renders logo', () => {
    render(<LogoBar />);
    const logoElement = screen.getByAltText(/reddit logo/i);
    expect(logoElement).toBeInTheDocument();
});
