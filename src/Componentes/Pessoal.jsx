import Style from '../css/Pessoal.module.css'
import ComponentesProps from './ComponentesProps'
import sabonete_lavanda from '../img/pessoal/sabonete_lavanda_e_rosa_mosqueta_100g_-_phytoterapica_1_.jpg'
import sabonete_ylang from '../img/pessoal/Mockup_Sabonete_Caixa_Ylang_Ylang_cinza.jpg'
import sabonete_melaleuca from '../img/pessoal/sabonete_melaleuca_gergelim_conj2.jpg'
import gel_dental_drag from '../img/pessoal/Mockup-Gel-Dental-Sangue-de-Dragao-Ecommerce.jpg'
import sabonete_siciliano from '../img/pessoal/Mockup_Sabonete_Caixa_Limao_Siciliano_cinza.jpg'
import kit_Miniaturas from '../img/pessoal/Kit_Miniaturas_Sabonetes_1000x1000px_Cinza.jpg'
import sabonete_lemongrass from '../img/pessoal/sabonete-lemongrass-abacate_100g_phytoterapica_b.jpg'
import sabonete_menta from '../img/pessoal/sabonete_menta_e_germe_de_trigo_100g_-_phytoterapica_1_.jpg'
import gel_dental_infantil from '../img/pessoal/gel-dental-infantil-phytoterapica-50g-b.jpg'
import enxaguante_bucal from '../img/pessoal/enxaguante_bucal_herbal_250ml_-_phytoterapica_1.jpg'
import creme_dental_herbal from '../img/pessoal/creme-dental-herbal-adulto-80g-phytoterapica-01.jpg'


function Pessoal(){
    return(
        <section>
            <div className={Style.Info}>
                <h1>Higiene Pessoal</h1>
                <p>Linha de produtos com óleos essenciais: Sabonetes com óleos vegetais, creme dental adulto, gel dental infantil e enxaguante bucal com extratos naturais.</p>
            </div>

            <div className={Style.Pessoal}>


                <ComponentesProps
                    imagem={sabonete_lavanda}
                    titulo='Óleo Essencial de Lavanda (gt. França) - 10ml'
                    preco='R$ 51,00'
                />

                <ComponentesProps
                    imagem={sabonete_ylang}
                    titulo='Óleo Essencial de Alecrim (qt. Cineol) - 10ml'
                    preco='R$ 37,00'
                />

                <ComponentesProps
                    imagem={sabonete_melaleuca}
                    titulo='Óleo Essencial de Gerânio - 5ml Phyte'
                    preco='R$ 44,00'
                />

                <ComponentesProps
                    imagem={gel_dental_drag}
                    titulo='Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml'
                    preco='R$ 52,00'
                />
            </div>

            <div className={Style.Pessoal}>

                <ComponentesProps
                    imagem={sabonete_siciliano}
                    titulo='Óleo Essencial de Melaleuca (Tea Tree) - 10ml'
                    preco='R$ 50,00'
                />

                <ComponentesProps
                    imagem={kit_Miniaturas}
                    titulo='Óleo Essencial de Sândalo Amyris - 5ml'
                    preco='R$ 59,00'
                />

                <ComponentesProps
                    imagem={sabonete_lemongrass}
                    titulo='Óleo Essencial de Lavanda (gt. Bulgária) - 10ml'
                    preco='R$ 51,00'
                />

                <ComponentesProps
                    imagem={sabonete_menta}
                    titulo='Óleo Essencial de Eucalipto Globulus - 10ml'
                    preco='R$ 35,20'
                />
            </div>

            <div className={Style.Pessoal}>

                <ComponentesProps
                    imagem={gel_dental_infantil}
                    titulo='Óleo Essencial de Bergamota - 5ml Phyton'
                    preco='R$ 40,00'
                />

                <ComponentesProps
                    imagem={enxaguante_bucal}
                    titulo='Óleo Essencial de Copaíba - 10ml Phyton'
                    preco='R$ 44,00'
                />

                <ComponentesProps
                    imagem={creme_dental_herbal}
                    titulo='Óleo Essencial de Limão Siciliano - 10ml'
                    preco='R$ 47,00'
                />

            </div>

        </section>

    )
}

export default Pessoal