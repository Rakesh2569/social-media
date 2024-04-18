import React from 'react';
import y1 from './images/y1.jpg'
import y2 from './images/y2.jpg'
import y3 from './images/y3.jpg'
import y4 from './images/y4.jpg'
import y5 from './images/y5.jpg'
import y6 from './images/y6.png'
import y7 from './images/y7.jpg'
import y8 from './images/y8.jpg'
import y9 from './images/y9.jpg'

const Page3: React.FC = () => {
  return (
    <div>
      <h1 className="heading__title">YouTube Channels You Must Know</h1>
      <div className="cards">
     <a href="https://www.youtube.com/@ApnaCollegeOfficial" className="card-link">
          <div className="card">
          <img src={y1} alt="Developers Roadmaps" />
            <p className="heading">Apna College</p>
          </div>
        </a>

        <a href="https://youtube.com/@BroCodez?si=qDPvChV-ZYMm1Yr-" className="card-link">
          <div className="card">
          <img src={y2} alt="brocode" />
            <p className="heading">Brocodez</p>
          </div>
        </a>

        
        <a href="https://youtube.com/@CoderArmy9?si=_OFdWr1dUIh196XJ" className="card-link">
          <div className="card">
          <img src={y3} alt="brocode" />
            <p className="heading">CodeArmy</p>
          </div>
        </a>


        
        <a href="https://youtube.com/@ezsnippat?si=U2FWzaxf0tTyNsNV" className="card-link">
          <div className="card">
          <img src={y4} alt="brocode" />
            <p className="heading">Neeraj Walia</p>
          </div>
        </a>


        
        <a href="https://www.youtube.com/@freecodecamp" className="card-link">
          <div className="card">
          <img src={y5} alt="brocode" />
            <p className="heading">FreeCodeCamp</p>
          </div>
        </a>


        
        <a href="https://www.youtube.com/@ramareddymathsacademy" className="card-link">
          <div className="card">
          <img src={y6} alt="brocode" />
            <p className="heading">RamaReddyMaths Acadamy</p>
          </div>
        </a>

        <a href="https://www.youtube.com/@DIVVELASRINIVASARAO" className="card-link">
          <div className="card">
          <img src={y7} alt="brocode" />
            <p className="heading">Divvela SrinivasaRao</p>
          </div>
        </a>

        <a href="https://www.youtube.com/@nesoacademy" className="card-link">
          <div className="card">
          <img src={y8} alt="brocode" />
            <p className="heading">NessoAcadamy</p>
          </div>
        </a>

        <a href="https://www.youtube.com/@NareshIT" className="card-link">
          <div className="card">
          <img src={y9} alt="brocode" />
            <p className="heading">NNaresh i Technologies</p>
          </div>
        </a>


  </div>
    </div>
  );
};

export default Page3;
