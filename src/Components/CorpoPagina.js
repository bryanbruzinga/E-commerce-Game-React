import React from "react";
import styles from './CorpoPagina.module.css'
import Carregando from "./Carregando.js";
import Produto from "./ListaProduto.js";
import Ordenar from "./Ordenar.js";
import { AppContext } from "../Context/AppContext.js";

const CorpoPagina = () => {

  const { produto, loading} = React.useContext(AppContext)
  
  if(produto === null) return null
  return (
    <div className={styles.mainContent}>
      <Ordenar />
      {loading ? (
        <Carregando />
      ) : (
        <div className={styles.containerListaProdutos}>
          <div className={styles.listaProdutos}>
            <Produto />
          </div>
        </div>
      )}
    </div>
  );
};

export default CorpoPagina;
