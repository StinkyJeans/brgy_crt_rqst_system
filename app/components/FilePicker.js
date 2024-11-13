import React from 'react';

const FilePicker = ({ onChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onChange(file); 
  };

  return (
    <div>
      <label htmlFor="file">Choose File:</label>
      <input type="file" id="file" name="file" onChange={handleFileChange} />
    </div>
  );
};

export default FilePicker;
