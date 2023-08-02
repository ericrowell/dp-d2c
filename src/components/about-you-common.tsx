import React, { useState } from 'react';

type Props = {
  vm: any; // replace any with the actual type
};

const AboutYou: React.FC<Props> = ({ vm }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [summaryStep, setSummaryStep] = useState('DETAIL');
  const [principalName, setPrincipalName] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [nric, setNric] = useState('');
  const [residentialStatusDesc, setResidentialStatusDesc] = useState('');
  const [nationalityDesc, setNationalityDesc] = useState('');
  const [passTypeDesc, setPassTypeDesc] = useState('');
  const [passStatus, setPassStatus] = useState('');
  const [passExpiryDate, setPassExpiryDate] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [idd, setIdd] = useState('');

  const validateInput = (type: string, value: string) => {
    // validation logic here
  };

  const handleNextClick = () => {
    // handle next click here
  };

  return (
    <div id={`${vm.profile.type}-about-you`}>
      {/* Rest of the JSX code */}
      <button id="btnNextToMoreAboutYou" name="nextToMoreAboutYou" title="nextToMoreAboutYou"
              className="btn detail-btn detail-submit-btn" onClick={handleNextClick}>NEXT</button>
    </div>
  );
};

export default AboutYou;
