/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function WrongPageHandler() {
  const navigate = useNavigate();
  navigate("/notfound");

  useEffect(() => {
    navigate("/notfound");
  }, []);

  return <div>Wrong page</div>;
}
