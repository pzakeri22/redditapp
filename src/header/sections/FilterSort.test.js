import { render} from '../../test-utils.js';
import FilterSort from './FilterSort.js';

test('renders sort and filter', () => {
    render(<FilterSort />);

    const sortElement = document.getElementsByTagName("select")[0];
    const filterElement = document.getElementsByClassName("filter")[0];

    expect(sortElement).toBeInTheDocument();
    expect(filterElement).toBeInTheDocument();
  });
