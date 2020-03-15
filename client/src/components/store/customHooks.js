import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useFetch = url => {
  const [state, setState] = useState({ data: null })
  console.log(useLocation)  
  let location = useLocation();
  useEffect(() => {
    fetch(url)
      .then(x => x.json())
      .then(y => {
        setState({ data: y })
      });
  }, [location])
  return state;

}