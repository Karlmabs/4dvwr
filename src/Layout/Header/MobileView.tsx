import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { Col } from "reactstrap";

export const MobileView = () => {
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <Col className="header-logo-wrapper col-auto">
      <div className="logo-wrapper">
        <Link href={`/${i18LangStatus}/sample_page`}>
          <img
            className="img-fluid for-light"
            src={`${ImagePath}/logo/icons8-linkedin-48.png`}
            alt=""
          />
          <img
            className="img-fluid for-dark"
            src={`${ImagePath}/logo/icons8-linkedin-48.png`}
            alt=""
          />
        </Link>
      </div>
    </Col>
  );
};
