import React from "react";
import "./home-style.css";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
export default function Homescr() {
  return (
    <div className="home-wrapper">
      <div className="component">
        <div className="text">
          <h3 className="text-h3">Explore your <h3 id="Hobby">Hobby</h3> or <h3 id='passion'>Passion</h3></h3>
          <p>
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p>
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
        </div>
        <div className="register-com">
          <div>
            <ul class="nav nav-underline">
              <li class="nav-item">
                <a className="nav-link link-com-3" aria-current="page" href="#" >
                  Sign In 
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link link-com-3" href="#" >
                  Join in
                </a>
              </li>
            </ul>
           
          </div>
          <div className="login-cred">
            <button type="button" class="btn">Base class</button>
            <button type="button" class="btn">Base class</button>
            </div>
        </div>
        <div className="Design">
        <img src={img2} id="img1" />
        <img src={img1} id="img2" />
      </div>
      </div>
    </div>
  );
}
