import React from 'react';

export default () => {
  return (
    <div className="card" style={{ width: '30%', margin: '3rem auto'}}>
      <div className="header">
        <h1>Page Not Found</h1>
      </div>
      <div className="body">
        <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
        <p>
          <a id="back-link" href="/">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
              <path fill="#00ad9f" d="M11.9998836,4.09370803 L8.55809517,7.43294953 C8.23531459,7.74611298 8.23531459,8.25388736 8.55809517,8.56693769 L12,11.9062921 L9.84187871,14 L4.24208544,8.56693751 C3.91930485,8.25388719 3.91930485,7.74611281 4.24208544,7.43294936 L9.84199531,2 L11.9998836,4.09370803 Z" />
            </svg> */}
            Back to our site
          </a>
        </p>
      </div>

    </div>
  )
}
