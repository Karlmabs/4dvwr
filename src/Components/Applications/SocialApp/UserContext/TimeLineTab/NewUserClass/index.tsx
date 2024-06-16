import { Card, CardBody, Col } from "reactstrap";
import CommentsBox from "./CommentsBox";
import LikeContent from "./LikeContent";
import NewUsersSocial from "./NewUsersSocial";
import SocialChat from "./SocialChat";
import { Post } from "@/Types/PostType";

type PostComponentProp = {
  post: Post;
};

const PostComponent = ({ post }: PostComponentProp) => {
  return (
    <Col sm="12">
      <Card>
        <CardBody>
          <NewUsersSocial
            name={post.authorName}
            date={new Date(post.creationDate).toDateString()}
          />
          <div className="timeline-content">
            <p>{post.content}</p>
            <LikeContent />
            <SocialChat />
            <CommentsBox />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PostComponent;
