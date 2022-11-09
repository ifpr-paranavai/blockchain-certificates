import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='w-full flex p-7 px-10' >
            <div className=' px-12'>
                <img src="../../images/stuWalletLogo.png"/>
            </div>
            <button onclick="" className='bg-[#ffffff] py-1 px-7 rounded cursor-pointer hover:bg-[#91c2dd]'>
                Meus Dados
            </button>
            <button onclick="" className='bg-[296bad]  px-2 '>
                
            </button>
            <br></br>
            <button onclick="" className='bg-[#ffffff]  px-3 rounded cursor-pointer hover:bg-[#91c2dd]'>
                Enviar Documentos
            </button>
        </div>
        
        //<h1>Navbar</h1>
    );
}

export default Navbar;