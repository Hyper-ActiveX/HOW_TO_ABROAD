import React from 'react';
import "./Search.css"

const Scourse = () => {
  return (
    <>
    <div
    className='course' 
    style={{ width: '100%', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <iframe 
      className='frane'
        src="http://localhost:3000/proxy" 
        style={{ 
          border: 'none', 
          width: '100%', 
          position: 'absolute', 
          height: 'calc(100% + 500px)',
          top: -450, 
          left: 0,
          
          scrollBehavior: 'smooth',
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
          'scrollbar-width': 'none', /* Firefox */
          overflow:'hidden',
          
        }}
        title="Find Study Programmes in Germany"
      ></iframe>
      <div style={{
        backgroundColor:'white',
        // position:'relative',
        zIndex:'1',
        height:'400px',
        width:'400px',
        top:'50%'
      }}></div>
    </div>
    </>
  );
};

export default Scourse;
