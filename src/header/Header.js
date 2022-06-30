import LogoBar from './sections/LogoBar.js';
import FilterSort from './sections/FilterSort.js';
import { useLayoutEffect } from 'react';

export default function Header() {
    useLayoutEffect(() => {
        function updateSize() {
          const header = document.querySelector('header');
          const resultsContainer =  document.getElementsByClassName('results-container')[0];
          resultsContainer.style.top = `${header.clientHeight - 8}px`;
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      });

    return (
        <header>
            <LogoBar/>
            <FilterSort/>
        </header>
    );
}