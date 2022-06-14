import {filterPosts, selectFilter} from '../../states/postsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'
import React from 'react';


export default function FilterSort() {

    const dispatch = useDispatch();
    const currentFilter = useSelector(selectFilter);
    const navigate = useNavigate();
    // const location = useLocation();    

    const handleFilterChange = e => {
        // if (location.pathname !== "/") {
        navigate("/");
        // }
        dispatch(filterPosts(e.target.value));
    }

    return (
        <div className="filter-sort">
            <button type="button" className="button-9">
                Best
            </button>
            <input type="text" 
                onChange={handleFilterChange} 
                value={currentFilter} 
                placeholder="Search posts..."
                className="filter"
            />
        </div>
    );
}