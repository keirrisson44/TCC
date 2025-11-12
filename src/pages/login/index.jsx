import "./index.scss";

export default function Login() {
  return (
    <div className="login-container">
      <div className="logo">
    
      </div>

      <div className="form-box">
        <div className="tab">Login</div>
        <img src="./image/image 20.png" alt="Cadeado" className="icon" />

        <form className="login-form" action="/login" method="POST">
          <div className="inputs">
            <label htmlFor="usuario">Usuário:</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              autoComplete="username"
              required
            />

            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              autoComplete="current-password"
              required
            />

            

            <button type="submit">ENTRAR</button>
          </div>
        </form>
      </div>
    </div>
  );
}
