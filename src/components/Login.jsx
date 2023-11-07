import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import login_amico from '../images/Login.png';
import signUp_amico from '../images/SignUp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faXTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Dashboard'

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState(
    localStorage.getItem('authenticatedUser') || ''
  );

  const [inputFocus, setInputFocus] = useState(false); 
  const [focusedInput, setFocusedInput] = useState(null);


  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';
    if (isAuthenticated) {
      const username = localStorage.getItem('authenticatedUser') || '';
      setAuthenticatedUser(username);
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem('users')) || [];
    localStorage.setItem('users', JSON.stringify(usersData));
  }, []);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
    setIsLoggedIn(false);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = signupData;

    if (!username || !email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const usersData = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = usersData.some((user) => user.username === username);

    if (userExists) {
      alert('Este nome de usuário já está em uso. Escolha outro.');
      return;
    }

    usersData.push(signupData);
    localStorage.setItem('users', JSON.stringify(usersData));

    setSignupData({
      username: '',
      email: '',
      password: '',
    });

    alert('Cadastro realizado com sucesso! Você pode fazer login agora.');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { username, password } = loginData;

    if (!username || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const usersData = JSON.parse(localStorage.getItem('users')) || [];
    const user = usersData.find((user) => user.username === username);

    if (!user || user.password !== password) {
      alert('Nome de usuário ou senha incorretos. Tente novamente.');
      return;
    }

    setIsAuthenticated(true);
    setAuthenticatedUser(username);

    localStorage.setItem('authenticated', 'true');
    localStorage.setItem('authenticatedUser', username);
  };

  const handleLogout = () => {
    setLoginData({
      username: '',
      password: '',
    });

    localStorage.removeItem('authenticated');
    localStorage.removeItem('authenticatedUser');

    setIsAuthenticated(false);
    setAuthenticatedUser('');
  };

  const handleDeleteAccount = () => {
    setLoginData({
      username: '',
      password: '',
    });

    const usersData = JSON.parse(localStorage.getItem('users')) || [];
    const filteredUsers = usersData.filter((user) => user.username !== authenticatedUser);
    localStorage.setItem('users', JSON.stringify(filteredUsers));

    localStorage.removeItem('authenticated');
    localStorage.removeItem('authenticatedUser');

    setIsAuthenticated(false);
    setAuthenticatedUser('');
  };


    const handleFocus = (inputName) => {
      setFocusedInput(inputName);
    };
  
    const handleBlur = () => {
      setFocusedInput(null);
    };

    
  

  return (
    <div className={`container1 ${isSignUp ? 'sign-up-mode' : ''}`}>
      {isAuthenticated ? (
        <div className='welcome'>
          <h1>Bem-vindo(a), {authenticatedUser}!</h1>

          <Link to='Dashboard'>Dashboard</Link>
          
          <button onClick={handleDeleteAccount} className='btn-excluir'>
            Excluir Conta
          </button>
          <button onClick={handleLogout} className='btn btn-logout'>
            Logout
          </button>
         
        </div>
      ) : (
        <div className='signin-signup'>
          <form action='' className='sign-in-form' onSubmit={handleLoginSubmit}>
            <h2 className='title'>Sign in</h2>
            <div className={`input-field ${inputFocus ? 'focus' : ''}`}>
              <FontAwesomeIcon className='icon' icon={faUser} />
              <input
                className='contact-input'
                type='text'
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                onFocus={() => handleFocus('username')}
                onBlur={handleBlur}
              />
              <label>Nome de usuário</label>
            </div>
            <div className={`input-field ${inputFocus ? 'focus' : ''}`}>
              <FontAwesomeIcon className='icon' icon={faLock} />
              <input
                className='contact-input'
                type='password'
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                onFocus={() => handleFocus('password')}
                onBlur={handleBlur}
              />
              <label>Senha</label>
            </div>
            <input type='submit' value='Entrar' className='btn' />
          </form>
          <form action='' className='sign-up-form' onSubmit={handleSignupSubmit}>
            <h2 className='title'>Sign up</h2>
            <div className='input-field'>
              <FontAwesomeIcon className='icon' icon={faUser} />
              <input
                className='contact-input'
                type='text'
                value={signupData.username}
                onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
              />
              <label>Nome de usuário</label>
            </div>
            <div className='input-field'>
              <FontAwesomeIcon className='icon' icon={faEnvelope} />
              <input
                className='contact-input'
                type='text'
                value={signupData.email}
                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
              />
              <label>Email</label>
            </div>
            <div className='input-field'>
              <FontAwesomeIcon className='icon' icon={faLock} />
              <input
                className='contact-input'
                type='password'
                value={signupData.password}
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
              />
              <label>Senha</label>
            </div>
            <input type='submit' value='Cadastrar' className='btn' />
          </form>
        </div>
      )}
      <div className='panels-container'>
        <div className='panel left-panel'>
          <div className='content'>
            <h3>Já é membro?</h3>
            <p>
              Faça login agora para ter acesso a todas as funcionalidades exclusivas da nossa plataforma e aproveite
              ao máximo a sua experiência conosco!
            </p>
            <button className='btn btn-troca' id='sign-in-btn' onClick={toggleSignUp}>
              Sign in
            </button>
          </div>
          <img src={login_amico} alt='' className='image' />
        </div>
        <div className='panel right-panel'>
          <div className='content'>
            <h3>Novo aqui?</h3>
            <p>
              Junte-se a nós! Cadastre-se agora para ter acesso a conteúdos exclusivos e ficar por dentro das
              novidades. Não perca mais tempo, registre-se já!
            </p>
            <button className='btn btn-troca' id='sign-up-btn' onClick={toggleSignUp}>
              Sign up
            </button>
          </div>
          <img src={signUp_amico} alt='' className='image' />
        </div>
      </div>
    </div>
  );
}

export default Login;

