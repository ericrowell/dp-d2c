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
        // ... add the rest of the properties here
    };
};

const MoreAboutYou: React.FC<Props> = ({ vm }) => {
    const [isMailingAddress, setIsMailingAddress] = useState<string>('');

    const handleMailingAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsMailingAddress(event.target.value);
        vm.setUploadList();
        if (event.target.value === 'false') {
            vm.setMailingAddress();
            vm.clearMailingAddress();
        }
    };

    // ... add the rest of the event handlers here

    return (
        <div id={`${vm.profile.type}-more-about-you`}>
            <div className={`about-you details-common ${vm.summaryStep === 'DETAIL' ? 'common-details-box' : 'common-job-box'}`} >
                {/* ... add the rest of the JSX here */}
                <div>
                    <label className="static-label">Is this also your mailing address?</label>
                    <div className="consent-radio">
                        <label className="radio-inline">
                            <input type="radio" name="isMailingAddress" value="true" onChange={handleMailingAddressChange} required />
                            <label> Yes</label>
                        </label>
                        <label className="radio-inline">
                            <input type="radio" name="isMailingAddress" value="false" onChange={handleMailingAddressChange} required />
                            <label> No</label>
                        </label>
                    </div>
                </div>
                {/* ... add the rest of the JSX here */}
            </div>
        </div>
    );
};

export default MoreAboutYou;
