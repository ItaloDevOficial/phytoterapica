import {Link} from 'react-router-dom'
import Style from '../css/Nav.module.css'

function Nav(){
    return(
        <nav className={Style.Nav}>
            <ul>
                <li><Link className={Style.Link} to='Essencias'>Óleos Essencias</Link></li>
                <li><Link className={Style.Link} to='Vegetais'>Óleos Vegetais</Link></li>
                <li><Link className={Style.Link} to='Sinergias'>Sinergias</Link></li>
                <li><Link className={Style.Link} to='Naturais'>Cosméticos Naturais</Link></li>
                <li><Link className={Style.Link} to='Pessoal'>Higiene Pessoal</Link></li>
                <li><Link className={Style.Link} to='Aromatizadores'>Aromatizadores</Link></li>
                <li><Link className={Style.Link} to='Acessorios'>Acessórios</Link></li>
            </ul>
        </nav>
    )
}

export default Nav