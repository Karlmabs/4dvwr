import { AddFriend, ImagePath } from "@/Constant";
import { PeopleYouMayKnowProp } from "@/Types/SocialAppType";
import { Button, Card, CardBody, CardHeader, Col } from "reactstrap";
import { useEffect, useState } from "react";
import { Profile } from "@/Types/ProfileType";
import { getProfileById } from "@/services/apis";

const PeopleYouMayKnow: React.FC<PeopleYouMayKnowProp> = ({ heading, ids }) => {
  const [connections, setConnections] = useState<Profile[]>([]);

  useEffect(() => {
    if (ids) {
      setConnections([]);
      ids.map((id) => {
        getProfileById(id).then((res) => {
          setConnections((prev) => [...prev, res]);
        });
      });
    }
  }, [ids]);

  useEffect(() => {
    console.log(connections);
  }, [connections]);

  return (
    <Col sm="12">
      <Card>
        <CardHeader>
          <h5>{heading}</h5>
        </CardHeader>
        <CardBody className="avatar-showcase">
          <div className="pepole-knows">
            <ul className="flex-wrap">
              {connections.map((data, index) => (
                <li key={index}>
                  <div className="add-friend text-center">
                    <img
                      className="img-60 img-fluid rounded-circle"
                      alt="user"
                      src={`${ImagePath}/user/2.png`}
                    />
                    <span className="d-block f-w-600">{data.username}</span>
                    <Button color="primary" size="xs">
                      {AddFriend}
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PeopleYouMayKnow;
