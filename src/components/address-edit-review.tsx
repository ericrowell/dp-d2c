import React, { useState } from 'react';

type AddressData = {
  labelName: string;
  addrType: string;
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
    list: Array<{ option: string; value: string }>;
  };
};

type Props = {
  selectMode: string;
  addressData: AddressData;
  canEdit: boolean;
  allowEdit: boolean;
  questionPresent: boolean;
  loginStatus: boolean;
  isMailingAddress: string;
  blockNo: string;
  streetName: string;
  isSingapore: boolean;
  unitNo: string;
  buildingName: string;
  countryName: { option: string; value: string };
  postalCode: string;
  addressType: string;
  changeResidentialAddress: boolean;
  isEditAction: () => void;
  setUploadList: () => void;
  changeIsMailing: () => void;
  generateAddress: (addrType: string, postalCode: string) => void;
  setMailingAddress: (data: { type: string }) => void;
  mailCountryChange: () => void;
};

const AddressEditReview: React.FC<Props> = (props) => {
  const [isBlurValidation, setIsBlurValidation] = useState(false);

  const handleBlur = () => {
    setIsBlurValidation(true);
  };

  return (
    <div className="address-edit-review">
      {props.selectMode === 'DETAIL' && <div></div>}
      {props.selectMode === 'EDIT' && <div></div>}
      {props.selectMode === 'REVIEW' && (
        <div>
          {!props.canEdit && (
            <div className="each-sub-group">
              <label className="view-form-title">{props.addressData.labelName}</label>
              {/* Rest of the code */}
            </div>
          )}
          {props.canEdit && (
            <div>
              <div className="each-sub-group">
                <label className="view-form-title">{props.addressData.labelName}</label>
                {/* Rest of the code */}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddressEditReview;
