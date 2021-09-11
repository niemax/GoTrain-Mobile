import { useEffect, useState } from 'react';

export const useAloitusFetch = (url) => {
  const [responseData, setResponseData] = useState({});
  const [error, setError] = useState(null);
  const [dataLength, setDataLength] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        if (!signal.aborted) {
          setResponseData(json[0].liikkeet);
          setDataLength(json[0].liikkeet.length);
          console.log(dataLength);
        }
      } catch (e) {
        if (!signal.aborted) {
          setError(e);
        }
      } finally {
        if (!signal.aborted) {
          setTimeout(() => {
            setLoading(false);
          }, 6000);
        }
      }
    };
    doFetch();
    return () => {
      abortController.abort();
    };
  }, [url]);
  return { responseData, error, loading };
};

export default useAloitusFetch;
