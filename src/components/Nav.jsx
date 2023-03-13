import React from 'react'
import {Link} from 'react-router-dom'


 function Nav (props){
  return (
    <div className="nav">
      
      <Link to="/Women`s"> 
        Women`s
      </Link>
      <Link to="/Men`s">
        <div>Men`s</div>
      </Link>
      <Link to="/On the Street">
        <div>On the Street</div>
      </Link>
      <Link to="/The Catwalk">
        <div>The Catwalk</div>
      </Link>
      <Link to="/AdWatch">
        <div>AdWatch</div>
      </Link>
      <Link to="/About">
        <div>About</div>
      </Link>
    </div>
  );
};
export default Nav