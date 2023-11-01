import Style from '../css/ComponentesProps.module.css'

function ComponenteProps({imagem, titulo, preco}){
    return(

        <div className={Style.caixa}>

            <img className={Style.imagem} src={imagem} alt='imagem' />
            <h2 className={Style.h2}>{titulo}</h2>
            <h3 className={Style.h3}>{preco}</h3>
            
        </div>

    )
}

export default ComponenteProps