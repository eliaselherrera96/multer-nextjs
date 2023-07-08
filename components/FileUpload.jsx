"use client";
import React, { useState } from "react";
const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        console.log(response);
        if (response.ok) {
          console.log("Datei erfolgreich hochgeladen");
        } else {
          console.error("Fehler beim Hochladen der Datei ......");
        }
      } catch (error) {
        console.error("Fehler beim Hochladen der Datei", error);
      }
    }
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Hochladen</button>
    </div>
  );
};
export default FileUpload;
