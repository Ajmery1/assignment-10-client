import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'; 
import { FaGithubSquare, FaGooglePlus } from "react-icons/fa";
const Login = () => {
    return (
        <div>
           <ButtonGroup vertical>
      <Button variant="outline-secondary"><FaGooglePlus></FaGooglePlus> Login with Google</Button>
      <Button variant="outline-secondary"><FaGithubSquare></FaGithubSquare> Login with Github</Button>

      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>

      
        </div>
    );
};

export default Login;