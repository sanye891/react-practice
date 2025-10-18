function AppInput({ value, setState }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => setState(e.target.value)}
    />
  );
}

export default AppInput;
