import { ImagePath } from "@/Constant";

type NewUsersSocialProps = {
  name: string;
  date?: string;
};

const NewUsersSocial = ({
  name,
  date = new Date().toDateString(),
}: NewUsersSocialProps) => {
  return (
    <div className="new-users-social">
      <div className="d-flex">
        <img
          className="rounded-circle image-radius m-r-15"
          src={`${ImagePath}/user/1.jpg`}
          alt={name}
        />
        <div className="flex-grow-1">
          <h4 className="mb-0 f-w-700">{name}</h4>
          <p>{date}</p>
        </div>
        <span className="pull-right mt-0">{/*<MoreVertical />*/}</span>
      </div>
    </div>
  );
};

export default NewUsersSocial;
