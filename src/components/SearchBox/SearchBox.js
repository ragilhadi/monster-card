import React from 'react'

const SearchBox = (props) => {
    return (
        <div>
            <input 
                type='search' 
                placeholder={props.placeholder}
                onChange={props.handlerChange}
            />
        </div>
    )
}

export default SearchBox
