import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDataRequest } from "../../../store/redux-toolkit";

const ProjectDetails = () => {
  const user = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDataRequest());
  }, []);

  return (
    <div>
      Hello from project details component -----{" "}
      {`${user.firstname} ${user.lastname} `}
    </div>
  );
};

export default ProjectDetails;
