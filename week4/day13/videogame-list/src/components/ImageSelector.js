import React, { useRef, useState} from "react";

export default function ImageSelector({ title, onFileChange }) {
  //persist values between renders
  //can be used to store a mutable value that does not causea a re-render
  const inputRef = useRef(null);

  const [fileContent, setFileContent] = useState("");

  function onFileSelected(e) {
    let file = null;
    if (e.target.files.length) {
      file = e.target.files[0];

      const fileReader = new FileReader();

      fileReader.onload = (res) => {
        setFileContent(res.target.result);
      };
      fileReader.readAsDataUrl(file);
    }

    onFileChange(file)
  }

  return (
    <div className="mb-3">
      <label className="form-label">{title}</label>
      <input ref={inputRef} type="file" />
      {
      fileContent ? (
        <div>
          <img
            style={{
              alt: "Movie Image",
              width: '200px',
              height: '250px',
              objectFit: 'cover'
            }}
            src={fileContent}
            alt="Movie Image"
          />
        </div>
      ) : (
        null
      )}
  
      <button
        className="btn btn-success"
        type="button"
        onClick={() => {
          console.log(inputRef.current);
          inputRef.current.click();
        }}
      >
        Select Image
      </button>
    </div>
  );
}  