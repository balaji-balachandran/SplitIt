import React from 'react';
import { useDropzone } from 'react-dropzone';
import "./accept.css";
import pic from "./upload.png"

function Accept(props) {
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: {
      'text/csv': []
    }
  });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p class="instructions">Drag and drop some files here, or click to select files</p>
        <p class ="instructions">(Only *.csv files will be accepted)</p>
        <img id="upload" src={pic} alt="Dropzone image"/>
      </div>
      <aside>
        <p id="acceptfiles">Accepted Files</p>
        <ul>{acceptedFileItems}</ul>
        <p id="rejectfiles">Rejected Files</p>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  );
}

export default Accept;