import React, { useState } from 'react'
import style from './Paginator.module.css'

export const Paginator = ({totalUserCount, userSize, currentPage, setCurrentPageThunk, onPageChange,portionSize=6}) => {
    let pagesCount = Math.ceil(totalUserCount / userSize);
    let pages = [];
    
    let clearSelection = ()=> {
        if (window.getSelection) {
          window.getSelection().removeAllRanges();
        } else { 
          document.selection.empty();
        }
      }

    let portionPage = Math.ceil(pagesCount/portionSize)
    let [portionNumber,setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber-1)*portionSize
    let rightPortionNumber = portionNumber*portionSize
    
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={style.activePage}>
        <span className={style.prev} ondblclick={clearSelection()} onClick={(e) => {
            setPortionNumber(portionNumber-1)
        }}>&#8592;</span>
        {
            pages.map(p => {
                if (p >leftPortionNumber  && p < rightPortionNumber) {
                    return <span className={currentPage === p ? style.active : style.notActive}
                        onClick={(e) => { onPageChange(p) }}>{p}</span >
                }
                else {
                    return null
                }
            })

        }
        <span className={style.next} onClick={(e) => {
            setPortionNumber(portionNumber+1)
        }}>&#8594;</span>
    </div>
}