const { useState, useEffect } = require("react");

let useStorage = () => {
  let [data, setData] = useState(null);

  useEffect(() => {
    setData(localStorage.getItem("content"));
  }, []);

  if (data !== null) {
    localStorage.setItem("content", data);
    sessionStorage.setItem("content", data);
  }
  return [data, setData];
};

export default useStorage;
