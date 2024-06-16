import { Col, Row } from "reactstrap";
import HobbiesAndInterests from "./HobbiesAndInterests";
import PeopleYouMayKnow from "./PeopleYouMayKnow";
import { Profile } from "@/Types/ProfileType";

const AboutTab = ({ profile }: { profile: Profile }) => {
  return (
    <Row>
      <Col xl="3" lg="12" md="5" className="xl-40 box-col-4e">
        <div className="default-according style-1 faq-accordion job-accordion">
          {/*<LeftBar />*/}
        </div>
      </Col>
      <Col xl="6" lg="12" md="7" className="xl-60 box-col-8">
        <Row>
          <PeopleYouMayKnow heading="Connections" ids={profile?.connections} />
          <HobbiesAndInterests profile={profile} />
          {/*<EducationAndEmployment />
          <PeopleYouMayKnow heading={ViewProfile} />
          <ActivityLog />*/}
        </Row>
      </Col>
      <Col xl="3" className="xl-100 box-col-12">
        <div className="default-according style-1 faq-accordion job-accordion">
          <Row>{/*<RightBar />*/}</Row>
        </div>
      </Col>
    </Row>
  );
};

export default AboutTab;
