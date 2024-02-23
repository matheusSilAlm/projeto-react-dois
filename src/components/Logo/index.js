import logo from '../../imagens/logo.svg'
import './estilo.css'


function Logo(){
    return (
        <div className='logo'>  
            <img src={logo} 
            alt='logo' 
            className='logo-img'
            ></img>
            <p><strong>ALURA</strong>BOOKS</p>
        </div>
    )
}

export default Logo;