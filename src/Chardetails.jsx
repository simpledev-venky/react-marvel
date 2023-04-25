import React ,{useContext}from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { CharContext } from "./Charcontext";


const Chardetails = () => {
    const { id } = useParams();
    const nav = useNavigate();

const {loading,isError,charData,userInput, setUserinput} = useContext(CharContext)

// console.log(charData);
const obj = charData.find(eachChar=>{
return eachChar.id == id
})
const { name,thumbnail,description } = obj;

// console.log(obj);

  return (
    <>
    {
    charData && (
        <div className='container'>
          
            <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name}
            className='char-img'
            />
         <h2>{name}</h2>
         <h2 className='desc'>{description}</h2>
         <button
    className="home-btn"
    onClick={() => {
      nav("/");
    }} > back to home
    </button>

        </div>
        )
    }

    

    </>

  )
}

export default Chardetails