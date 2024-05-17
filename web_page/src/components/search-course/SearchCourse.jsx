import React from 'react';
import "./Search.css"

const Scourse = () => {
  return (
    <>
    {/* <div style={{ 
        width: '100%', 
        height: '100vh', 
        overflow: 'hidden',
        position: 'relative',
    }}>
      <iframe 
        src="https://howtoabroad.com/find-study-programmes-in-germany/" 
        style={{ 
          border: 'none', 
          width: '100%', 
          height: 'calc(100% + 500px)', // Adjust height to account for the cut-off
          marginTop: '-450px', // Move content up to cut off the top part
          marginBottom: '500px', // Move content up to cut off the bottom part
          overflowY: 'scroll',
        }}
        title="Find Study Programmes in Germany"
      ></iframe>
    </div> */}
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
    </div>
    </>
  );
};

export default Scourse;
