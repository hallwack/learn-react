import React from "react";
import ChildrenComponents from "./ChildrenComponents";

const ParentComponents = () => {
  return (
    <div>
      <ChildrenComponents name="Raihan Adam" />
      <ChildrenComponents name="Adam" />
    </div>
  );
};

export default ParentComponents;
