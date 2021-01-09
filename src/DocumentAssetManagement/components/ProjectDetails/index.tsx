import * as React from "react";
import { useSelector } from "react-redux";

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
