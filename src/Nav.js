import React,{useState,useEffect} from 'react'
import "./nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
      if(window.scrollY>100){
        handleShow(true);
      }
      else{
        handleShow(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", transitionNavBar);
      return() => window.removeEventListener("scroll", transitionNavBar);
    }, []);

  return (
    <div className ={`Nav ${show && 'nav_black'}`}>
      <div className ="nav__contents">
          <img 
              onClick={() => navigate("/")}
              className ="nav__logo"
              src="./logo/logo.png"
              alt="logo"
          />
            <img 
              onClick={() => navigate("/profile")}
              className ="nav__avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="avatar"
          />

     </div>
     
    </div>
  )
}

export default Nav
