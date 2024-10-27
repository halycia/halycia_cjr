import React from "react";
import style from "./MinigameFinal.module.css";
import BotaoGenerico from "../BotaoGenerico";

export default function MinigameFinal({ escolha, onPerguntarNovamente }) {
    return (
        <>
            <h1 className={style.minigame}>Minigame</h1>
            <div className={style.card}>
                <p className={style.cardText}>A foca escolheu</p>
                <h2 className={style.cardValue}>{escolha || "Nenhuma escolha processada. Pergunte novamente."}</h2>
                <img className={style.imgFoca} src="./assets/foca/sorridente-personagem-foca-da-groenlândia.png" alt="foca-sorridente" />
            </div>
            <BotaoGenerico label="Perguntar Novamente" onClick={onPerguntarNovamente} />
        </>
    );
};
