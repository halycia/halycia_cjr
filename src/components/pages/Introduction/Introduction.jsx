import React, { useState } from "react";
import { PiInstagramLogoThin } from "react-icons/pi";
import { VscGithub } from "react-icons/vsc";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";

import style from "./Introduction.module.css";
import MinigameInicio from "../../MinigameInicio/MinigameInicio";
import MinigameFinal from "../../MinigameFinal/MinigameFinal";


const Introduction = () => {

    const [paginaAtual, setPaginaAtual] = useState('inicio');
    const [escolha, setEscolha] = useState('');

    const mostrarInicio = () => {
        setEscolha("");
        setPaginaAtual('inicio');
    };

    const mostrarFinal = (escolhaFeita) => {
        setEscolha(escolhaFeita);
        setPaginaAtual('final');
    };
    

    return (
        <div className={style.gridContainer}>
            <div id="item1" className={style.item1}>
                <h2 className={style.nameText}>Halycia de Oliveira Fonseca</h2>
            </div>
            <div id="item2" className={style.item2}>
                <div className={style.divImgFlowerVector}>
                    <img className={style.imgFlowerVector} src="./assets/FlowerVector.png" alt="" />
                </div>
                <div className={style.divProfession}>
                    <p className={style.profession}>Estudante de Ciências da Computação</p>
                </div>
            </div>
            <div id="item3" className={style.item3}>
                <img className={style.imgHaly} src="./assets/img_haly.jpg" alt="Foto de Perfil Haly" />
            </div>
            <div id="item4" className={style.item4}>
                {paginaAtual === 'inicio' ? (
                    <MinigameInicio onPerguntar={mostrarFinal} />
                ) : (
                    <MinigameFinal escolha={escolha} onPerguntarNovamente={mostrarInicio} />
                )}
            </div>
            <div id="item5" className={style.item5}>
                <img className={style.imgCircleVector} src="./assets/CIRCLE ICON.png" alt="" />
                <p className={style.textAbout}>Halycia é uma estudante de ciências da computação no quarto semestre na universidade de brasília.
                    é formada em análise e desenvolvimento de sistemas pelo uniceub e gosta de cachorrinhos.</p>
            </div>
            <div id="item6" className={style.item6}>
                <div className={style.pergunta}>
                    <p>Tem alguma pergunta?</p>
                    <a href="https://wa.me/5561984728431" target="_blank">
                        <GoArrowUpRight size={'2.5em'} className={style.icon} /></a>
                </div>
                <h2>Entre em contato</h2>
                <div className={style.icons}>
                    <a href="https://www.instagram.com/halyciaoliveira/profilecard/?igsh=Z21la3BqMjJzeGls" target="_blank">
                        <PiInstagramLogoThin size={'3em'} className={style.icon} /></a>
                    <a href="https://github.com/halycia" target="_blank">
                        <VscGithub size={'3em'} className={style.icon} /></a>
                    <a href="https://www.linkedin.com/in/halycia-de-oliveira-fonseca-111513278" target="_blank" rel="noopener noreferrer">
                        <PiLinkedinLogoLight size={'3em'} className={style.icon} /></a>
                </div>
            </div>
        </div>
    );
};

export default Introduction;