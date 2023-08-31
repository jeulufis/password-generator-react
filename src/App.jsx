import { useState } from "react";
import "./App.css";
import { PasswordService } from "./services/PasswordService";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [state, setState] = useState({
    generatedPasswords: "",
    passwordLength: 5,
    symbols: false,
    numbers: false,
    lower: false,
    upper: true,
  });

  const updatedInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const updatedChecked = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordObj = PasswordService.getPasswordObj(state);
    const thePassword = PasswordService.generatePassword(
      passwordObj,
      state.passwordLength
    );
    setState({ ...state, generatedPasswords: thePassword });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="lg:w-2/6 px-5">
          <h1 className="text-xl text-center font-bold text-[#696676]">
            Password Generator
          </h1>
          <div className="bg-[#24232b] py-5 w-full rounded-sm mt-5">
            <div className="px-5 flex justify-between items-center">
              <input
                type="text"
                id="first_name"
                className="bg-[#24232b] border text-2xl border-none focus w-2/3 outline-none"
                placeholder="P4$5W0rD"
                value={state.generatedPasswords}
                onChange={updatedInput}
                required
              />
              <CopyToClipboard text={state.generatedPasswords}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-[#96e2ac] hover:text-white cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                  />
                </svg>
              </CopyToClipboard>
            </div>
          </div>

          <section className="bg-[#24232b] py-5 w-full rounded-sm mt-5 px-5">
            <div className="flex justify-between items-center gap-5">
              <div className="flex justify-between w-full items-center">
                <p className="text-[#e2e1ea] text">Character Length</p>
                <p className="text-[#96e2ac] font-bold text-2xl">
                  {state.passwordLength}
                </p>
              </div>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
              <input
                type="range"
                className="w-full accent-[#e6e5e9] border-none outline-none transparent h-[4px] cursor-pointer
                appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
                name="passwordLength"
                min={0}
                max={16}
                onChange={updatedInput}
                value={state.passwordLength}
              />
              <div className="flex gap-5 mt-4 items-center">
                <input
                  type="checkbox"
                  id="uppercaseLetters"
                  className="h-4 w-4"
                  name="upper"
                  onChange={updatedChecked}
                  checked={state.upper}
                  value={state.upper}
                />
                <label htmlFor="uppercaseLetters">
                  Include Uppercase Letters
                </label>
              </div>
              <div className="flex gap-5 items-center mt-1">
                <input
                  type="checkbox"
                  id="lowercaseLetters"
                  name="lower"
                  onChange={updatedChecked}
                  value={state.updatedChecked}
                  className=" h-4 w-4"
                />
                <label htmlFor="lowercaseLetters">
                  Include Lowercase Letters
                </label>
              </div>
              <div className="flex gap-5 items-center mt-1">
                <input
                  type="checkbox"
                  id="numbers"
                  className="h-4 w-4"
                  name="numbers"
                  onChange={updatedChecked}
                  value={state.numbers}
                />
                <label htmlFor="numbers">Include Numbers</label>
              </div>
              <div className="flex gap-5 items-center mt-1">
                <input
                  type="checkbox"
                  id="symbols"
                  className="h-4 w-4"
                  name="symbols"
                  onChange={updatedChecked}
                  value={state.symbols}
                />
                <label htmlFor="symbols">Include Symbols</label>
              </div>
              <button className="uppercase flex justify-center hover:bg-[#24232b] outline outline-offset-[1px]  hover:text-white outline-[1px] outline-green-200 rounded items-center gap-5 text-center w-full py-3 bg-[#96e2ac] text-black font-bold mt-5 text-lg">
                Generate
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
