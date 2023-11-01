import Style from '../css/Vegetais.module.css'
import ComponentesProps from './ComponentesProps'
import rosa_mosqueta from '../img/vegetais/rosa_mosqueta.jpg'
import semente_de_uva from '../img/vegetais/uva.jpg'
import jojoba from '../img/vegetais/jojoba.jpg'
import Abacate from '../img/vegetais/abacate.jpg'
import camomila_alem from '../img/vegetais/camomila.jpg'
import girassol from '../img/vegetais/girassol.jpg'
import maracuja from '../img/vegetais/maracuja.jpg'
import amendoa from '../img/vegetais/amendoa.jpg'
import semente_uva from '../img/vegetais/semente_uva.jpg'
import rosa_roll from '../img/vegetais/rosa_mosqueta_roll.jpg'
import copaiba from '../img/vegetais/copaiba.jpg'




function Vegetais() {
    return (

        <section>
            <div className={Style.Info}>
                <h1>Óleos Vegetais</h1>
                <p>Óleos vegetais são gorduras extraídas de grãos, sementes e polpas de frutos. São formados por ácidos graxos a maior parte insaturados, que são os ômega 3, 6 e 9 e vitaminas A, D e E, dentre outras substâncias.</p>
            </div>

            <div className={Style.Vegetais}>


                <ComponentesProps
                    imagem={rosa_mosqueta}
                    titulo='Óleo Essencial de Lavanda (gt. França) - 10ml'
                    preco='R$ 51,00'
                />

                <ComponentesProps
                    imagem={semente_de_uva}
                    titulo='Óleo Essencial de Alecrim (qt. Cineol) - 10ml'
                    preco='R$ 37,00'
                />

                <ComponentesProps
                    imagem={jojoba}
                    titulo='Óleo Essencial de Gerânio - 5ml Phyte'
                    preco='R$ 44,00'
                />

                <ComponentesProps
                    imagem={Abacate}
                    titulo='Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml'
                    preco='R$ 52,00'
                />
            </div>

            <div className={Style.Vegetais}>

                <ComponentesProps
                    imagem={camomila_alem}
                    titulo='Óleo Essencial de Melaleuca (Tea Tree) - 10ml'
                    preco='R$ 50,00'
                />

                <ComponentesProps
                    imagem={girassol}
                    titulo='Óleo Essencial de Sândalo Amyris - 5ml'
                    preco='R$ 59,00'
                />

                <ComponentesProps
                    imagem={maracuja}
                    titulo='Óleo Essencial de Lavanda (gt. Bulgária) - 10ml'
                    preco='R$ 51,00'
                />

                <ComponentesProps
                    imagem={amendoa}
                    titulo='Óleo Essencial de Eucalipto Globulus - 10ml'
                    preco='R$ 35,20'
                />
            </div>

            <div className={Style.Vegetais}>

                <ComponentesProps
                    imagem={semente_uva}
                    titulo='Óleo Essencial de Bergamota - 5ml Phyton'
                    preco='R$ 40,00'
                />

                <ComponentesProps
                    imagem={rosa_mosqueta}
                    titulo='Óleo Essencial de Copaíba - 10ml Phyton'
                    preco='R$ 44,00'
                />

                <ComponentesProps
                    imagem={rosa_roll}
                    titulo='Óleo Essencial de Limão Siciliano - 10ml'
                    preco='R$ 47,00'
                />

                <ComponentesProps
                    imagem={copaiba}
                    titulo='Óleo Essencial de Patchouli - 5ml Phyton'
                    preco='R$ 37,00'
                />
            </div>

        </section>

    )
}

export default Vegetais