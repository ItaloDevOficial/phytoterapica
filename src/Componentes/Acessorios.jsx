import Style from '../css/Acessorios.module.css'
import ComponentesProps from './ComponentesProps'
import sacola_roxa from '../img/acessorios/image_1_.png'
import necessaire_adao from '../img/acessorios/necessaire-porta-oleos-pequena-costela-de-adao-phytoterapica-01.jpg'
import necessarie_lona from '../img/acessorios/necessarie_lona_crua_1000x1000px_2.jpg'
import sacola_amarela from '../img/acessorios/sacola-phytoterapica-g.jpg'
import valvula from '../img/acessorios/valvula-pump-embalagem-500ml-phytoterapica.jpg'
import caixa_c_alca from '../img/acessorios/caixa_de_madeira_escura_-_35_divis_rias_com_al_a_-_phytoterapica_fechada_.jpg'
import caixa_s_alca from '../img/acessorios/caixa_de_madeira_escura.jpg'
import caixa_presente from '../img/acessorios/Mockup_Caixa_Presente_Porta_OleosEssenciais_aberto_comOleos_cinza.jpg'
import caixa_clara_s from '../img/acessorios/caixa_de_madeira_clara.jpg'
import caixa_clara_c from '../img/acessorios/caixa-madeira-marchetaria-clara-20-divisorias-sem-alca-phytoterapica-1000x1000-cinza-A.jpg'
import sacola_vazada from '../img/acessorios/sacola-presente-alca-vazada-phytoterapica.jpg'

function Acessorios(){
    return(
        <section>
            <div className={Style.Info}>
                <h1>Acessórios</h1>
                <p>Material de apoio desenvolvido pra você que ama a Aromaterapia.</p>
            </div>

            <div className={Style.Acessorios}>


                <ComponentesProps
                    imagem={sacola_roxa}
                    titulo='Óleo Essencial de Lavanda (gt. França) - 10ml'
                    preco='R$ 51,00'
                />

                <ComponentesProps
                    imagem={necessaire_adao}
                    titulo='Óleo Essencial de Alecrim (qt. Cineol) - 10ml'
                    preco='R$ 37,00'
                />

                <ComponentesProps
                    imagem={necessarie_lona}
                    titulo='Óleo Essencial de Gerânio - 5ml Phyte'
                    preco='R$ 44,00'
                />

                <ComponentesProps
                    imagem={sacola_amarela}
                    titulo='Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml'
                    preco='R$ 52,00'
                />
            </div>

            <div className={Style.Acessorios}>

                <ComponentesProps
                    imagem={valvula}
                    titulo='Óleo Essencial de Melaleuca (Tea Tree) - 10ml'
                    preco='R$ 50,00'
                />

                <ComponentesProps
                    imagem={caixa_c_alca}
                    titulo='Óleo Essencial de Sândalo Amyris - 5ml'
                    preco='R$ 59,00'
                />

                <ComponentesProps
                    imagem={caixa_s_alca}
                    titulo='Óleo Essencial de Lavanda (gt. Bulgária) - 10ml'
                    preco='R$ 51,00'
                />

                <ComponentesProps
                    imagem={caixa_presente}
                    titulo='Óleo Essencial de Eucalipto Globulus - 10ml'
                    preco='R$ 35,20'
                />
            </div>

            <div className={Style.Acessorios}>

                <ComponentesProps
                    imagem={caixa_clara_s}
                    titulo='Óleo Essencial de Bergamota - 5ml Phyton'
                    preco='R$ 40,00'
                />

                <ComponentesProps
                    imagem={caixa_clara_c}
                    titulo='Óleo Essencial de Copaíba - 10ml Phyton'
                    preco='R$ 44,00'
                />

                <ComponentesProps
                    imagem={sacola_vazada}
                    titulo='Óleo Essencial de Limão Siciliano - 10ml'
                    preco='R$ 47,00'
                />

            </div>

        </section>

    )
}

export default Acessorios