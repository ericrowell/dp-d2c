import React, { useState } from 'react';

type Option = {
    option: string;
    value: string;
};

const MyComponent: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [residencyCode, setResidencyCode] = useState<Option | null>(null);
    const [passType, setPassType] = useState<Option | null>(null);
    const [nationality, setNationality] = useState<Option | null>(null);
    const [othNationality, setOthNationality] = useState<string | null>(null);
    const [residentialPostalCode, setResidentialPostalCode] = useState<string | null>(null);
    const [residentialBlockNo, setResidentialBlockNo] = useState<string | null>(null);
    const [residentialStreet, setResidentialStreet] = useState<string | null>(null);
    const [residentialBuilding, setResidentialBuilding] = useState<string | null>(null);
    const [residentialUnitNo, setResidentialUnitNo] = useState<string | null>(null);
    const [isMailingAddress, setIsMailingAddress] = useState<boolean | null>(null);
    const [mailingPostalCode, setMailingPostalCode] = useState<string | null>(null);
    const [mailingBlockNo, setMailingBlockNo] = useState<string | null>(null);
    const [mailingStreet, setMailingStreet] = useState<string | null>(null);
    const [mailingBuilding, setMailingBuilding] = useState<string | null>(null);
    const [mailingUnitNo, setMailingUnitNo] = useState<string | null>(null);
    const [mailingCountry, setMailingCountry] = useState<Option | null>(null);
    const [othMailingCountry, setOthMailingCountry] = useState<string | null>(null);
    const [annualIncome, setAnnualIncome] = useState<string | null>(null);

    // TODO: Implement the functions to handle form submission, input changes, etc.

    return (
        <div id="more-about-you">
            {/* ... */}
            <form className="content-form" name="moreAboutYouForm" noValidate>
                <div className="row each-group">
                    <div className="col-xs-12 col-sm-6 form-group">
                        <label className="static-label" htmlFor="residencyStatus">Res