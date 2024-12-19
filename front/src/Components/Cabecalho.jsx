import { Link } from "react-router-dom";

export function Cabecalho() {
  return (
    <header>
      <h1>Teste Nginx</h1>

      <nav>
        <ul style={{
          display: 'flex',
          gap: '1vw',
          listStyle: 'none',
          paddingLeft: 0,
        }}>
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/sobre'>Sobre</Link></li>
          <li><Link to='/contato'>Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}