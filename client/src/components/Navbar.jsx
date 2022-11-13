import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    const vaiPraPagina = () => {
        navigate('/TimeScreen');
    }
    return (
        <div className='w-full flex p-5 px-8' >
            
            <div  className=' md:flex-[0.5] flex-initial '>
                <img src="../../images/stuWalletLogo.png"/>
            </div>
            
            
            <div className='justify-center justify-items'>
                <button onClick={vaiPraPagina} className='bg-[#ffffff]  px-3 rounded cursor-pointer hover:bg-[#91c2dd]'>
                    Entrar
                </button>

                <button onclick="" className='bg-[296bad]  px-3 '>

                </button>

                <button onclick="" className='bg-[#ffffff]  px-3 rounded cursor-pointer hover:bg-[#91c2dd]'>
                    Suporte
                </button>

                <button onclick="" className='bg-[296bad]  px-3 '>

                </button>

                <button onclick="" className='bg-[#ffffff]  px-3 rounded cursor-pointer hover:bg-[#91c2dd]'>
                    Sobre
                </button>
            </div>
        </div>
        
        //<h1>Navbar</h1>
    );
}

export default Navbar;