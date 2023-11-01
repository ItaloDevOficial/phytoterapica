import Style from '../css/Visao.module.css'
import folha from '../img/vegano-green.png'
import pata from '../img/pata-green.png'
import gota from '../img/gotas-green.png'

function Visao() {
    return (

        <section className={Style.Visao}>

            <div className={Style.veg}>

                <img className={Style.iconnns} src={folha} alt="folha" />

                <div className={Style.descri}>
                    <h1 className={Style.h1_veg}>Vegano</h1>
                    <p className={Style.p_veg}>Sem componentes de origem animal</p>
                </div>
            </div>

            <div className={Style.free}>

                <img className={Style.iconnns} src={pata} alt="pata" />

                <div className={Style.descri}>
                    <h1 className={Style.h1_free}>Cruelty-Free</h1>
                    <p className={Style.p_free}>Não testado em animais</p>
                </div>
            </div>

            <div className={Style.puro}>

                <img className={Style.iconnns} src={gota} alt="gota" />

                <div className={Style.descri}>
                    <h1 className={Style.h1_puro}>100% Puro</h1>
                    <p className={Style.p_puro}>Óleos puros e naturais</p>
                </div>
            </div>

        </section>

    )
}

export default Visao