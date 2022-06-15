import {filterPosts, selectFilter, sortPosts, selectSort} from '../../states/postsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'
import React from 'react';


export default function FilterSort() {
    const dispatch = useDispatch();
    const currentFilter = useSelector(selectFilter);
    const navigate = useNavigate();
    // const currentSort = useSelector(selectSort);
    // console.log(currentSort);
    // const location = useLocation();    

    const handleFilterChange = e => {
        // if (location.pathname !== "/") {
        navigate("/");
        // }
        dispatch(filterPosts(e.target.value));
    }

    const handleClick = (e) => {
        const sortValue = e.target.value;
        dispatch(sortPosts(sortValue));
    }

    return (
        <div className="filter-sort">
            <select name="Sort" onClick={handleClick} >
                <option value="Hot">Hot</option>
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