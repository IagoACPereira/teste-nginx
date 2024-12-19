import axios from "axios";
import { useEffect, useState } from "react";
import { env } from "../Modules/env";

export function Sobre() {
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
  const [requisicao, setRequisicao] = useState([]);

  useEffect(() => {
    chamaApi();
  }, []);

  async function chamaApi() {
    await axios.get(`${ env.baseUrlApi }/sobre`)
      .then(resposta => {
        setErro(false);
        setCarregando(false);
        setRequisicao(resposta.data);
      })
      .catch(erro => {
        setCarregando(false);
        setErro(true);
        console.log(erro);
      });
  }

  if (carregando) return <p style={{ color: 'blue' }}>Carregando...</p>
  if (erro) return <p style={{ color: 'red' }}>Ocorreu um erro!</p>

  return (
    <div>
      <h2>Sobre</h2>

      <p>{ requisicao.mensagem }</p>
    </div>
  );
}