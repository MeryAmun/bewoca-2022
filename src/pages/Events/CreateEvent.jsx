import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loader } from "../../assets";
import useValidator from "../../utils/CustomValidator";
import { MdPhotoCamera } from "react-icons/md";
import { db, storage } from "../../firebaseConfig";
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
    lastName: "",
    city: "",
    eventType: "",
    location: "",
    date: "",

  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [validator, showValidationMessage] = useValidator();
  const [progress, setProgress] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(null);

  const {
    title,
    lastName,
    city,
    eventType,
    location,
    date,
  } = friendData;

  useEffect(() => {
    const result = document.getElementById('phone__input').getElementsByClassName('special-label');
    result[0].style.display = 'none';
  }, []);

  const handlePhoneInputChange = (phone) => {
    setPhoneNumber(phone);
  };
 
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
      const storageRef = ref(storage, `/profile/${currentFile.name}`);
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
              addDoc(collection(db, "friends"), {
                addedOn: serverTimestamp(),
                profileUrl: url,
                title: title,
                lastName: lastName,
                city: city,
                eventType: eventType,
                location: location,
                date: date,
                phone: phoneNumber
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
    <div className="addFriend">
    <div className="friendData__create_post">

      {currentFile ? (
        <div class="progress">
        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: {progress}}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      ) : null}
      
      <form onSubmit={onHandleUpload} className="addFriend__form">
        <div className="addFriend__header">
          <h3 className="">ADD A FRIEND</h3>
        </div>
        <div className="image__uploadContainer">
          <label className="addFriend__label">Upload Photo</label>
         
            <input
              hidden
              accept="image/*"
              type="file"
              multiple
              onChange={onFileChangeHandler}
            />
            <MdPhotoCamera size={20} color="" />
        </div>
        <div className="preview__container">
        {previewImage && (
        <div className="my-2">
          <div className="addFriend__preview-image">
            <img
              className="rounded-circle"
              src={previewImage}
              alt=""
            />
          </div>
        </div>
      )}
        </div>

        <div className="addFriend__input">
          <label className="addFriend__label">First Name</label>
          <input
            type="text"
            name="title"
            value={friendData.title}
            onChange={handleInputChange}
            className=""
          />
          <label className="addFriend__error text-danger">
            {validator.message("title", friendData.title, "required|title", {
              messages: {
                required: "required",
              },
            })}
          </label>
        </div>

        <div className="addFriend__input">
          <label className="addFriend__label">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={friendData.lastName}
            onChange={handleInputChange}
            className=""
          />
          <label className="addFriend__error text-danger">
            {validator.message("lastName", friendData.lastName, "required|lastName", {
              messages: {
                required: "required",
              },
            })}
          </label>
        </div>
        <div className="addFriend__input">
          <label className="addFriend__label">City</label>
          <input
            type="text"
            name="city"
            value={friendData.city}
            onChange={handleInputChange}
            className=""
          />
          <label className="addFriend__error text-danger">
            {validator.message("city", friendData.city, "required|city", {
              messages: {
                required: "required",
              },
            })}
          </label>
        </div>
        <div className="addFriend__input">
          <label className="addFriend__label">eventType</label>
          <input
            type="text"
            name="eventType"
            value={friendData.eventType}
            onChange={handleInputChange}
            className=""
          />
          <label className="addFriend__error text-danger">
            {validator.message(
              "eventType",
              friendData.eventType,
              "required|eventType",
              {
                messages: {
                  required: "required",
                },
              }
            )}
          </label>
        </div>
        <div className="addFriend__input">
          <label className="addFriend__label">location</label>
          <input
            type="text"
            name="location"
            value={friendData.location}
            onChange={handleInputChange}
            className=""
          />
          <label className="addFriend__error text-danger">
            {validator.message(
              "location",
              friendData.location,
              "required|location",
              {
                messages: {
                  required: "required",
                },
              }
            )}
          </label>
        </div>
        <div className="addFriend__input">
          <label className="addFriend__label">date</label>
          <input
            type="date"
            name="date"
            value={friendData.date}
            onChange={handleInputChange}
            className=""
          />
          <label className="addFriend__error text-danger">
            {validator.message(
              "date",
              friendData.date,
              "required|date",
              {
                messages: {
                  required: "required",
                },
              }
            )}
          </label>
        </div>

        <div className="addFriend__input" id="phone__input">
          <label className="addFriend__label">Phone Number (WhatsApp)</label>
          <PhoneInput
            type="text"
            country={"us"}
            enableAreaCodes={true}
            // onlyCountries={['us','de','ro']}
            // areaCodes={{us: ['999']}}
            inputProps={{
              name: "phoneNumber",
              country: "us",
              required: true,
              autoFocus: true,
            }}
            // containerStyle={{
            //   Padding: "5px",
            // }}
            inputStyle={{
              width: "300px",
              height: "42px",
              borderRadius: "10px",
              outline: "none",
              margin: "10px 0",
              padding: "10px 15px",
              backgroundColor: "#fff",
              border: "none",
            }}
            regions={["north-america", "africa", "europe"]}
            value={phoneNumber}
            onChange={handlePhoneInputChange}
            // onChange={props.inputChange}
            // value={props.data.phonNumber}
            isValid={(value, country) => {
              if (value.match(/12345/)) {
                return "Invalid value: " + value + ", " + country.name;
              } else if (value.match(/1234/)) {
                return false;
              } else {
                return true;
              }
            }}
          />
          <label className="error text-danger">
            {validator.message(
              "phoneNumber",
              phoneNumber,
              "required|phoneNumber",
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
        <button type="submit" className="addFriend__submit">
          ADD FRIEND
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