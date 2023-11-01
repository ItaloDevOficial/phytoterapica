import Style from '../css/Home.module.css'
import Algo from '../img/algo.png'
import Gota from '../img/gota.png'
import Vegano from '../img/vegano.png'
import Caminhaoo from '../img/Caminhaoo.png'


function Home(){
    return(
        <aside>
            <div className={Style.Back}></div>

            <div className={Style.Complemento}>

                <div className={Style.Algo}>
                    <img className={Style.Img_Algo} src={Algo} alt='Algo'/>
                    <div className={Style.Descr}>
                        <h4>5% de desconto</h4>
                        <h5>Para pagamentos à vista no pix</h5>
                    </div>
                </div>

                <div className={Style.Gota}>
                    <img className={Style.Img_Gota} src={Gota} alt='Gota'/>
                    <div className={Style.Descr}>
                        <h4>Vegano</h4>
                        <h5>Sem componentes de origem animal</h5>
                    </div>
                </div>

                <div className={Style.Vegano}>
                    <img className={Style.Img_Vegano} src={Vegano} alt='Vegano'/>
                    <div className={Style.Descr}>
                        <h4>100% Puro</h4>
                        <h5>Óleos puros e naturais</h5>
                    </div>
                </div>

                <div className={Style.Caminhaoo}>
                    <img className={Style.Img_Caminhaoo} src={Caminhaoo} alt='Caminhaoo'/>
                    <div className={Style.Descr}>
                        <h4>Frete gratis</h4>
                        <h5>Para alunos do PROA</h5>
                    </div>
                </div>

            </div>
        </aside>
    )
}

export default Home