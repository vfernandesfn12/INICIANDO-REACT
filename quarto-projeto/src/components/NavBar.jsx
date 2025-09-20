import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/sobre">Sobre</NavLink>
      <NavLink to="/cadastro">Cadastro</NavLink>
      <NavLink to="/resetar">Resetar Senha</NavLink>

      <Link to="/login"> Ir pra login</Link>
    </nav>

  )
}

export default NavBar