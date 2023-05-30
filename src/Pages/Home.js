import React from "react";
const structureList =
    {
        Name : 'Red Rose Flower',
        imgUrl : '/redRose.jpg',
        Description: 'Red Roses. Most of us are familiar with what the red rose means having been used across cultures to represent love and romance for centuries. The meaning of red roses is universally understood to be love and passion.',
        imgAlt : 'Red rose',
        imgSize : 300,
    };
const structureList1 =
    {
        Name : "White Rose Flower",
        Description: "White roses symbolize purity, youthfulness, and innocence. Young love, eternal loyalty, and new beginnings are also commonly tied to the meaning of white roses, making them a popular choice for weddings and romantic occasions.",
        imgUrl : "./whiteRose.jpg",
        imgAlt : "White rose"
    };
    const structureList2 = {
        Name : "Blue Rose Flower",
        Description: "As the general rose is associated with love, the blue rose can be commonly associated with unrequited love or true love. Possibly, true love that sadly only goes one way. Blue roses with a lighter hue symbolize sensitivity and feelings. Although, they do not represent romantic feelings.",
        imgUrl : './blueRose.jpg' ,
        imgAlt : "Blue rose"
    };

export default function Rose() {
    return (
    <div>
      <h1><u>{structureList.Name}</u></h1>
      <img src={structureList.imgUrl} alt={structureList.imgAlt} style={{width:structureList.imgSize,
      height:structureList.imgSize}}></img>
      <p>{structureList.Description}</p>
      <br/><br/>

      <h1><u>{structureList1.Name}</u></h1>
      <img src={structureList1.imgUrl} alt={structureList1.imgAlt} style={{width:structureList.imgSize,
      height:structureList.imgSize}}></img>
      <p>{structureList1.Description}</p>
      <br/><br/>

      <h1><u>{structureList2.Name}</u></h1>
      <img src={structureList2.imgUrl} alt={structureList2.imgAlt} style={{width:structureList.imgSize,
      height:structureList.imgSize}}></img>
      <p>{structureList2.Description}</p>
      <br/><br/>
    </div>
    );
}