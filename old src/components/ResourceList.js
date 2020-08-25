import React from "react";

import useData from "./request";

const ResourceList = ({ resourceName }) => {
  const resources = useData(resourceName);
  return (
    <ul>
      {resources.map((resource) => (
        <li key={resource.id}>{resource.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
