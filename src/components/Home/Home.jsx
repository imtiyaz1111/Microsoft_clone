import React from 'react';
import Blog from '../Blog/Blog';
import "./Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Businessblog from '../Businessblog/Businessblog';
import {
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
    {/* hero-section */}
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-M1-Family-02-1:VP4-1399x600" className="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <div className="slide1">
        <h2>Surface Pro 9</h2>
        <p className='text-secondary'>Tablet versatility and laptop power — all in one ultra-portable device</p>
        <button type="button" class="btn btn-primary">Learn more</button>
        </div>
      </div>
    </div>
    <div className="carousel-item slide2">
      <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-M365-Icon-Bounce-Word-Merch:VP4-1399x600" className="d-block w-100" alt="..."/>
      <div class="carousel-caption ">
        <div className="slides2">
        <h2>Microsoft 365</h2>
        <p className='text-secondary'>Turn your ideas into reality, stay safer online and off, and focus on what matters most with Microsoft 365 apps</p>
        <button type="button" class="btn btn-primary">For one person</button>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      <Blog/>
   {/* poster */}
   <div className="container">
    <div className="poster">
      <div className="poster-details">
      <h1 className='text-light fs-3'>
      Designed for life today – <br />and tomorrow
      </h1>
      <p className="text-light">
      The next-generation of games. Your goals. Friends <br /> and family. Windows 11 was made to bring you <br /> closer to everything you love.
      </p>
      <a href="https://www.microsoft.com/en-in/windows/windows-11?icid=mscom_marcom_MPH1a_Win11PChlth#pchealthcheck"><button type="button" className="btn btn-primary">See if your PC is ready</button></a>
      </div>
    </div>
   </div>
   <Businessblog/>
   <div className=" container">
    <div className="microicon">
      <p className='me-3'>Follow Microsoft</p>
      <div className="icon">
    <a href="https://www.youtube.com/user/IndiaMicrosoftVideos"> <FontAwesomeIcon
           className="me-3 "
            icon={faYoutube}
          ></FontAwesomeIcon>
          </a> 
      <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fmicrosoftindia"> <FontAwesomeIcon
            className="me-3 "
            icon={faTwitter}
          ></FontAwesomeIcon>
          </a>
          <a href="https://www.facebook.com/MicrosoftIndia"> <FontAwesomeIcon
            className="me-3 "
            icon={faFacebook}
          ></FontAwesomeIcon>
          </a>
      </div>
    </div>
   </div>
   <Footer/>
    </>
  );
}

export default Home;
