import { useState } from 'react';
import Card from "../components/Card";
import FormGroup from "../components/FormGorup";


function Cadastro(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [password2, setPassword2] = useState("");



    
   const salvar = ()=> {
    console.log("Email: ",email)
    console.log("password: ",password)
    console.log("Nome: ",nome)
    console.log("password2: ",password2)

  };

    return(
       
         <Card title="Cadastro de Usuario">   
         <div className="row">
        <div className="col-lg-12">
        <div className="bs-component">
            <form>
              <fieldset>
              <FormGroup label="Nome: *" htmlFor="exampleInputEmail1">
               <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu nome"/>
               </FormGroup>
               <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
               <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite o Email"/>
               <small id="emailHelp" className="form-text text-muted">Não divulgamos o seu email.</small>
               </FormGroup>
               <FormGroup label="senha: *" htmlFor="exampleInputPassword1">
               <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
             </FormGroup>
             <FormGroup label="repita senha: *" htmlFor="exampleInputPassword12">
               <input type="password" value={password2} onChange={(e)=>setPassword2(e.target.value)} className="form-control" id="exampleInputPassword12" placeholder="repita seu password"/>
             </FormGroup>
                <button onClick={salvar} type="button" className="btn btn-success">salvar</button>
                <button type="button" className="btn btn-danger">Cadastrar</button>
              </fieldset>
              </form>
        </div>
        </div>
        </div>
         </Card>
   
    );
}

export default Cadastro;