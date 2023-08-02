import React, { useState } from 'react';

type Option = {
    option: string;
    value: string;
};

type Props = {
    vm: {
        profile: {
            type: string;
        };
        summaryStep: string;
        isCollapsed: boolean;
        setStep: () => void;
        reqType: string;
        residencyCode: Option;
        residencyOptions: Option[];
        passType: Option;
        handlePassTypeChange: () => void;
        passTypeOptions: Option[];
        nationality: Option;
        allNationality: Option[];
        othNationality: string;
        // ...rest of the properties
    };
};

const MoreAboutYou: React.FC<Props> = ({ vm }) => {
    const [isCollapsed, setIsCollapsed] = useState(vm.isCollapsed);

    const handleSetStep = () => {
        vm.setStep();
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div id={`${vm.profile.type}-more-about-you`}>
            <div className={`about-you details-common ${vm.summaryStep === 'DETAIL' ? 'common-details-box' : 'common-job-box'}`}>
                <div className={`common-box-header ${isCollapsed ? 'isCollapse' : ''}`} style={{ display: vm.summaryStep !== 'EDIT' ? 'block' : 'none' }}>
                    <div className="row">
                        <div className="col-xs-10">
                            <h1>About you</h1>
                        </div>
                        <div className="col-xs-2">
                            <a className={isCollapsed ? 'isCollapse' : ''} id="moreAboutYouCommonHide" name="moreAboutYouCommonHide" href="#" onClick={handleSetStep}>
                                <span className={`pull-right collapse-icon glyphicon ${!isCollapsed ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`}></span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* ...rest of the component */}
            </div>
        </div>
    );
};

export default MoreAboutYou;
