import React from "react";
import Search from "./Search";
import Card from "./Card"
import Banner from "./Banner"

const Home=()=>{
    return (
        <>
        <div className="home_page" style={{marginBottom:"45px"}}>
        <Banner />
        <div className="bg-light">
        <div className="container">
            <div className="row">
            < Search />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />  
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />  
        </div>
        </div>
        </div>
        </div>
        
       </>
    )
}
export default Home;