import { Nav, NavItem, NavLink } from "reactstrap";
import { Fragment, useState } from "react";
import { SocialAppCallBackType } from "@/Types/SocialAppType";
import { SocialNavData } from "@/Data/Application/SocialApp";
import { useAppSelector } from "@/Redux/Hooks";

const NavBarMain: React.FC<SocialAppCallBackType> = ({ callback, name }) => {
  const [activeTab, setActiveTab] = useState(1);
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const tabHandler = (id: number) => {
    setActiveTab(id);
    callback(id);
  };

  return (
    <Nav tabs className="border-tab tabs-scoial">
      {SocialNavData.map((data, index) => (
        <Fragment key={index}>
          {data.userProfile ? (
            <NavItem>
              <div className="user-designation" />
              <div className="title">
                <a href={`/${i18LangStatus}/app/social_app`}>{name}</a>
              </div>
              <div className="desc mt-2">general manager</div>
            </NavItem>
          ) : (
            <NavItem className="nav">
              <NavLink
                className={activeTab === data.id ? "active" : ""}
                onClick={() => tabHandler(data.id)}
              >
                {data.tittle}
              </NavLink>
            </NavItem>
          )}
        </Fragment>
      ))}
    </Nav>
  );
};

export default NavBarMain;
