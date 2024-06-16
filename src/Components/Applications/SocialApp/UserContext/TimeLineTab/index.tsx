import { Col, Row } from "reactstrap";
import PostComponent from "./NewUserClass";
import { useEffect, useState } from "react";
import { getAllPosts } from "@/services/apis";
import { Post } from "@/Types/PostType";

const TimelineTab = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <Row>
      <Col md="5" xl="3" lg="12" className="box-col-4 xl-40">
        <div className="default-according style-1 faq-accordion">
          {/*<LeftBar />*/}
        </div>
      </Col>
      <Col md="7" xl="6" lg="12" className="box-col-8e xl-60">
        <Row>
          {posts.map((post) => (
            <PostComponent key={post?.id} post={post} />
          ))}
        </Row>
      </Col>
      <Col xl="3" className="box-col-12 xl-100">
        <div className="default-according style-1 faq-accordion job-accordion">
          {/*<RightBar />*/}
        </div>
      </Col>
    </Row>
  );
};

export default TimelineTab;
