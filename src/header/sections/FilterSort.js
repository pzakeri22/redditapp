import {setFilter, selectFilter, setSort, selectSort} from '../../states/postsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import React from 'react';
import { useEffect } from 'react';

export default function FilterSort() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentFilter = useSelector(selectFilter);
    const currentSort = useSelector(selectSort);

    const handleFilter = e => {
        navigate("/r/all");
        console.log(e.target.value)
        dispatch(setFilter(e.target.value));
    }

    const handleSort = (e) => {
        const sortValue = e.target.value;
        if (sortValue !== currentSort) {
            navigate("/r/all");
            console.log(e.target.value)
            dispatch(setSort(sortValue));
        }
    }

    useEffect(() => {
        let sort = document.getElementById("select-sort");
        if (currentSort === "Hot" || currentSort === "Default") {
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
            <select name="Sort" onClick={handleSort} id="select-sort">
                <option value="Hot" selected="selected">Hot</option>
                <option value="New">New</option>
                <option value="Likes">Likes</option>
            </select>
            <input type="text" 
                onChange={handleFilter} 
                value={currentFilter} 
                placeholder="Search posts..."
                className="filter"
            />
        </div>
    );
}