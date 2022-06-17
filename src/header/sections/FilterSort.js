import {filterPosts, selectFilter, sortPosts, selectSort, setScrollPosition} from '../../states/postsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'
import React from 'react';
import { useEffect } from 'react';



export default function FilterSort() {
    const dispatch = useDispatch();
    const currentFilter = useSelector(selectFilter);
    const navigate = useNavigate();
    const currentSort = useSelector(selectSort);

    /*
    when click on post, remember new etc order and show this in the top.
    When go back to posts, have it sorted on that order.

        when go backwards by pressing back button, 
        remember currentSort state
        display posts in sorted order.

        when press home button, re-set to default

        set state on any page, home or posts

        if sort changes OR if current sort !== hot.

        if 
    */
    const handleFilterChange = e => {
        navigate("/");
        console.log(e.target.value)
        dispatch(filterPosts(e.target.value));
    }

    const handleClick = (e) => {
        if (e.target.value !== currentSort) {
            navigate("/");
            dispatch(setScrollPosition(0));
        }
        const sortValue = e.target.value;
        dispatch(sortPosts(sortValue));
    }

    useEffect(() => {
        let sort = document.getElementById("select-sort");
        if (currentSort === "Hot") {
            sort.selectedIndex = 0;
        }
        if (currentSort === "New") {
            sort.selectedIndex = 1;

        }
        if (currentSort === "Likes") {
            sort.selectedIndex = 2;
        }
    })

    return (
        <div className="filter-sort">
            <select name="Sort" onClick={handleClick} id="select-sort">
                <option value="Hot" selected="selected">Hot</option>
                <option value="New">New</option>
                <option value="Likes">Likes</option>
            </select>
            <input type="text" 
                onChange={handleFilterChange} 
                value={currentFilter} 
                placeholder="Search posts..."
                className="filter"
            />
        </div>
    );
}