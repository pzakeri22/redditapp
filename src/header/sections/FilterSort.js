import {setFilter, selectFilter, setSort, selectSort} from '../../states/postsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react';

export default function FilterSort() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentFilter = useSelector(selectFilter);
    const currentSort = useSelector(selectSort);

    const handleFilter = e => {
        navigate("/r/all");
        dispatch(setFilter(e.target.value));
    }

    const handleSort = (e) => {
        const sortValue = e.target.value;
        if (sortValue !== currentSort) {
            navigate("/r/all");
            dispatch(setSort(sortValue));
        }
    }

    useEffect(() => {
        let sort = document.getElementById("select-sort");
        if (currentSort === "hot" || currentSort === "Default") {
            sort.value = "hot";
        }
        if (currentSort === "new") {
            sort.value = "new";
        }
        if (currentSort === "likes") {
            sort.value = "likes";
        }
    })

    return (
        <div className="filter-sort">
            <select name="Sort" onClick={handleSort} id="select-sort">
                <option value="hot">Hot</option>
                <option value="new">New</option>
                <option value="likes">Likes</option>
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