import {filterPosts, selectFilter} from '../../postsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'
import React from 'react';


export default function FilterSort() {
    const dispatch = useDispatch();
    const currentFilter = useSelector(selectFilter);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(currentFilter);
    

    const handleFilterChange = e => {
        if (location.pathname !== "/") {
            navigate("/");
        }
        dispatch(filterPosts(e.target.value));
    }

    return (
        <section className="filter-sort">
           <input type="text" 
           onChange={handleFilterChange} 
           value={currentFilter} 
           placeholder="Search posts..."/>
        </section>
    );
}