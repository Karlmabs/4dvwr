import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { MoreVertical } from "react-feather";
import { Profile } from "@/Types/ProfileType";
import { useEffect, useState } from "react";

const HobbiesAndInterests = ({ profile }: { profile: Profile }) => {
  const [profileData, setProfileData] = useState<string[]>([]);
  const exceptions = ["id", "password"]; // Add the properties you want to exclude here

  const displayProperties = (obj: any, exceptions: string[]) => {
    let data: string[] = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && !exceptions.includes(key)) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
          data = [...data, ...displayProperties(obj[key], exceptions)];
        } else {
          data.push(`${key}: ${obj[key]}`);
        }
      }
    }
    return data;
  };

  useEffect(() => {
    setProfileData(displayProperties(profile, exceptions));
  }, [profile]);

  return (
    <Col sm="12">
      <Card>
        <CardHeader className="social-header">
          <h5>
            About Me
            <span className="pull-right">
              <MoreVertical />
            </span>
          </h5>
        </CardHeader>
        <CardBody>
          {profileData.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default HobbiesAndInterests;
