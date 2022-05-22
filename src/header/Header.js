import LogoBar from './sections/LogoBar';
import FilterSearch from './sections/FilterSearch'

export default function Header() {
    return (
        <header>
            <LogoBar/>
            <FilterSearch/>
        </header>
    );
}