import { useRef, useState, forwardRef } from "react";


/*let myImage = forwardRef((props,ref)=>{
    return <img {...props} ref={ref}/>;
});*/

const Myinput = forwardRef((props,ref)=>{
    return <input{...props} ref={ref}/>;
});

export default function Carousel(){

//const [sltImg,setsltImg] =useState("");

let refInput = useRef(null);
function addFocus(){
    refInput.current.focus();
}

   let ref = useRef(null);
   let ref1 = useRef(null);
   let ref2 = useRef(null);

   function handleFirstImage(){
    ref.current.scrollIntoView({
        behavior:'smooth',
        block:'nearest',
        inline:'center'
   });
  // setsltImg("1")
   }
   function handleSecondImage(){
    ref1.current.scrollIntoView({
        behavior:'smooth',
        block:'nearest',
        inline:'center'
    });
  // setsltImg("2")
   }
   function handleThirdImage(){
    ref2.current.scrollIntoView({
        behavior:'smooth',
        block:'nearest',
        inline:'center'
    });
    // setsltImg("3")
   }

   return(
    <>
    <div className="bg-primary">
    <nav>
    <button onClick={handleFirstImage}>Blue</button>
    <button onClick={handleSecondImage}>Red</button>
    <button onClick={handleThirdImage}>White</button>
    </nav><br/>

    <div className="Container">
    
    <img src="./blueRose.jpg" ref={ref} alt="Blue" className="IMG" />
    
    <img src="./redRose.jpg" ref={ref1} alt="Red" className="IMG" ></img>
    
    <img src="./whiteRose.jpg" ref={ref2} alt="White" className="IMG"></img><br/><br/>

    

    
    </div>
    <Myinput ref={refInput} label= "name" type="text"/>
    <button onClick={addFocus}>ClickMe!</button>
    </div>
    </>
   )

}