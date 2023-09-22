//import React from "react";
//import { useState,useRef } from "react";


export default function ContactUs(){
    return(
        <>
        <h1>Contact Us</h1>
        <p>Please fill out the following contact form, we will do our best to answer you in less than 24 hours.</p><br/>
        <p>Fields marked with a * are required</p>
        <div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
            <img src="https://res.cloudinary.com/dwb1tbnbc/image/upload/v1684744741/samples/ecommerce/analog-classic.jpg" alt="wrist watch"/>
        </div>
        <div>
        <form>
            <div>
            <label for="fname">Fullname*required</label>
            <input type="text" required id="fname" class="fname"/>
            <br/>
            <label for="country">Country*required</label>
            <input type="text" required id="country" class="fname"/>
            <br/>
            <label for="email">Email * required</label>
            <input type="email" id="email" required class="fname"/>
            <label for="pnumber">Phone Number</label>
            <input type="text" id="pnumber" class="fname"/>
            <br/>
            </div>

            <div>
            <label for="subject">Subject</label>
            <input type="text" id="subject" class="fname"/>
            <br/>
            <label for="message">Message</label>
            <textarea id="message"/>

            </div>
            <button>Proceed</button>

        </form>
        </div>
        </div>
        </>
    );

}