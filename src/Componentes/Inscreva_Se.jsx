import Style from '../css/Inscreva_Se.module.css'

function Inscreva_Se(){
    return( 

        <section className={Style.inscreva}>

        <div className={Style.Inscreva_Se}>
            <h1 className={Style.h1_inscreva}>Inscreva-se</h1>
            <p className={Style.p_inscreva}>E receba novidades e promoções</p>
        </div>

        <div className={Style.email}>
            <input className={Style.in} type='email' placeholder='Seu e-mail' />
        </div>

        <div className={Style.assinar}>
            <button className={Style.bu} type='input'>Assinar Newsletter</button>
        </div>

        </section>

        

    )
}

export default Inscreva_Se