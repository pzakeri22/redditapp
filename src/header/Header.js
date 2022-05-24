import LogoBar from './sections/LogoBar.js';
import FilterSearch from './sections/FilterSearch.js'

export default function Header() {
    return (
        <header>
            <LogoBar/>
            <FilterSearch/>
        </header>
    );
}