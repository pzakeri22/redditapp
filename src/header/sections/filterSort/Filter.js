import {setFilter, selectFilter} from '../../../states/postsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import React from 'react';

export default function Filter() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentFilter = useSelector(selectFilter);

    const handleFilter = e => {
        navigate("/r/all");
        dispatch(setFilter(e.target.value));
    }

    return (
        <input type="text" 
            onChange={handleFilter} 
            value={currentFilter} 
            placeholder="Search posts..."
            className="filter"
        />
    );
}