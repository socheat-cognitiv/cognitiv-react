import React from 'react';
import cognSpinner from '../../resources/images/cogn-spinner.gif';

const AxiosLoader = () => {
  return (
    <div id="cogn-loading-wrapper">
        <div className="cogn-loading-flex">
            <img className="cogn-loading-spinner" src={cognSpinner} alt="Loading Cognitiv Dashboard"/>
        </div>
    </div>
  )
};
export default AxiosLoader ;
