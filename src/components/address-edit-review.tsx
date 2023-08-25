import React, { useState } from 'react';

type AddressData = {
    addrType: string;
    labelName: string;
    warningMsg: string;
    postalCode: {
        id: string;
        label: string;
        labelForeign: string;
    };
    blockNo: {
        id: string;
        label: string;
        labelForeign: string;
    };
    street: {
        id: string;
        label: string;
        labelForeign: string;
    };
    building: {
        id: string;
        label: string;
        labelForeign: string;
    };
    unitNo: {
        id: string;
        label: string;
        labelForeign: string;
    };
    country: {
        list: {
            option: string;
            value: string;
        }[];
    };
};

type AddressEditReviewProps = {
    selectMode: string;
    addressData: AddressData;
    canEdit: boolean;
    questionPresent: boolean;
    allowEdit: boolean;
    isEditAction: () => void;
    loginStatus: boolean;
    isMailingAddress: string;
    blockNo: string;
    streetName: string;
    unitNo: string;
    buildingName: string;
    isSingapore: boolean;
    countryName: {
        option: string;
        value: string;
    };
    postalCode: string;
    addressType: string;
    changeResidentialAddress: boolean;
    setMailingAddress: (data: { type: string }) => void;
    generateAddress: (type: string, postalCode: string) => void;
    mailCountryChange: () => void;
};

const AddressEditReview: React.FC<AddressEditReviewProps> = (props) => {
    const [isMailingAddress, setIsMailingAddress] = useState<string>('');

    const changeIsMailing = () => {
        setIsMailingAddress(isMailingAddress === 'true' ? 'false' : 'true');
    };

    return (
        <div className="address-edit-review">
            {/* Code goes here */}
        </div>
    );
};

export default AddressEditReview;
