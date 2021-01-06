import * as React from "react";
import { useSelector } from "react-redux";

const ProjectDetails = () => {
  const error = useSelector((state: any) => state.error);
  console.log(error);
  return <div>Hello from project details component ----- {error}</div>;
};

export default ProjectDetails;
