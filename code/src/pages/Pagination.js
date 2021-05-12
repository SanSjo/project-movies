import React from 'react';

export const Pagination = (props) => {
    console.log("page",props.currentPage)

    return(
    <>
        {props.currentPage > 1 ? <button onClick={() => props.nextPage(props.currentPage - 1)}>Previous</button> : ""}
        {props.currentPage < props.pages + 1 ? <button onClick={() => props.nextPage(props.currentPage + 1)}>Next</button> : ""}
    </>
    )
}

export default Pagination