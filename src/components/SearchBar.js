import React from 'react';
import "../styles/SearchBar.css"

function SearchBar(props) {
  return (
    // <div className="container">
    // <nav className="navbar navbar-expand-lg navbar-lightbg-light">

      <div className="mt-3">
    <form className="d-flex">

        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          className="form-control localSearchBar"
          type="text"
          placeholder="Search Directory"
          id="Search"
        />

        {/* <button onClick={props.handleSearch} className="btn btn-outline-success my-2 my-sm-0" >
          Search
              </button> */}


    </form>
      </div>

 

  );
}


export default SearchBar;
