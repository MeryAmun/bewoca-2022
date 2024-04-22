import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loader } from "../../assets";
import useValidator from "../../utils/CustomValidator";
import {  MdPhotoCamera } from "react-icons/md";
import { auth, db, storage } from "../../firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
//import PhoneInput from "react-phone-input-2";
import './styles.css'

const CreateEvent = () => {
  // const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [currentFile, setCurrentFile] = useState(null);
  const [eventData, setEventData] = useState({
    title: "",
    fullName: "",
    category: "",
    details:"",
    date:""


  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [validator, showValidationMessage] = useValidator();
  const [progress, setProgress] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(null);

  const {
    title,
    fullName,
    category,
    details,
    date
  } = eventData;


 
  const onFileChangeHandler = (e) => {
    setCurrentFile(e.target.files[0]);
    if (e.target.files.length !== 0) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEventData({ ...eventData, [e.target.name]: value });
  };
  const onHandleUpload = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!currentFile) {
      setError("Please choose a file first!");
    } else {
      const storageRef = ref(storage, `/posts/${currentFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, currentFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(percent);
        },
        (err) => {
          const errorMessage = err.message;
          setError(errorMessage);
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUrl(url)
            setMessage("upload success")
             //setProgress(0);
             //setPreviewImage(null);
            // setCurrentFile(null)
         
          })
          // .catch((err) => console.log(err));
          console.log(message)
          console.log(url)
          if (message === "upload success" && validator.allValid()) {
            addDoc(collection(db,`/events`), {
              postedOn: serverTimestamp(),
              imageUrl: url,
              title: title,
              fullName: fullName,
              category: category,
              details:details,
              dateOfEvent:date
            });
            setProgress(0);
            setPreviewImage(null);
            setLoading(false);
            navigate("/");
          } else {
            showValidationMessage(true);
            setLoading(false);
          }
        }
      )
    }
  };


  return (
    <div className="createPost">
    <div className="eventData__create_post">

      {currentFile ? (
        <div class="progress">
        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: {progress}}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      ) : null}
      
      <form onSubmit={onHandleUpload} className="createPost__form  bg-secondary">
        <div className="createPost__header">
          <h3 className="">CREATE A POST</h3>
        </div>
        <div className="image__uploadContainer">
          {/* <label className="createPost__label">Upload Photo</label> */}
          <MdPhotoCamera size={20} color="" />
            <input
              
              accept="image/*"
              type="file"
              // multiple
              onChange={onFileChangeHandler}
            />
            {/* </MdPhotoCamera> */}
        </div>
        <div className="preview__container">
        {previewImage && (
        <div className="my-2">
          <div className="createPost__preview-image">
            <img
              className="rounded-circle"
              src={previewImage}
              alt=""
            />
          </div>
        </div>
      )}
        </div>
        <div className="createPost__input">
          <label className="createPost__label">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={eventData.fullName}
            onChange={handleInputChange}
            className=""
          />
          <label className="createPost__error text-danger">
            {validator.message("fullName", eventData.fullName, "required|fullName", {
              messages: {
                required: "required",
              },
            })}
          </label>
        </div>
        <div className="createPost__input">
          <label className="createPost__label">Title</label>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleInputChange}
            className=""
          />
          <label className="createPost__error text-danger">
            {validator.message("title", eventData.title, "required|title", {
              messages: {
                required: "required",
              },
            })}
          </label>
        </div>

        <div className="createPost__input">
          <label className="createPost__label">Category</label>
          <select
            type="text"
            name="category"
            value={eventData.category}
            onChange={handleInputChange}
            className=""
          >
            <option>Select Category</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="partnership">Partnerships</option>
            {/* <option value="education">Education</option> */}
          </select>
          <label className="createPost__error text-danger">
            {validator.message("category", eventData.category, "required|category", {
              messages: {
                required: "required",
              },
            })}
          </label>
        </div>
        <div className="createPost__input">
          <label className="createPost__label">Details</label>
          <textarea
            type="text"
            name="details"
            value={eventData.details}
            onChange={handleInputChange}
            className=""
            cols="40" rows="10"
          
          >
            </textarea>
          <label className="createPost__error text-danger">
            {validator.message(
              "eventType",
              eventData.details,
              "required|details",
              {
                messages: {
                  required: "required",
                },
              }
            )}
          </label>
        </div>
        <div className="createPost__input">
          <label className="createPost__label">Date (If Event already Happened)</label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleInputChange}
            className=""
          />
        </div>
        <div className="imageUpload__error">
          <span className="text-danger">{error}</span>
        </div>
        {loading && <img src={loader} alt="" className="loading__image" />}
        <button type="submit" className="createPost__submit">
          CREATE
        </button>
        {error && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          </div>
        )}
      </form>
    </div>
  </div>
  )
}

export default CreateEvent