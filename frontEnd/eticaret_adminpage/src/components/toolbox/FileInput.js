import React from "react";

const FileInput = ({ name, label, onChange, placeHolder, value, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label className="custom-file-upload" htmlFom={name}>{label}</label>
      <div className="field">
        <input
          type="file"
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default FileInput;
