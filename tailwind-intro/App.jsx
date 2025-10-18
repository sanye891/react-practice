import { useEffect, useState } from "react";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const input_style = 'mt-1 border-solid border-2 rounded-lg'
    const [usernameClass,setUsernameClass] = useState('border-red-300')
    const [passwordClass,setPasswordClass] = useState('border-red-300')

    useEffect(() => {
        if (username.length > 0 && username.length < 10) {
            setUsernameClass('border-green-500')
        }
        if (password.length > 0 && password.length < 10) {
            setPasswordClass('border-green-500')
        }
    }, [username, password])
  return (
    <>
      <nav className="text-4xl text-center">Tailwind CSS Intro</nav>
      <hr />
      <main className="text-center text-3xl">
        <label>
          username:
          <input type="text" className={`${input_style} ${usernameClass}`} onChange={(e) => setUsername(e.target.value)} value={username}/>
        </label>
        <br />
        <label>
          password:
          <input type="number" className={`${input_style} ${passwordClass}`} onChange={(e) => setPassword(e.target.value)} value={password} />
        </label>
      </main>
    </>
  );
}

export default App;
