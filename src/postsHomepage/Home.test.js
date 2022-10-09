import Home from "./Home"
import Posts from "./posts/Posts"
import {render} from '@testing-library/react';
import Sort from '../header/sections/filterSort/Sort'

/* 
Each sort works & scrolls to top





Scroll exists in Home.js
Sort exists in Posts.js
Filter exists in Posts.js
Undo-filter exists in Posts.js

Import both here. 


*/

test('sort feature sorts posts by selected option and scrolls to top', async () => {
    render(<Sort/>)
    
    /*
    //need sort 
    //need posts
    //need home

    When user presses sort, 
    (fire event/ user event) posts in the final posts array are sorted by the sort element
    AND scrolls to top
    */

})
