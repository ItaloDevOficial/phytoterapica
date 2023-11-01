import Style from '../css/Rodape.module.css'
import cartoes from '../img/cartoes.JPG'
import logoo from '../img/logo.png'


function Rodape() {
    return (

        <footer>

            <div className={Style.Sobre}>

                    <h1 className={Style.h1_sobre}>Sobre</h1>

                    <p className={Style.p_s}>Quem Somos</p>
                    <p className={Style.p_s}>Nossos Contatos</p>
                    <p className={Style.p_s}>Trabalhe Conosco</p>
                    <p className={Style.p_s}>Fale Conosco</p>
                    <p className={Style.p_s}>Consultora</p>
                    <p className={Style.p_s}>Atacado</p>
                    
                </div>

            <div className={Style.Suporte}>

                    <h1 className={Style.h1_suporte}>Suporte</h1>

                    <p className={Style.p_s}>Política de Entrega</p>
                    <p className={Style.p_s}>Política de Troca e Devolução</p>
                    <p className={Style.p_s}>Ingestão de Óleos Essenciais</p>
                    <p className={Style.p_s}>Cromatografia</p>

                </div>

            <div className={Style.Cliente}>

                    <h1 className={Style.h1_cliente}>Área do Cliente</h1>

                    <p className={Style.p_s}>Login</p>
                    <p className={Style.p_s}>Carrinho</p>
                    <p className={Style.p_s}>Minha Conta</p>
                    <p className={Style.p_s}>Meus Pedidos</p>
                    <p className={Style.p_s}>Preferências de Cookies</p>

            </div>

            <div className={Style.Pagamento}>

            <h1 className={Style.h1_pagamento}>Formas de Pagamento</h1>
            <img src={cartoes} alt="cartões" />

            </div>

            <div className={Style.Logoo}>

            <img className={Style.LoGo} src={logoo} alt="logo" />

            </div>

        </footer>


        

    )
}

export default Rodape