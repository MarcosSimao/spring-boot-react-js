import { useState } from 'react';
import Card from "../components/Card"
import FormGroup from "../components/FormGorup"

function Login(){
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

   const entrar = ()=> {
     console.log("Email: ",email)
     console.log("password: ",password)

   };
  


    return(
     
             <Card title="Login">   
             <div className="row">
            <div className="col-lg-12">
            <div className="bs-component">
                <form>
                  <fieldset>
                   <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                   <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite o Email"/>
                   </FormGroup>
                   <FormGroup label="senha: *" htmlFor="exampleInputPassword1">
                   <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                 </FormGroup>
                    <button onClick={entrar} type="button" className="btn btn-success">Entrar</button>
                    <button type="button" className="btn btn-danger">Cadastrar</button>
                  </fieldset>
                  </form>
            </div>
            </div>
            </div>
             </Card>
            
    
    )
}
export default Login;