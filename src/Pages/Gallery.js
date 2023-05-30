import React, { useState } from "react";

const Flowers = [
    {Name:"BlueRose",Url:"./blueRose.jpg",Alt:"Blue Rose Flower", Description:"As the general rose is associated with love, the blue rose can be commonly associated with unrequited love or true love. Possibly, true love that sadly only goes one way. Blue roses with a lighter hue symbolize sensitivity and feelings. Although, they do not represent romantic feelings."},
    {Name:"RedRose", Url:"./redRose.jpg", Alt:"Red Rose Flower", Description:"Most of us are familiar with what the red rose means, having been used across cultures to represent love and romance for centuries. The meaning of red roses is universally understood to be love and passion."},
    {Name:"WhiteRose", Url:"./whiteRose.jpg", Alt:"Red Rose Flower", Description:"White roses symbolize loyalty, purity, and innocence.Since they represent these ideas, the white rose has also become the most popular flower to be seen at weddings,says Poulson. According to Poulson, they can also symbolize eternal love, a new start, and fresh beginnings."}
]



export default function Gallery(){
    const [index, setIndex]=useState(0);

    function Next(){
        setIndex(index+1);
        
    }
    function Previous(){
        setIndex(index-1);}
   
    return(
        <div>
        <h1>This is the Gallery</h1><br/><br/>
        <button onClick={Previous} name="Previous flower">Previous Flower</button>
        <button onClick={Next} name="next flower">Next Flower</button>

        <h2>{Flowers[index].Name}</h2><br/>
        <img src={Flowers[index].Url} alt={Flowers[index].Alt}/>
        <p>{Flowers[index].Description}</p>
        </div>

    );
}