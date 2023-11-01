import Style from '../css/Frete.module.css'
import Caminhao from '../img/icon-caminhao.png'

function Frete(){
    return(

        <div className={Style.Frete}>
            <img className={Style.Caminhao} src={Caminhao} alt='Caminhão' />
            <p className={Style.P_Frete}>Se é aluno do PROA o frete é por nossa conta!</p>
        </div>

    )
}

export default Frete