import React from "react";
import NavbarItem from "./navbarItem";

function Navbar(){
    
    return(
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <a href="https://bootswatch.com/" className="navbar-brand">Minha Hamburgueria</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
          
          <li className="nav-item">
                <a className="nav-link" href="/home">Home</a>
          </li>
            
            <li className="nav-item">
                <a className="nav-link" href="/cadastro">Clientes</a>
          </li>
          <li className="nav-item">
                <a className="nav-link" href="/cadastro-funcionario">Funcionarios</a>
          </li>
          
          <li className="nav-item">
                <a className="nav-link" href="login.html">Login</a>
          </li>
        </ul>

        </div>
      </div>
    </div>
    )

}
export default  Navbar