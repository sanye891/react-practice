import { useEffect, useState } from "react";

function Time() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div style={{ textAlign: "center" }}>{currentTime}</div>;
}

export default Time;
