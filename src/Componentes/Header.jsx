import {Link} from 'react-router-dom'
import Style from '../css/Header.module.css'
import Logo from '../img/logo.png'
import Pessoa from '../img/pessoa.png'
import Carrinho from '../img/carrinho.png'

function Header(){
    return(

        <header>
            <div className={Style.Log}>
            <Link to='/'><img className={Style.Logo} src={Logo} alt='Logo' /></Link>
            </div>

            <div className={Style.Inputs}>
            <input type='text' placeholder=' 🔍︎ O que você prucura ?' />
            <button type='input'>-5% na primeira compra</button>
            </div>

            <div className={Style.Icons}>
            <img className={Style.Pessoa} src={Pessoa} alt='icon pessoa' />
            <img className={Style.Carrinho} src={Carrinho} alt='icon carrinho' />
            </div>

        </header>

    )
}

export default Header