import React from 'react';
import CadastroUsuario from "../views/cadastroUsuario"
import Home from '../views/home'


import { Route, Switch, BrowserRouter} from 'react-router-dom'
import CadastroFuncionario from '../views/cadastroFuncionario';

function Rotas(){
    return (
        <BrowserRouter>
            <Switch>
                 <Route path="/home" component={Home}/>
                 <Route path= "/cadastro" component={CadastroUsuario} />
                 <Route path= "/cadastro-funcionario" component={CadastroFuncionario} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas