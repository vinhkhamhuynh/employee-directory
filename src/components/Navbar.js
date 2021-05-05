import React from 'react';

function Navbar() {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-lightbg-light">
        
            {/* <form className="form-inline my-2 my-lg-0 center"> */}
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
              </button>
            {/* </form> */}
          
        </nav>
       
         
        </div>
     
    );
}


export default Navbar;
