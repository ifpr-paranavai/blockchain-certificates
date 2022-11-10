import {SiEthereum} from 'react-icons/si'

import { Loader } from './';

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
    const conectarCarteiraEstudantil = () => {

    }
    return (
        <div className="flex w-full justify-center">
            <div className="flex md:flex-row flex-col items-start justify-between">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white py-1">
                        Seja Autentico <br/> Cadastre-se ja 
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        O StuWallet é um sistema feito pra você
                    </p>
                    <button type="button" onClick={conectarCarteiraEstudantil()} className="flex flex-row justify-center items-center my-5 bg-[#ffffff] p-3 rounded-full cursor-pointer hover:bg-[#16537e]">
                        <p>Conectar Carteira</p>
                    </button>

                    <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
                        <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
                            Confiabilidade
                        </div>
                        <div className={companyCommonStyles}>Autenticidade</div>
                        <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
                            Seguranca
                        </div>
                        
                    </div>

                </div>
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-0.8 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5  ">
                        <img href="https://www.flaticon.com/free-icons/user" title="user icons" style={{ width: 450, height: 400 }} src="../../images/documento.png" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Welcome;