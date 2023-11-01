import Style from '../css/Naturais.module.css'
import ComponentesProps from './ComponentesProps'
import sangue_drag from '../img/naturais/sangue_de_drag.jpg'
import argila_branca from '../img/naturais/argila_branca.jpg'
import argila_verde from '../img/naturais/argila-verde.jpg'
import argila_amarela from '../img/naturais/argila_amarela.jpg'
import lemongrass from '../img/naturais/lemongrass.jpg'
import creme_base_neutra from '../img/naturais/creme_base_neutra.jpg'
import argila_vermelha from '../img/naturais/argila_vermelha.jpg'
import melaleuca from '../img/naturais/melaleuca.jpg'
import argila_preta from '../img/naturais/argila_preta.jpg'
import desodorante_true from '../img/naturais/desodorante-vegano-spray-true.jpg'
import extrato from '../img/naturais/extrato-aloe-vera.jpg'
import desodorante_hill from '../img/naturais/desodorante-vegano-spray-hill.jpg'

function Naturais(){
    return(
        <section>
            <div className={Style.Info}>
                <h1>Cosméticos Naturais</h1>
                <p>Produzidos com ingredientes como óleos essenciais, óleos e manteigas vegetais típicas do Brasil, os cosméticos naturais da Phytoterápica são livres de petroquímicos, parabenos, sulfatos e essências sintéticas. Benéficos para a saúde e para o meio ambiente, possuem excelente compatibilidade com o corpo humano, penetrando de maneira completa na pele e nos cabelos.</p>
            </div>

            <div className={Style.Naturais}>


                <ComponentesProps
                    imagem={sangue_drag}
                    titulo='Óleo Essencial de Lavanda (gt. França) - 10ml'
                    preco='R$ 51,00'
                />

                <ComponentesProps
                    imagem={argila_branca}
                    titulo='Óleo Essencial de Alecrim (qt. Cineol) - 10ml'
                    preco='R$ 37,00'
                />

                <ComponentesProps
                    imagem={argila_verde}
                    titulo='Óleo Essencial de Gerânio - 5ml Phyte'
                    preco='R$ 44,00'
                />

                <ComponentesProps
                    imagem={argila_amarela}
                    titulo='Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml'
                    preco='R$ 52,00'
                />
            </div>

            <div className={Style.Naturais}>

                <ComponentesProps
                    imagem={lemongrass}
                    titulo='Óleo Essencial de Melaleuca (Tea Tree) - 10ml'
                    preco='R$ 50,00'
                />

                <ComponentesProps
                    imagem={creme_base_neutra}
                    titulo='Óleo Essencial de Sândalo Amyris - 5ml'
                    preco='R$ 59,00'
                />

                <ComponentesProps
                    imagem={argila_vermelha}
                    titulo='Óleo Essencial de Lavanda (gt. Bulgária) - 10ml'
                    preco='R$ 51,00'
                />

                <ComponentesProps
                    imagem={melaleuca}
                    titulo='Óleo Essencial de Eucalipto Globulus - 10ml'
                    preco='R$ 35,20'
                />
            </div>

            <div className={Style.Naturais}>

                <ComponentesProps
                    imagem={argila_preta}
                    titulo='Óleo Essencial de Bergamota - 5ml Phyton'
                    preco='R$ 40,00'
                />

                <ComponentesProps
                    imagem={desodorante_true}
                    titulo='Óleo Essencial de Copaíba - 10ml Phyton'
                    preco='R$ 44,00'
                />

                <ComponentesProps
                    imagem={extrato}
                    titulo='Óleo Essencial de Limão Siciliano - 10ml'
                    preco='R$ 47,00'
                />

                <ComponentesProps
                    imagem={desodorante_hill}
                    titulo='Óleo Essencial de Patchouli - 5ml Phyton'
                    preco='R$ 37,00'
                />
            </div>

        </section>

    )
}

export default Naturais