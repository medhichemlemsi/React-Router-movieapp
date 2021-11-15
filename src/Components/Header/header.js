import React from 'react'
import Rating from '../Rating'
import './Header.css'

const Header = ({ setSearch, setSearchRate, searchRate }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Type movie name to search"
                onChange={(e) => setSearch(e.target.value)}
            />
            <Rating setSearchRate={setSearchRate} rating={searchRate} />
        </div>
    )
}

export default Header