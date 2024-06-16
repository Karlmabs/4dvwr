import { ImagePath } from "@/Constant";
import { Comment } from "@/Types/PostType";

const SingleComment = ({ authorName, content, creationDate }: Comment) => {
  return (
    <div className="your-msg">
      <div className="d-flex">
        <img
          className="img-50 img-fluid m-r-20 rounded-circle"
          alt="user"
          src={`${ImagePath}/user/1.jpg`}
        />
        <div className="flex-grow-1">
          <span className="f-w-600">
            {authorName}
            <span>
              1 Year Ago <i className="fa fa-reply font-primary" />
            </span>
          </span>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
