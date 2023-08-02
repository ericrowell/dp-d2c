import React, { useState } from 'react';

const ReviewSummary: React.FC = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [selectMode, setSelectMode] = useState('');

  const [dobDate, setDobDate] = useState('');

  const isEditAction = () => {
    setIsEdit(true);
  };

  const changeProfileDob = () => {
    setIsEdit(false);
  };

  return (
    <div>
      {/* display mode for review summary */}
      {!isEdit && selectMode !== 'DETAIL' && (
        <>
          {/* PD-1639: Pencil icons in editable fields on review summary */}
          <label className="view-form-title">
            Date of birth&nbsp;&nbsp;&nbsp;
            <span
              id="txtDobEdit"
              name="txtDobEdit"
              onClick={isEditAction}
              style={{
                display:
                  selectMode !== 'EDIT' &&
                  !isEdit &&
                  reqType !== 'PAS' &&
                  reqType !== 'PS' &&
                  reqType !== 'PER' &&
                  reqType !== 'PT' &&
                  reqType !== 'PC' &&
                  reqType !== 'PAT'
                    ? 'inline'
                    : 'none',
              }}
            >
              <img
                className="edit-pencil"
                src="assets/images/svg/edit.svg"
                alt="Edit"
              />
            </span>
          </label>
          <p className="view-form-input">{dobDate}</p>
        </>
      )}

      {/* edit mode for review summary */}
      {(isEdit || selectMode === 'DETAIL') && (
        <>
          <label
            className={`static-label ${
              !dobDate && !onFocus ? 'empty' : ''
            } ${(!dobDate && aboutYouForm.dob.$isOnBlur) ||
              (dobDate && aboutYouForm.dob.$invalid && aboutYouForm.dob.$isOnBlur)
              ? 'error'
              : ''} ${onFocus ? 'edit' : ''} ${
              onFocus || dobDate ? 'focus' : ''
            }`}
            htmlFor="dob"
          >
            Date of birth
          </label>
          {!dobDate && aboutYouForm.dob.$isOnBlur && (
            <span className="error-msg">Please enter a valid date of birth</span>
          )}
          <input
            type="text"
            datetime="dd/MM/yyyy"
            datetime-model="dd/MM/yyyy"
            name="dob"
            className={`form-control input-summary-style medium-input-style isBlurValidation ${
              aboutYouForm.dob.$isOnBlur && aboutYouForm.dob.$invalid
                ? 'error-input'
                : ''
            }`}
            value={dobDate}
            onChange={(e) => setDobDate(e.target.value)}
            onBlur={() => {
              setOnFocus(false);
              changeProfileDob();
            }}
            onFocus={() => setOnFocus(true)}
          />
        </>
      )}
    </div>
  );
};

export default ReviewSummary;
