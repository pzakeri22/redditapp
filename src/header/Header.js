import LogoBar from './sections/LogoBar.js';
import FilterSort from './sections/FilterSort.js';

export default function Header() {
    return (
        <header>
            <LogoBar/>
            <FilterSort/>
        </header>
    );
}