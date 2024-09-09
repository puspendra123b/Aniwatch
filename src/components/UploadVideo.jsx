import React, { useState } from 'react';

const UploadVideo = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileId, setFileId] = useState(null);
  const [title , seTitle] =useState()

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first");
      return;
    }

    const formdata = new FormData();
    formdata.append("video", selectedFile);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    try {
      const response = await fetch("http://localhost:3000/upload", requestOptions);
      const result = await response.json();
      if (response.ok) {
        console.log(result);
        setFileId(result.fileId); // Assuming the server returns fileId
      } else {
        console.error("Error uploading file:", result);
        alert("Error uploading file: " + result.message);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file: " + error.message);
    }
  };

  return (
    <div style={{display: 'flex',
      flexDirection : 'column'
    }}>
      <h1>Upload Video</h1>
      <label htmlFor="">Title</label>
      <input style={style.inp} onChange={(e)=>{
        seTitle(e.target.value)
      }} type="text" placeholder='The title of episode'  />
      <label htmlFor="">Collection Name</label>
      <input style={style.inp} type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

const style = {
  inp : {
    marginBottom : '10px'
  }
}


export default UploadVideo;
