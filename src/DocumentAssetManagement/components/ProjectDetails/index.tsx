import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDataRequestActionCreator } from "../../../store/redux-og";

const ProjectDetails = () => {
  const user = useSelector((state: any) => state.user.user);

  return (
    <div>
      Hello from project details component -----{" "}
      {`${user.firstname} ${user.lastname} `}
    </div>
  );
};

export default ProjectDetails;
