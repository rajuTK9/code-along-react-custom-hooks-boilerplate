import useStorage from "../hooks/useStorage";

function Home() {
  let [userInput, updateInput] = useStorage("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => updateInput(e.target.value)}
        value={userInput ? userInput : ""}
      />
    </div>
  );
}

export default Home;
