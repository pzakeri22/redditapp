import { setSort, selectSort} from '../../../states/postsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react';

export default function Sort() {

    const currentSort = useSelector(selectSort);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSort = (e) => {
        const sortValue = e.target.value;
        if (sortValue !== currentSort) {
            navigate("/r/all");
            dispatch(setSort(sortValue));
        }
    }

    useEffect(() => {
        let sort = document.getElementById("sort");
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
        <select name="Sort" onClick={handleSort} id="sort">
            <option value="hot">Hot</option>
            <option value="new">New</option>
            <option value="likes">Likes</option>
        </select>
    );
}