import { render} from '../../test-utils.js';
import LogoBar from './LogoBar.js';

test('renders logo and subreddit', () => {
    render(<LogoBar />);

    const logoElement = document.getElementsByClassName("logo-subreddit")[0];
    const subredditElement = document.getElementsByClassName("home-subreddit")[0];

    expect(logoElement).toBeInTheDocument();
    expect(subredditElement).toBeInTheDocument();
});