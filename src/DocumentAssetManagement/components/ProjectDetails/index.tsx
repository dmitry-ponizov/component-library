import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDataRequestActionCreator } from "../../../store/redux-og";

const ProjectDetails = (props: any) => {
  const user = useSelector((state: any) => state.user.user);

  useEffect(() => {
    props.dispatch(getUserDataRequestActionCreator());
  }, []);

  return (
    <div>
      Hello from project details component -----{" "}
      {`${user.firstname} ${user.lastname} `}
    </div>
  );
};

export default ProjectDetails;
