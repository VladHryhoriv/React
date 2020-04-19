import React from 'react'
import style from './Paginator.module.css'

export const Paginator = ({totalUserCount, userSize, currentPage, setCurrentPageThunk, onPageChange}) => {
    let pagesCount = Math.ceil(totalUserCount / userSize);
    let pages = [];
    let min = 0, max = 0
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={style.activePage}>
        <span className={style.prev} onClick={(e) => {
            setCurrentPageThunk(currentPage - 1)
            onPageChange(currentPage - 1)
        }}>&#8592;</span>
        {
            pages.map(p => {
                min = currentPage - 3
                max = currentPage + 3
                if (p > min && p < max) {
                    return <span className={currentPage === p ? style.active : style.notActive}
                        onClick={(e) => { onPageChange(p) }}>{p}</span >
                }
                else {
                    return null
                }
            })

        }
        <span className={style.next} onClick={(e) => {
            setCurrentPageThunk(currentPage + 1)
            onPageChange(currentPage + 1)
        }}>&#8594;</span>
    </div>
}