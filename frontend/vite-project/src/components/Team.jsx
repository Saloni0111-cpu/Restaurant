import React from 'react';
import {data} from '../restApi.json';

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">Our Team</h1>
          <p>
          Our team is a dedicated group of culinary experts and food enthusiasts, committed to delivering excellence in every dish and ensuring your dining experience is exceptional.
          </p>
        </div>
      <div className="team_container" style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          padding: '10px', 
          gap: '10px' }}>
        {data[0].team.map ((element) => {
          return (
            <div className="card" key={element.id} style={{
              flex: '0 0 auto', 
              width: '200px', 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '10px', 
              textAlign: 'center'
            }}>
              <img src={element.image} alt={element.name} style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '8px' 
                }}/>
              <h3>{element.name}</h3>
              <p>{element.designation}</p>
            </div>
          );
        })}
      </div>
    </div>
    </section>
  );
};

export default Team;
