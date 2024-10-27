import React, { useState } from "react";
import style from "./MinigameInicio.module.css";
import BotaoGenerico from "../BotaoGenerico";

export default function MinigameInicio({ onPerguntar }) {

    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');

    function handlePerguntar() {
        if (option1 && option2) {
            const escolher = Math.floor(Math.random() * 11);
            const escolha = (escolher % 2) === 0 ? option1 : option2;
            console.log(option1, option2, escolha);
            onPerguntar(escolha);
        } else {
            alert("A foca diz: Por favor, preencha ambas as opções!")
            console.log(option1, option2)
        }
    }

    return (
        <>
            <h1 className={style.minigame}>Minigame</h1>
            <img className={style.imgFoca} src="./assets/foca/sorridente-personagem-foca-da-groenlândia.png" alt="foca-sorridente" />
            <p>Pergunte à foca o que ela prefere</p>
            <input className={style.input} type="text" placeholder="Primeira opção" value={option1}
                onChange={(e) => setOption1(e.target.value)} />
            <p>ou</p>
            <input className={style.input} type="text" placeholder="Segunda opção" value={option2}
                onChange={(e) => setOption2(e.target.value)} />
            <BotaoGenerico label="Perguntar" onClick={handlePerguntar} />
        </>
    );
};
