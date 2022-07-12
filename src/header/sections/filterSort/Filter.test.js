import { render} from '../../../test-utils.js'
import Filter from './Filter.js';

test('renders sort and filter', () => {
    render(<Filter />);

    const filterElement = document.getElementsByClassName("filter")[0];

    expect(filterElement).toBeInTheDocument();
  });
