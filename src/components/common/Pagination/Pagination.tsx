import React, {useState} from 'react';
import s from "./Pagination.module.css";


export const Pagination = (props: PaginationPropsType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / props.portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    const rightPortionPageNumber = portionNumber * props.portionSize

    return (
        <div>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}> prev </button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : s.pageSelector}
                             onClick={(e) => props.onPageChanged(p)}>{p} </span>
            })}
            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
        </div>
    );
};


//types
type PaginationPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    portionSize: number
}
