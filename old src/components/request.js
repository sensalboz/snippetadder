import { useEffect, useState } from "react";
import axios from "axios";

const useData = (resourceName) => {
  const [resources, setResources] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resourceName}`
    );
    setResources(response.data);
  };

  useEffect(() => {
    fetchData(resourceName);
  }, [resourceName]);

  return resources;
};

export default useData;
