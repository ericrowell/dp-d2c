import React, { useState } from 'react';

type InputDetails = {
  labelValue: string;
  inputName: string;
  validationType?: string;
  maxlength?: number;
  isNotRequired?: boolean;
};

type Props = {
  inputDetails: InputDetails;
  inputValue: string;
  inputId: string;
  selectMode: string;
  loginStatus: boolean;
  withDollar: boolean;
  onFocus: boolean;
  aboutYouForm: any; // Replace with the actual type of aboutYouForm
  isEditAction: () => void;
  validateInput: (data: { type: string; str: string }) => void;
  formatSalary: () => void;
  unFormatSalary: () => void;
  validateLength: () => void;
};

const ReviewSummary: React.FC<Props> = ({
  inputDetails,
  inputValue,
  inputId,
  selectMode,
  loginStatus,
  withDollar,
  onFocus,
  aboutYouForm,
  isEditAction,
  validateInput,
  formatSalary,
  unFormatSalary,
  validateLength,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      {/* display mode for review summary */}
      {!isEdit && selectMode !== 'DETAIL' && (
        <>
          {/* PD-1639: Pencil icons in editable fields on review summary */}
          <label className="view-form-title">
            {inputDetails.labelValue || 'N/A'}&nbsp;&nbsp;&nbsp;
            <span
              id={`${inputId}-edit`}
              name={`${inputId}-edit`}
              onClick={isEditAction}
              style={{
                display: selectMode !== 'EDIT' && !loginStatus ? 'block' : 'none',
              }}
            >
              <img className="edit-pencil" src="assets/images/svg/edit.svg" alt="Edit" />
            </span>
          </label>
          <p className="view-form-input" style={{ display: !withDollar && (inputDetails.inputName !== 'nric' || selectMode === 'DETAIL') ? 'block' : 'none' }}>
            {inputValue}
          </p>
          <p className="view-form-input" style={{ display: withDollar ? 'block' : 'none' }}>
            S${inputValue}
          </p>
          <p className="view-form-input" style={{ display: inputDetails.inputName === 'nric' && selectMode !== 'DETAIL' ? 'block' : 'none' }}>
            {inputValue}
          </p>
        </>
      )}

      {/* edit mode for review summary */}
      {(isEdit || selectMode === 'DETAIL') && (
        <>
          <label
            className={`static-label ${!inputValue && !onFocus ? 'empty' : ''} ${(!inputValue && aboutYouForm[inputDetails.inputName].$isOnBlur) || (inputValue && aboutYouForm[inputDetails.inputName].$invalid && aboutYouForm[inputDetails.inputName].$isOnBlur) ? 'error' : ''} ${onFocus ? 'edit' : ''} ${onFocus || inputValue ? 'focus' : ''}`}
            htmlFor={inputId}
          >
            {inputDetails.labelValue}
          </label>
          <span className="error-msg error" style={{ display: inputValue && aboutYouForm[inputDetails.inputName].$invalid && aboutYouForm[inputDetails.inputName].$isOnBlur ? 'block' : 'none' }}>
            Please enter a valid {inputDetails.inputName}
          </span>
          <span className="error-msg" style={{ display: !inputValue && aboutYouForm[inputDetails.inputName].$isOnBlur ? 'block' : 'none' }}>
            Please enter a valid {inputDetails.inputName}
          </span>
          {/* normal input */}
          {withDollar && <span className="view-form-input">S$</span>}
          <input
            className={`form-control input-summary-style isBlurValidation ${inputDetails.inputName !== 'email' ? 'medium-input-style' : ''}`}
            style={{ display: !inputDetails.validationType ? 'block' : 'none' }}
            type="text"
            name={inputDetails.inputName}
            title={inputDetails.inputName}
            id={inputId}
            value={inputValue}
            onBlur={() => {
              onFocus = false;
              validateInput({ type: inputDetails.inputName, str: inputValue });
            }}
            onFocus={() => {
              onFocus = true;
            }}
            maxLength={inputDetails.maxlength}
            required={!inputDetails.isNotRequired}
          />
          {/* number input */}
          <input
            className="form-control input-summary-style medium-input-style isBlurValidation with-dollar"
            style={{ display: inputDetails.validationType === 'idd-validation' ? 'block' : 'none' }}
            type="text"
            name={inputDetails.inputName}
            title={inputDetails.inputName}
            id={inputId}
            value={inputValue}
            onBlur={() => {
              onFocus = false;
              validateInput({ type: inputDetails.inputName, str: inputValue });
              formatSalary();
            }}
            onFocus={() => {
              onFocus = true;
              unFormatSalary();
            }}
            onChange={validateLength}
            maxLength={inputDetails.maxlength}
            required={!inputDetails.isNotRequired}
          />
        </>
      )}
    </div>
  );
};

export default ReviewSummary;
