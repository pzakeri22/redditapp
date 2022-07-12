import { render} from '../../../test-utils.js'
import Sort from './Sort.js';

test('renders sort and filter', () => {
    render(<Sort />);

    const sortElement = document.getElementsByTagName("select")[0];

    expect(sortElement).toBeInTheDocument();
  });
