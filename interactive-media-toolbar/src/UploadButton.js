import React from 'react';

const UploadButton = () => {
  const handleUpload = () => {
    alert('Image is being uploaded...');
    // Simulate an image upload process
    setTimeout(() => {
      alert('Image uploaded successfully!');
    }, 2000);
  };

  return <button onClick={handleUpload}>Upload Image</button>;
};

export default UploadButton;
