import React from 'react';
import { Link } from 'react-router-dom';
import './Materialmart.css'; // Import CSS file

const Materialmart: React.FC = () => {
  return (
    <div className="main-container">
      <div className="heading">
        <h1 className="heading__title">Educational Repository</h1>
      </div>
      <div className="cards">
        <Link to="/page1" className="card-link">
        <div className="card">
          <p className="heading">
            College Materials
           </p>
            <p>Latest
            </p></div>
        </Link>

        <Link to="/page2" className="card-link">
        <div className="card">
          <p className="heading">
            Best Learning Websites
           </p>

            <p>Latest
            </p></div>
        </Link>


        <Link to="/page3" className="card-link">
        <div className="card">
          <p className="heading">
            Best Youtube channels
           </p>
            <p>Latest
            </p></div>
        </Link>
        
     
      </div>
    </div>
  );
};

export default Materialmart;
