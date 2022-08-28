import "./UploadForm.scss";
import Button from "../Button/Button";

import upload from "../../assets/images/Icons/upload.svg";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";

function UploadForm() {
  return (
    <div className="uploadform">
      <h2 className="uploadform__heading">Upload Video</h2>
      <form className="uploadform__form">
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
            <label htmlFor="desc" className="uploadform__label">
              Add a video description
            </label>
            <input
              className="uploadform__textinput uploadform__textinput--desc"
              name="title"
              type="textarea"
              placeholder="Add a description to your video"
            />
          </div>
        </div>
        <div className="uploadform__buttonswrapper">
          <Button
            icon={upload}
            buttonName="publish"
            classModifier="upload__button__ordering"
          />
          <Button
            icon={upload}
            buttonName="cancel"
            classModifier="cancel__button"
          />
        </div>
      </form>
    </div>
  );
}

export default UploadForm;