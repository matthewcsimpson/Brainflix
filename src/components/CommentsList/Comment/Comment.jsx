// styles
import "../CommentsList.scss";

// imports.
import Avatar from "../../Avatar/Avatar";

//utilities
import { formatDate } from "../../../utilities/utilityFunctions";

function Comment({ comment }) {
  return (
    <div className="comments__comment">
      <div className="comments__avatar-wrapper comments__avatar-wrapper--comment">
        <Avatar userimg={comment.img} />
      </div>
      <div className="comments__comment-body">
        <div className="comments__detailswrapper">
          <p className="comments__label comments__label--name">
            {comment.name}
          </p>
          <p className="comments__label">{formatDate(comment.timestamp)}</p>
        </div>
        <p className="comments__text comments__text--body">{comment.comment}</p>
      </div>
    </div>
  );
}

export default Comment;
