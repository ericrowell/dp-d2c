import React, { useState } from 'react';

type Props = {
  vm: any; // replace any with the actual type
};

const PersonalDetails: React.FC<Props> = ({ vm }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [summaryStep, setSummaryStep] = useState('DETAIL');
  const [principalName, setPrincipalName] = useState('');
  const [myInfoSelected, setMyInfoSelected] = useState(false);
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [givenName, setGivenName] = useState('');
  const [reqType, setReqType] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [nric, setNric] = useState('');
  const [showMediSave, setShowMediSave] = useState(false);
  const [residentialStatusDesc, setResidentialStatusDesc] = useState('');
  const [nationalityDesc, setNationalityDesc] = useState('');
  const [passTypeDesc, setPassTypeDesc] = useState('');
  const [passStatus, setPassStatus] = useState('');
  const [passExpiryDate, setPassExpiryDate] = useState('');
  const [idd, setIdd] = useState('');
  const [number, setNumber] = useState('');
  const [isValidMobileNo, setIsValidMobileNo] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [aboutYouQuestions, setAboutYouQuestions] = useState([]);
  const [aboutYouQ, setAboutYouQ] = useState([]);
  const [questionnaireCat, setQuestionnaireCat] = useState('');
  const [productName, setProductName] = useState('');
  const [partnerChannel, setPartnerChannel] = useState('');

  // replace the methods with the actual implementation
  const setStep = () => {};
  const validateInput = (type: string, value: string) => {};
  const validateForm = () => {};
  const howCollectDataModal = () => {};

  return (
    <div id={`${vm.profile.type}-about-you`}>
      {/* Rest of the JSX code */}
    </div>
  );
};

export default PersonalDetails;
