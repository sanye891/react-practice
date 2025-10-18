function AppInput({className, value, type ,setState}) {
  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={(event)=>setState(event.target.value)}
    />
  );
}

export default AppInput;
