import React, { useState } from 'react';

const UploadReview: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [summaryEdit, setSummaryEdit] = useState('EDIT');
  const [uploadFailed, setUploadFailed] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [itemList, setItemList] = useState([]);

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleEdit = () => {
    setSummaryEdit('REVIEW');
  };

  const handleUploadImage = (item, index) => {
    // Handle upload logic here
  };

  const handleDeleteImage = (item, index) => {
    // Handle delete logic here
  };

  return (
    <div id="upload-review" className="upload-box">
      <div className={`common-box-header ${isCollapsed ? 'isCollapse' : ''}`}>
        <div className="row">
          <div className="col-xs-10">
            <h1>Upload your documents</h1>
          </div>
          <div className="col-xs-2">
            <a href="#" onClick={handleCollapseToggle}>
              <span
                className={`pull-right collapse-icon glyphicon ${
                  isCollapsed ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'
                }`}
              ></span>
            </a>
          </div>
        </div>
      </div>
      <div className="common-box-content upload-box-content" style={{ display: summaryEdit === 'EDIT' ? 'block' : 'none' }}>
        <div className="common-main-content">
          <div className="common-sub-box">
            {/* Rest of the code */}
          </div>
        </div>
      </div>
      <div className="common-box-content" style={{ display: summaryEdit === 'REVIEW' ? 'block' : 'none' }}>
        <div className="common-main-content">
          <div className="common-sub-box">
            <div className="content-desc" onClick={handleEdit}>
              {/* Rest of the code */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadReview;
