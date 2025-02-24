import Spinner from "./Spinner";
// import { useState } from "react";
import axios from 'axios';
import React, { useState } from "react";
import useGif from "../hooks/useGif";
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const[tag,settag]=useState("car");
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // //ahiya api fetch karyu tena mate use eefect no concept use karyu and aena mate async and await use karyu and axios ae promise jevu j che 
  // async function fetchData() {
  //   setLoading(true)
  //   // setLoading(true)--load thase
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  //   const { data } = await axios.get(url);
  //   // aa path console ma output print kari ne find karyo 
  //   const imageSource = data.data.images.downsized_la rge.url;
  //   setGif(imageSource);
  //   console.log(imageSource);
  //   // setLoading(false);--loaading bandh thase jayare gif generate thai jasse pachi
  //   setLoading(false);
  //   // console.log("API Key:", API_KEY);
  //   //pela api key set kari pachi under url set karyu and api ne useeefect thi call karai

  // }

  // function clickhandler(){

  //   fetchData();
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif(tag);


  // function changehandler(event){
  //   settag(event.target.value);
  // }
  return (
    <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className=" mt-[15px] text-3xl uppercase underline font-bold"> Random {tag} Gif</h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}


      <input 
       className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
      onChange={(event)=>settag(event.target.value)}
      value={tag} 
      />
      <button 
        onClick={()=>fetchData()}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;


