import React from 'react'
import './SearchBox.scss'

const SearchBox = (props) => {
    return (
        <div className='search-box'>
            <input
                type='search' 
                placeholder={props.placeholder}
                onChange={props.handlerChange}
            />
        </div>
    )
}

export default SearchBox
