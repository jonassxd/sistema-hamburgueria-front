import React from "react"

class Home extends React.Component{

   
    
   

    render(){
        return(
            <div className="jumbotron">
        <h1 className="display-3">Bem vindo!</h1>
        <p className="lead">Essa é a Hamburgueria JEFS BURGUER.</p>
        <hr className="my-4"/>
        <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
        <p className="lead">
        <a className="btn btn-primary btn-lg" 
        href="/cadastro" role="button"><i class="fa fa-users"></i>  Cadastrar Cliente</a>
      <a className="btn btn-primary btn-lg" 
        href="/cadastro" role="button"><i class="fa fa-users"></i>  Cadastrar Funcionario</a>
    </p>
  </div>
        )
    }
}

export default Home



