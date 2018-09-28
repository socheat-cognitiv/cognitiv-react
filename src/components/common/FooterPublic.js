import React from 'react';

const FooterPublic = () => {
    const date = new Date();
    const copyrightYear = date.getFullYear();
  return (
    <div className="row">
      <div className="cogn-public-footer text-center">
          <p className="cogn-public-copyright">&copy; { copyrightYear } Cognitiv</p> 
      </div>
    </div>
  )
};
export default FooterPublic ;