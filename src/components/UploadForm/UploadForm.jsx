// Styles
import "./UploadForm.scss";

// Components
import SiteButton from "../SiteButton/SiteButton";

// Libraries
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Assets
import upload from "../../assets/images/Icons/upload.svg";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";

const REACT_APP_LOCAL_API = process.env.REACT_APP_LOCAL_API;

function UploadForm() {
  const nav = useNavigate();

  const clickHandler = () => {
    console.info("clicked!");
  };

  /**
   *Function to handle form submission.
   * @param {event} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.title.value || !e.target.description.value) {
      alert("You must fill out all fields!");
      return;
    }

    const newVideo = {
      title: e.target.title.value,
      description: e.target.description.value,
    };

    axios
      .post(`${REACT_APP_LOCAL_API}/videos`, newVideo)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.error(e);
      });

    alert(`Uploading ${newVideo.title}...`);
    nav("/");
  };

  return (
    <div className="uploadform">
      <h2 className="uploadform__heading">Upload Video</h2>
      <form className="uploadform__form" onSubmit={handleSubmit}>
        <div className="uploadform__flexwrapper">
          <div className="uploadform__imgwrapper">
            <label htmlFor="thumbnail" className="uploadform__label">
              Video thumbnail
            </label>
            <img
              className="uploadform__thumbnail-img"
              src={thumbnail}
              alt="thumbnail"
              name="thumbnail"
            />
          </div>
          <div className="uploadform__fieldswrapper">
            <label htmlFor="title" className="uploadform__label">
              Title your video
            </label>
            <input
              className="uploadform__textinput uploadform__textinput--title"
              name="title"
              type="text"
              placeholder="Add a title to your video"
            />
            <label htmlFor="description" className="uploadform__label">
              Add a video description
            </label>
            <input
              className="uploadform__textinput uploadform__textinput--desc"
              name="description"
              type="textarea"
              placeholder="Add a description to your video"
            />
          </div>
        </div>
        <div className="uploadform__buttonswrapper">
          <SiteButton
            icon={upload}
            buttonType={"submit"}
            buttonName="publish"
            classModifier="upload__button__ordering"
            clickHandler={clickHandler}
          />

          <div
            className="glbl__button cancel__button"
            onClick={() => {
              nav("/");
            }}
          >
            <span className="glbl__button__spacer"></span>
            <span className="glbl__button__text">cancel</span>
            <span className="glbl__button__spacer"></span>
          </div>

          {/* <SiteButton
            icon={upload}
            buttonType={"cancel"}
            buttonName="cancel"
            classModifier="cancel__button"
            clickHandler={clickHandler}
          /> */}
        </div>
      </form>
    </div>
  );
}

export default UploadForm;
