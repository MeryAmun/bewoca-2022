import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loader } from "../../assets";
import useValidator from "../../utils/CustomValidator";
import { MdOutlineDesktopAccessDisabled, MdPhotoCamera } from "react-icons/md";
import { auth, db, storage } from "../../firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import PhoneInput from "react-phone-input-2";
import './styles.css'

const CreateEvent = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [currentFile, setCurrentFile] = useState(null);
  const [friendData, setFriendData] = useState({
    title: "",
    fullName: "",
    category: "",
    details:"",


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
    details
  } = friendData;


 
  const onFileChangeHandler = (e) => {
    setCurrentFile(e.target.files[0]);
    if (e.target.files.length !== 0) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onHandleUpload = (e) => {
    setLoading(true);
    e.preventDefault();
    if (!currentFile) {
      setError("Please choose a file first!");
    } else {
      setError("");
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
              // setProgress(0);
              // setPreviewImage(null);
              // setCurrentFile(null);

              .then(() => {
                setMessage("upload success");
              })
              .catch((err) => console.log(err));
            if (message === "upload success" && validator.allValid()) {
              setLoading(true);
              addDoc(collection(db, `/events/${auth.currentUser.uid}`), {
                addedOn: serverTimestamp(),
                profileUrl: url,
                title: title,
                fullName: fullName,
                category: category,
                details:details
              });
              setProgress(0);
              setPreviewImage(null);
              setLoading(false);
              navigate("/");
            } else {
              showValidationMessage(true);
              setLoading(false);
            }
          });
        }
      )
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFriendData({ ...friendData, [e.target.name]: value });
  };
  return (
    <div className="createPost">
    <div className="friendData__create_post">

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
            value={friendData.fullName}
            onChange={handleInputChange}
            className=""
          />
          <label className="createPost__error text-danger">
            {validator.message("fullName", friendData.fullName, "required|fullName", {
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
            value={friendData.title}
            onChange={handleInputChange}
            className=""
          />
          <label className="createPost__error text-danger">
            {validator.message("title", friendData.title, "required|title", {
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
            value={friendData.category}
            onChange={handleInputChange}
            className=""
          >
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="partnership">Partnerships</option>
            {/* <option value="education">Education</option> */}
          </select>
          <label className="createPost__error text-danger">
            {validator.message("category", friendData.category, "required|category", {
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
            value={friendData.details}
            onChange={handleInputChange}
            className=""
            cols="40" rows="10"
          
          >
            </textarea>
          <label className="createPost__error text-danger">
            {validator.message(
              "eventType",
              friendData.details,
              "required|details",
              {
                messages: {
                  required: "required",
                },
              }
            )}
          </label>
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