import { useEffect, useState } from "react";

function useAdvice() {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchAdvice() {
    setIsLoading(true);
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setIsLoading(false);
    setAdvice(data.slip.advice);
  }
  useEffect(() => {
    fetchAdvice();
  }, []);

  return { advice, isLoading, fetchAdvice };
}

export default useAdvice;
