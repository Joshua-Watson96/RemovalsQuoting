import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { LandingPage } from "./pages/landing/landingPage"
import  { Login } from "./pages/login/login"
import { Signup } from "./pages/login/signup"
import { LandingPage } from "./pages/landing/landingPage";
import { BedroomQuestion} from "./pages/questions/questionOne";
import { AddressForm  } from "./pages/questions/questionTwo";
import { DoubleStoreyQuestion } from "./pages/questions/questionThree";


export default function App() {
    return(

        // <Router basename="RemovalsQuoting">
        <Router>
            <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />}/>
            <Route path='/landing' element={<LandingPage />}/>
            <Route path='/landing/questionOne' element={<BedroomQuestion />} />
            <Route path="/landing/questionTwo" element={<AddressForm />} />
            <Route path="/landing/questionThree" element={<DoubleStoreyQuestion />} />
            </Routes>
        </Router>
    )
}