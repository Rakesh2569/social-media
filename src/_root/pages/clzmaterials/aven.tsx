import React from 'react';

const Aven: React.FC = () => {
    return (
        <div className="main-container">
          <div className="heading">
            <h1 className="heading__title">Select Branch</h1>
          </div>
          <div className="cards">
            <a href="https://drive.google.com/drive/folders/1tnSfnixzcqzTUaA1MDAfc2kBPV1pgsfm" className="card-link" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <p className="heading">
                  CSE
                </p>
              </div>
            </a>
    
            <a href="https://drive.google.com/drive/folders/1NWAJDCeuOmdL25QAZhysMKQ_C7OCjV-F?usp=drive_link" className="card-link" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <p className="heading">
                  EEE
                </p>
              </div>
            </a>
    
            <a href="your_drive_link_for_MECH" className="card-link" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <p className="heading">
                  MECH
                </p>
              </div>
            </a>

            <a href="your_drive_link_for_ECE" className="card-link" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <p className="heading">
                  ECE
                </p>
              </div>
            </a>
          </div>
        </div>
    );
};

export default Aven;
