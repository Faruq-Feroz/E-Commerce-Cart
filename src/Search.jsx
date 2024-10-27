import React from 'react';

const Search = ({ searchCourse, courseSearchUserFunction }) => {
    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search for products..." 
                value={searchCourse} 
                onChange={courseSearchUserFunction} 
                className="form-control"
            />
        </div>
    );
};

export default Search;
