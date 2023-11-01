import Style from '../css/Essencias.module.css'
import ComponentesProps from './ComponentesProps'
import lavanda from '../img/essenciais/oleo-essencial-lavanda.jpg'
import alecrim from '../img/essenciais/oleo-essencial-alecrim.jpg'
import geranio from '../img/essenciais/oleo-essencial-geranio.jpg'
import hortela from '../img/essenciais/oleo-essencial-hortela-pimenta.jpg'
import melaleuca from '../img/essenciais/oleo-essencial-melaleuca-tea-tree.jpg'
import sandalo from '../img/essenciais/oleo-essencial-sandalo.jpg'
import bulgaria from '../img/essenciais/oleo-essencial-lavanda-bulgaria.jpg'
import eucalipto from '../img/essenciais/oleo-essencial-eucalipto-globulus.jpg'
import bergamota from '../img/essenciais/oleo-essencial-bergamota.jpg'
import copa from '../img/essenciais/_leo_essencial_de_copa_ba.jpg'
import limao from '../img/essenciais/oleo-essencial-limao-siciliano.jpg'
import patchouli from '../img/essenciais/oleo-essencial-patchouli.jpg'

function Essencias(){
    return(

        <section>
            <div className={Style.Info}>
            <h1>Óleos Essenciais</h1>
            <p>Óleos essenciais são compostos naturais extraídos da parte aromática das plantas, como folhas, flores, galhos, troncos, raízes e casca de frutos.</p>
            </div>

            <div className={Style.Essencias}>

            <ComponentesProps 
            imagem={lavanda}
            titulo='Óleo Essencial de Lavanda (gt. França) - 10ml'
            preco='R$ 51,00'
            />

            <ComponentesProps 
            imagem={alecrim}
            titulo='Óleo Essencial de Alecrim (qt. Cineol) - 10ml'
            preco='R$ 37,00'
            />

            <ComponentesProps 
            imagem={geranio}
            titulo='Óleo Essencial de Gerânio - 5ml Phyte'
            preco='R$ 44,00'
            />

            <ComponentesProps 
            imagem={hortela}
            titulo='Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml'
            preco='R$ 52,00'
            />
            </div>

            <div className={Style.Essencias}>

            <ComponentesProps 
            imagem={melaleuca}
            titulo='Óleo Essencial de Melaleuca (Tea Tree) - 10ml'
            preco='R$ 50,00'
            />

            <ComponentesProps 
            imagem={sandalo}
            titulo='Óleo Essencial de Sândalo Amyris - 5ml'
            preco='R$ 59,00'
            />

            <ComponentesProps 
            imagem={bulgaria}
            titulo='Óleo Essencial de Lavanda (gt. Bulgária) - 10ml'
            preco='R$ 51,00'
            />

            <ComponentesProps 
            imagem={eucalipto}
            titulo='Óleo Essencial de Eucalipto Globulus - 10ml'
            preco='R$ 35,20'
            />
            </div>

            <div className={Style.Essencias}>

            <ComponentesProps 
            imagem={bergamota}
            titulo='Óleo Essencial de Bergamota - 5ml Phyton'
            preco='R$ 40,00'
            />

            <ComponentesProps 
            imagem={copa}
            titulo='Óleo Essencial de Copaíba - 10ml Phyton'
            preco='R$ 44,00'
            />

            <ComponentesProps 
            imagem={limao}
            titulo='Óleo Essencial de Limão Siciliano - 10ml'
            preco='R$ 47,00'
            />

            <ComponentesProps 
            imagem={patchouli}
            titulo='Óleo Essencial de Patchouli - 5ml Phyton'
            preco='R$ 37,00'
            />
            </div>

        </section>

    )
}

export default Essencias