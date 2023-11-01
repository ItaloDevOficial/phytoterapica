import Style from '../css/Sinergias.module.css'
import ComponentesProps from './ComponentesProps'
import relax from '../img/sinergias/composto-essencial-relax.jpg'
import equilibrium from '../img/sinergias/composto-essencial-equilibrium.jpg'
import citrinos from '../img/sinergias/composto-essencial-citrinos.jpg'
import vata from '../img/sinergias/E-commerce_Mockups.jpg'
import kapha from '../img/sinergias/E-commerce_Mockups2.jpg'
import pitta from '../img/sinergias/E-commerce_Mockups3.jpg'
import enfance from '../img/sinergias/composto-essencial-enfance.jpg'
import Defense from '../img/sinergias/mockup_Defense_com_caixa.jpg'
import focalize from '../img/sinergias/composto-essencial-focalize-rollon.jpg'
import harmonize from '../img/sinergias/composto-essencial-harmonize-rollon.jpg'
import inspire from '../img/sinergias/composto-essencial-inspire.jpg'
import Mouvement from '../img/sinergias/mockup_Mouvement_com_caixa.jpg'



function Sinergias(){
    return(

        <section>
            <div className={Style.Info}>
                <h1>Sinergias</h1>
                <p>Sinergia é a mistura dos óleos essenciais, um processo criativo que tem como objetivo combinar suas propriedades e componentes. Juntos esses componentes trabalham em equilíbrio e harmonia, intensificando o efeito desejado dessa mistura e potencializando os princípios ativos de cada óleo essencial.</p>
            </div>

            <div className={Style.Sinergias}>


                <ComponentesProps
                    imagem={relax}
                    titulo='Óleo Essencial de Lavanda (gt. França) - 10ml'
                    preco='R$ 51,00'
                />

                <ComponentesProps
                    imagem={equilibrium}
                    titulo='Óleo Essencial de Alecrim (qt. Cineol) - 10ml'
                    preco='R$ 37,00'
                />

                <ComponentesProps
                    imagem={citrinos}
                    titulo='Óleo Essencial de Gerânio - 5ml Phyte'
                    preco='R$ 44,00'
                />

                <ComponentesProps
                    imagem={vata}
                    titulo='Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml'
                    preco='R$ 52,00'
                />
            </div>

            <div className={Style.Sinergias}>

                <ComponentesProps
                    imagem={kapha}
                    titulo='Óleo Essencial de Melaleuca (Tea Tree) - 10ml'
                    preco='R$ 50,00'
                />

                <ComponentesProps
                    imagem={pitta}
                    titulo='Óleo Essencial de Sândalo Amyris - 5ml'
                    preco='R$ 59,00'
                />

                <ComponentesProps
                    imagem={enfance}
                    titulo='Óleo Essencial de Lavanda (gt. Bulgária) - 10ml'
                    preco='R$ 51,00'
                />

                <ComponentesProps
                    imagem={Defense}
                    titulo='Óleo Essencial de Eucalipto Globulus - 10ml'
                    preco='R$ 35,20'
                />
            </div>

            <div className={Style.Sinergias}>

                <ComponentesProps
                    imagem={focalize}
                    titulo='Óleo Essencial de Bergamota - 5ml Phyton'
                    preco='R$ 40,00'
                />

                <ComponentesProps
                    imagem={harmonize}
                    titulo='Óleo Essencial de Copaíba - 10ml Phyton'
                    preco='R$ 44,00'
                />

                <ComponentesProps
                    imagem={inspire}
                    titulo='Óleo Essencial de Limão Siciliano - 10ml'
                    preco='R$ 47,00'
                />

                <ComponentesProps
                    imagem={Mouvement}
                    titulo='Óleo Essencial de Patchouli - 5ml Phyton'
                    preco='R$ 37,00'
                />
            </div>

        </section>
    )
}

export default Sinergias