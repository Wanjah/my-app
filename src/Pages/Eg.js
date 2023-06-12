import React from "react";
import { useState } from "react";


export default function Practice(){
    let [index,setIndex] = useState(0);
    let [press,setPress] = useState(false);
    function increment(){
        setIndex(index=index+1);
    }

    function pressed(){
        if(press === !false){
            setPress(true);
            alert("Not clicked!!")
        }else{
            setPress(false);
            alert("clicked!")
        }
    }

    //pesonal details form
    const [detail,setdetail] = useState(
        {firstName:"Eve",
        lastName:"DeSouza",
    email:"eve@gmail.com"}
    )
        //function to change value of first name
    function changeFName(e){
        setdetail({
            ...detail,
            firstName:e.target.value
        });
        
    }

    //function to change value of last name
    function changeLname(e){
        setdetail({
            ...detail,
            lastName:e.target.value
        });
    }

    //function to change value of email
    function changeEmail(e){
        setdetail({
            ...detail,
            email:e.target.value
        });
    }

    return(
        <div>
            <button onClick={() => {increment(); pressed()}}>ClickMe!</button>
            <p><u>{index}</u></p>
            <p>The button has been </p>
        

        <form>
            <label for="fname">Firstname</label>
            <input type="text" id="fname" value={detail.firstName} onChange={changeFName}></input><br/>
            <label for="lname">Lastname</label>
            <input type="text" id="lname" value={detail.lastName} onChange={changeLname}></input><br/>
            <label for="email">Email</label>
            <input type="text" id="email" value={detail.email} onChange={changeEmail}></input><br/>

            <button type="submit" onClick={()=>{
                alert("welcome" + detail.firstName.valueOf() + detail.lastName.valueOf())
            }}>Submit</button>
        </form>
        </div>
    )
 }