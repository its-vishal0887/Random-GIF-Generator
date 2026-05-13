import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../../hook/useGif";

const Tag = () => {
  const [tag, setTag] = useState("");
  function changeHandler(event) {
    setTag(event.target.value);
  }

  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <p className="text-2xl font-bold uppercase mt-2">Search meme</p>
      <input
        type="text"
        value={tag}
        onChange={changeHandler}
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] bg-white"
      />
      <h1 className="text-2xl mt-[15px] underline uppercase font-bold">
        A Random Gif
      </h1>
      {
      loading ? (<Spinner />) : (<img src={gif} width="450px" height="200px" alt="Random GIF" />)
      }
      <button
        type="button"
        onClick={fetchData} className="w-10/12 bg-white opacity-90 text-lg py-2 rounded-lg mb-[15px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
