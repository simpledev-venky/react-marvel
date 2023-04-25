import React, { useState, useEffect, useContext } from "react";
import {Link} from "react-router-dom"
import { CharContext } from "./Charcontext";
import  logo from "./assets/ironman.svg" 

const Marvel = () => {

  const {loading,isError,charData,userInput, setUserinput} = useContext(CharContext)
 
  return (
    <>
    {/* to access environment variables */}
    {/* <h2>{import.meta.env.VITE_URL}</h2> */}
    <header>
      <h2>
      Wandel's 
      <span>Marvel</span>
       Destination
      </h2>
<img src= {logo} alt="marvel" className="logo" />
    </header>
      <h2>{loading && "loading...."}</h2>
      <h2>{isError.status && isError.msg}</h2>
      <div className="input">
      <input
        type="text"
        onChange={(e) => {
          setUserinput(e.target.value);
        }}
        value={userInput}
        placeholder="search your fav Marvel c
        har...."
      />
      </div>
      
      <ul className="char-container">
      {!loading && !isError.status && charData &&
        charData.map((eachChar) => {
          const { name,id,thumbnail } = eachChar;
          return (
            <li key={id} className="each-char">
            <Link to={`/${id}`}>

              <img 
              src={`${thumbnail.path}.${thumbnail.extension}`} 
              alt={name} />
              <h2>{name}</h2>
            </Link>
            </li>
          );
        })}
      </ul>
      
    </>
  );
};
export default Marvel
