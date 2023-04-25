import React, { useState ,useEffect} from "react";


  const  CharContext = React.createContext()

   const  CharContextProvider = ({children})=>{
   
    const [charData, setCharData] = useState(null);
    const [userInput, setUserinput] = useState("iron");
    const [loading, setLoading] = useState(false);
    const [isError,setIsError] = useState({status:false,msg:""})
  
    const URL = `https://gateway.marvel.com:443/v1/public/characters?apikey=aba90a03095974e16a64af57ca1267bd&ts=1&hash=fd1574608c662cda7628543b6ba01c05`;
  console.log(URL);
  
    const fetchChar = async (apiurl) => {
      setLoading(true);
      setIsError({status:false,msg:""})
      try {
        const res = await fetch(apiurl);
        const { data } = await res.json();
        console.log(data.results);
        setCharData(data?.results);
        setLoading(false);
      setIsError({status:false,msg:""})
     
      } catch (error) {
        console.log(error || "something went wrong");
        setLoading(false);
      setIsError({status:true,msg:error.message ||"something went wrong"})
      }
    };
  
    useEffect(() => {
      const correctUrl = `${URL}&nameStartsWith=${userInput}`
      
      fetchChar(correctUrl);
    }, [userInput]);
  
   
    return(
  <CharContext.Provider value={{loading,isError,charData,userInput, setUserinput}}> 
 
    {children}
    
  </CharContext.Provider>
  )
  }


  export {CharContext,CharContextProvider}
