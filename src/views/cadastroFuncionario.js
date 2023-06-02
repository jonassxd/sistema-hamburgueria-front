import React from 'react'
import Card from '../components/card';
import FormGroup from '../components/form-group';

class CadastroUsuario extends React.Component{

    state={
        name: '',
        age:null,
        tel:'',
        sena:'', 
        mail:''
    }

   

    cadastrar = () => {
        console.log(this.state)
        }
    
    

    render(){
        return (
            <Card title="Cadastro de Funcionario">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text" 
                                       id="inputNome" 
                                       className="form-control"
                                       name="nome"
                                       onChange={e => this.setState({name: e.target.value})} />
                            </FormGroup>
                            <FormGroup label="Idade: *" htmlFor="inputIdade">
                                <input type="text" 
                                       id="inputIdade"
                                       className="form-control"
                                       name="idade"
                                       onChange={e => this.setState({age: e.target.value})} />
                            </FormGroup>
                            <FormGroup label="Telefone: *" htmlFor="inputTelefone">
                                <input type="text" 
                                       id="inputTelefone"
                                       className="form-control"
                                       name="telefone"
                                       onChange={e => this.setState({tel: e.target.value})} />
                            </FormGroup>
                            <FormGroup label=" Senha: *" htmlFor="inputSenha">
                                <input type="password" 
                                       id="inputSenha"
                                       className="form-control"
                                       name="senha"
                                       onChange={e => this.setState({sena: e.target.value})} />
                            </FormGroup>
                            
                            <FormGroup label="Email: *" htmlFor="inputEmail">
                                <input type="text" 
                                       id="inputEmail" 
                                       className="form-control"
                                       name="email"
                                       onChange={e => this.setState({mail: e.target.value})} />
                            </FormGroup>
                            
                            <button onClick={this.cadastrar} type="button" className="btn btn-success">
                                <i className="pi pi-save"></i> Salvar
                            </button>
                            <button onClick={this.cancelar} type="button" className="btn btn-danger">
                                <i className="pi pi-times"></i> Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default CadastroUsuario