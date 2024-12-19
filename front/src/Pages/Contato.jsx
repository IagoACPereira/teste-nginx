import axios from "axios";
import { useEffect, useState } from "react";
import { env } from "../Modules/env";

export function Contato() {
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
  const [requisicao, setRequisicao] = useState([]);

  useEffect(() => {
    chamaApi();
  }, []);

  if (carregando) return <p style={{ color: 'blue' }}>Carregando...</p>
  if (erro) return <p style={{ color: 'red' }}>Ocorreu um erro!</p>

  async function chamaApi() {
    await axios.get(`${ env.baseUrlApi }/contato`)
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

  return (
    <div>
      <h2>Contato</h2>

      <p>{ requisicao.mensagem }</p>
    </div>
  );
}