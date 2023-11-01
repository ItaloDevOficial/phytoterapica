import Style from '../css/Aromatizadores.module.css'
import ComponentesProps from './ComponentesProps'
import aromatizador_ultrassonico_tulipa from '../img/aromatizadores/Mockup_Aromatizador_caixa_cinza.jpg'
import arvore_da_vida from '../img/aromatizadores/colar_difusor_pessoal_rvore_da_vida.jpg'
import aromatizador_ultrassonico from '../img/aromatizadores/aromatizador_ultrassonico.jpg'
import mandala from '../img/aromatizadores/colar_difusor_pessoal_mandala.jpg'
import coracao from '../img/aromatizadores/aromatizador_pessoal_coracao_rosa_-_ceramica_-_phytoterapica.jpg'
import caldeirao from '../img/aromatizadores/aromatizador_pessoal_caldeirao_azul_-_ceramica_-_phytoterapica.jpg'
import difusor from '../img/aromatizadores/Mockup_Difusor_de_Aromas_Caixa_cinza.jpg'
import lotus from '../img/aromatizadores/colar_difusor_pessoal_flor_de_lotus.jpg'

function Aromatizadores(){
    return(
        <section>
            <div className={Style.Info}>
                <h1>Aromatizadores</h1>
                <p>Uma das maneiras mais eficazes e simples para usufruir dos aromas e propriedades terapêuticas dos óleos essenciais.</p>
            </div>

            <div className={Style.Aromatizadores}>


                <ComponentesProps
                    imagem={aromatizador_ultrassonico_tulipa}
                    titulo='Óleo Essencial de Lavanda (gt. França) - 10ml'
                    preco='R$ 51,00'
                />

                <ComponentesProps
                    imagem={aromatizador_ultrassonico}
                    titulo='Óleo Essencial de Alecrim (qt. Cineol) - 10ml'
                    preco='R$ 37,00'
                />

                <ComponentesProps
                    imagem={mandala}
                    titulo='Óleo Essencial de Gerânio - 5ml Phyte'
                    preco='R$ 44,00'
                />

                <ComponentesProps
                    imagem={coracao}
                    titulo='Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml'
                    preco='R$ 52,00'
                />
            </div>

            <div className={Style.Aromatizadores}>

                <ComponentesProps
                    imagem={caldeirao}
                    titulo='Óleo Essencial de Melaleuca (Tea Tree) - 10ml'
                    preco='R$ 50,00'
                />

                <ComponentesProps
                    imagem={difusor}
                    titulo='Óleo Essencial de Sândalo Amyris - 5ml'
                    preco='R$ 59,00'
                />

                <ComponentesProps
                    imagem={lotus}
                    titulo='Óleo Essencial de Lavanda (gt. Bulgária) - 10ml'
                    preco='R$ 51,00'
                />

                <ComponentesProps
                    imagem={arvore_da_vida}
                    titulo='Óleo Essencial de Eucalipto Globulus - 10ml'
                    preco='R$ 35,20'
                />
            </div>

        </section>

    )
}

export default Aromatizadores