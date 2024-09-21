import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login, register} from "../../services/AuthService";
import cslogo from '../../assets/thislogo.png'
import "./Auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    document.title = 'This Tracker | Login';
    if (token) {
      navigate('/dashboard');
    }
    }, [token, navigate]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isLogin) {
        await login(email, password);
        console.log("Inicio de sesión exitoso");
        navigate('/dashboard')
      } else {
        await register(email, password, name);
        console.log("Registro exitoso");
        navigate('/login')
        setIsLogin(true)
      }
    } catch (err) {
      setError(isLogin ? "Error al iniciar sesión. Por favor, intente de nuevo." : "Error al registrarse. Por favor, intente de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-image-container">
          <img src={cslogo} alt="Login Logo" className="auth-image" />
        </div>
        <div className="auth-form-container">
          <h3 className="auth-title">
            {isLogin ? "Inicia sesión para continuar" : "Registrarse"}
          </h3>
          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="auth-input-group">
                <label htmlFor="name">Nombre</label>
                <input 
                  id="name" 
                  placeholder="Tu nombre" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>
            )}
            <div className="auth-input-group">
              <label htmlFor="email">Correo electrónico</label>
              <input 
                id="email" 
                placeholder="Introduce tu correo electrónico" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                type="email" 
              />
            </div>
            <div className="auth-input-group">
              <label htmlFor="password">Contraseña</label>
              <input 
                id="password" 
                placeholder="Introducir contraseña" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                type="password" 
              />
            </div>
            <button className="auth-button" type="submit" disabled={loading}>
              {loading ? "Cargando..." : (isLogin ? "Iniciar sesión" : "Registrarse")}
            </button>
            {error && <p className="auth-error">{error}</p>}
          </form>
          <div className="auth-footer">
            {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
            <button
              className="auth-switch"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Regístrate" : "Inicia sesión"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
