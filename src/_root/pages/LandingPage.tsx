import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div>
      <div className="containeer">
        <img src="/assets/icons/mlogo1.png" alt="Logo" className="logo" />
      </div>

      <div className="contr">
        <div>
          <Link to="/sign-in"><button className="log">Login</button></Link>
          <Link to="/sign-up"><button className="reg">Sign up</button></Link>
        </div>
      </div>

      <div className='top'>
        <div className="card">
          <h1>Hey Aspirant, Welcome To <span>SaraswatiGrandhalayam</span>
            <div className="scroller">
              <span>Introducing 
                <br />The New Age<br />
                Learning 
                Platform<br />
                ........
              </span>
            </div>
          </h1>
        </div>
        <div>
          <p className='paraaa'>The future of learning.</p>
        </div>
      </div>

      <div className="ag-format-container">
        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">
                Explore Grandhalayas Import knowledge
              </div>
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">
                Level up your skills Just By Scrolling
              </div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">
                Share your Knowledge To Others
              </div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">
                Follow Your Curosity
              </div>
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" />
              <div className="ag-courses-item_title">
                Find the resources that fit your goals!
              </div>
            </a>
          </div>
        </div>
      </div>
      <center>
        <div className="btm"><h2>Connect With Learners Around The World <span><h1>Learn.Share.Grow</h1></span></h2></div>
        <Link to="/sign-up"> <div className="button" id='btmbtn'>
          <a className="link">Lets Begin</a>
        </div></Link>
      </center>
    </div>
  );
}

export default LandingPage;
