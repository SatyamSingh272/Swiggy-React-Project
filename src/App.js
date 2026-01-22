import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Home from "./components/Home";
import Restaurant from "./components/Restaurant";
import { BrowserRouter, Routes, Route } from 'react-router';
import RestaurantMenu from "./components/RestaurantMenu";


function App(){

    return(
       <>
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
        <Route path="/city/pune/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        </Routes>
       </BrowserRouter>
       
        
       </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);