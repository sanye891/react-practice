import useAdvice from "./useAdvice";


function GetAdvice() {
    const {advice, isLoading, fetchAdvice} = useAdvice();

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {isLoading ? "Loading..." : advice}
      </div>
      <button onClick={fetchAdvice}>refresh</button>
    </>
  );
}

export default GetAdvice;
