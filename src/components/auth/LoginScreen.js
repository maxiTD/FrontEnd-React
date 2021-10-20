import React, {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


import { SignUp } from './SignUp.js';
import './login.css';

const {REACT_APP_API_URL} = process.env;

const initForm = {
    email: '',
    password: ''
};

export const LoginScreen = () => {

    const [formValues, setFormValues] = useState(initForm);

    const {email, password} = formValues;

    const handleImputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleSubmitForm = async(e) => {
        e.preventDefault();
        
        if (password.trim().length < 6) { 
            return Swal.fire('Verificar contraseña!', 'La contraseña debe tener al menos 7 dígitos.', 'error');
        };

        const result = await axios.post(`${REACT_APP_API_URL}/auth`, {
            email,
            password
        });

        localStorage.setItem('token', result.data.token);

        //console.log(localStorage.getItem('token'));

        Swal.fire('Ok!', 'Bienvenido!!', 'success')

        window.location.href = "/";
    };
    

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form 
                        onSubmit={handleSubmitForm}
                    >
                        <div className="form-group">
                            <input 
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                value={email}
                                onChange={handleImputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                value={password}
                                onChange={handleImputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <SignUp />
            </div>
        </div>
    );
}