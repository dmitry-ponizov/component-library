import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDataRequestActionCreator } from "../../../store/redux-og";

const ProjectDetails = () => {
  const user = useSelector((state: any) => state.user.user);
  React.useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <div>
      Hello from project details component -----{" "}
      {`${user.firstname} ${user.lastname} `}
    </div>
  );
};

export default ProjectDetails;
