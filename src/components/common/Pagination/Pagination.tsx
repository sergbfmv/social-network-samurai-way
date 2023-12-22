import React from 'react';
import s from "./Pagination.module.css";


export const Pagination = (props: PaginationPropsType) => {
    let pagesCount = props.totalUsersCount / props.pageSize
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : s.pageSelector}
                             onClick={(e) => props.onPageChanged(p)}>{p} </span>
            })}
        </div>
    );
};


//types
type PaginationPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
}
