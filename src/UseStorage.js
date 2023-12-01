import { useState } from "react";

function useStorage(key) {
 const setStorage = (data)=>{
    localStorage.setItem(key,data)
 }
 const value = localStorage.getItem(key)

 return [value, setStorage]
 
 }


export default useStorage