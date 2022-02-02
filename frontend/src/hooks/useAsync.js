import { useState, useEffect } from "react";

const useAsync = (fn) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fn().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, [fn]);

  return [data, loading];
};

export default useAsync;
