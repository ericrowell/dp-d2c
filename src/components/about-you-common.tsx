import React, { useState } from 'react';

type Props = {
  vm: any; // replace any with the actual type
};

const AboutYou: React.FC<Props> = ({ vm }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const setStep = () => {
    // logic here
  };

  const validateInput = (type: string, value: string) => {
    // logic here
  };

  const validateForm = () => {
    // logic here
  };

  return (
    <div id={`${vm.profile.type}-about-you`}>
      <div className={`about-you details-common ${vm.summaryStep === 'DETAIL' ? 'common-details-box' : ''}`}>
        <div className={`common-box-header ${isCollapsed ? 'isCollapse' : ''}`} style={{ display: vm.summaryStep !== 'EDIT' ? 'block' : 'none' }}>
          <div className="row">
            <div className="col-xs-10">
              <h1>Personal Details</h1>
            </div>
            <div className="col-xs-2">
              <a className={isCollapsed ? 'isCollapse' : ''} id="aboutYouCommonHide" name="aboutYouCommonHide" href="#"
                onClick={setStep}>
                <span className={`pull-right collapse-icon glyphicon ${!isCollapsed ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`}></span>
              </a>
            </div>
          </div>
        </div>
        {/* ... rest of the code ... */}
      </div>
    </div>
  );
};

export default AboutYou;
