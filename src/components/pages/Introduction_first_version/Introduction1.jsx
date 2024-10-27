import style from "./Introduction1.module.css";

const Introduction1 = () => {

    return (
        <div className={style.gridContainer}>
            <div className={style.item1}>
                <h2 className={style.nameText}>Halycia de Oliveira Fonseca</h2>
            </div>
            <div className={style.item2}>2</div>
            <div className={style.item3}>
                <img className={style.imgHaly} src="./assets/img_haly.jpg" alt="Foto de Perfil Haly" />
            </div>
            <div className={style.item4}>4</div>
            <div className={style.item5}>5</div>
            <div className={style.item6}>6</div>
            <div className={style.item7}>7</div>
        </div>
    );
};

export default Introduction1;