import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Page1: React.FC = () => {
    return (
        <div className="main-container">
          <div className="heading">
            <h1 className="heading__title">Currently Available</h1>
          </div>
          <div className="cards">
            <Link to="/aven" className="card-link">
            <div className="card">
              <p className="heading">
                AVEN
               </p>
                <p>Latest
                </p></div>
            </Link>

            
         
          </div>
        </div>
  );
};

export default Page1;
