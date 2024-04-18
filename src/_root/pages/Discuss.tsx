import React from 'react';
import { Link } from 'react-router-dom';
import "./discuss.css";
import Htmlbot from './Htmlbot';



const Discuss = () => {
  return (
    <div className='books'>
      <div>
      <div className="book">
  <Link to="/htmlbot">
    <p style={{ color: 'white' }}>Click To Open</p>
    <div className="cover">
      <p>HTML Bot</p>
    </div>
  </Link>
</div>
        <div className="book">
          <p style={{ color: 'white' }}>Click To Open</p>
          <div className="cover">
            <p>Backend Bot</p>
          </div>
        </div>
        <div className="book">
          <p style={{ color: 'white' }}>Click To Open</p>
          <div className="cover">
            <p>CSS</p>
          </div>
        </div>
      </div>

      <div>
        <div className="book">
          <p style={{ color: 'white' }}>Click To Open</p>
          <div className="cover">
            <p>React</p>
          </div>
        </div>
        <div className="book">
          <p style={{ color: 'white' }}>Click To Open</p>
          <div className="cover">
            <p>JavaScript</p>
          </div>
        </div>
        <div className="book">
          <p style={{ color: 'white' }}>Click To Open</p>
          <div className="cover">
            <p>Python</p>
          </div>
        </div>
      </div>

      <div>
        <div className="book">
          <p style={{ color: 'white' }}>Click To Open</p>
          <div className="cover">
            <p>Machine Learning</p>
          </div>
        </div>
        
        <div className="book">
          <p style={{ color: 'white' }}>Click To Open</p>
          <div className="cover">
            <p>Data Science</p>
          </div>
        </div>
        <div className="book">
          <p style={{ color: 'white' }}>Click To Open</p>
          <div className="cover">
            <p>Web Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discuss;
