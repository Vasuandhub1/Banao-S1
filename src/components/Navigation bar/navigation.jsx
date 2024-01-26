import React, { useState } from "react";
import hobbylogo from "./hobbylogo.svg";
import "./nav-style.css";
import search from "./searchicon.svg";
import explore from "./Explore.svg";
import drowp from "./Drowp-down.svg";
import hobby from "./Hobbies.svg";
import bookmark from "./bookmark.svg";
import notification from "./notification.svg";
import vector from "./Vector.svg";
import mob from "./mobile-search.svg";
import ham from "./ham.svg"

export default function Navigation() {
    const [hamb,setham]=useState(true)
    const handelclick=()=>{
        if(hamb===true){
            setham(true)   
        }
        else{
            setham(false) 
        }
    }
  return (
    <div className="wrapper-nav">
      <nav className="nav">
        {/* logo of the hobby  */}
        <img src={hobbylogo} className="hobbylogo" />
        {/* search menue */}

        <div className="search-com">
        <input
          type="text"
          className="search-menue"
          placeholder="Search here..."
        />
        <img src={search} id="search-icon" />
        </div>

        <div className="component-3">
          <div class="dropdown d-buttons">
            <button
              class="btn button"
              type="button"
              data-bs-toggle="dropdown" 
              aria-expanded="false">
                <img src={explore} className="btn-img"/>
                <p className="btn-text">Explore</p>
                <img src={drowp} className="btn-icon" />
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown d-buttons">
            <button
              class="btn button"
              type="button"
              data-bs-toggle="dropdown" 
              aria-expanded="false">
                <img src={hobby} className="btn-img"/>
                <p className="btn-text">Hobbies</p>
                <img src={drowp} className="btn-icon" />
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <button type="button" className="btn"><img src={bookmark}/></button>
          <button type="button" class="btn"><img src={notification}/></button>
          <button type="button" class="btn"><img src={vector}/></button>
          <button type="button" class="btn btn-outline-primary  sign-in">Sign In</button>
        </div>
        
        {hamb==true? <div className="mob-component-3"><button type="button" className="btn mob-search"><img src={mob}/></button>
        <button type="button" className=" mob-search"><img src={notification}/></button>
        <button type="button" className=" mob-search"><img src={ham} onClick={handelclick} /></button></div> : <div>
        <button type="button" className=" mob-search"><img src={notification} onClick={handelclick} /></button>
            </div>}
      </nav>
    </div>
  );
}
