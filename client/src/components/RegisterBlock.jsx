const RegisterBlock = () => {
    return (
        <div className="flex w-full justify-center">
            <div className="flex md:flex-row flex-col items-start justify-between">
                <div className="flex flex-1 justify-start flex-col md:mr-10 ">
                    <h1 className="text-3xl sm:text-5xl text-white py-1">
                        Cadastro
                    </h1>
                    <br />
                    <div className="flex flex-1 justify-start flex-col md:mr-10 bg-[#619EDC] pl-10 pr-10 pt-5 pb-5">
                        
                        <form>
                            <input
                                type="text"
                                placeholder="Nome Completo"
                                className="my-2 w-full rounded-sm p-2 outline-none bg-white text-black border-none text-sm white-glassmorphism"
                                onChange={(e) => setName(e.target.value)}
                            />

                            <br />
                            <br />

                            <input
                                type="text"
                                placeholder="Email"
                                className="my-2 w-full rounded-sm p-2 outline-none bg-white text-black border-none text-sm white-glassmorphism"
                                onChange={(e) => setName(e.target.value)}
                            />

                            <br />
                            <br />

                            <input
                                type="text"
                                placeholder="Ra ou Id de Funcionario"
                                className="my-2 w-full rounded-sm p-2 outline-none bg-white text-black border-none text-sm white-glassmorphism"
                                onChange={(e) => setName(e.target.value)}
                            />

                            <br />
                            <br />


                            <input
                                type="file"
                                className="my-2 w-full rounded-sm p-2 outline-none bg-white text-black border-none text-sm white-glassmorphism"
                                onChange={(e) => setSelectedFile(e.target.files[0])}
                            />

                            <br />

                            <button type="button"
                                className="flex flex-row justify-center items-center my-5 bg-[#ffffff] p-3 pl-8 pr-8 rounded-full cursor-pointer hover:bg-[#16537e]">
                                <p>Enviar</p>
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        //  <div className="flex w-full justify-center">
        //     <div className="App">
        //         <form>
        //             <input
        //                 type="text"
        //                 value={name}
        //                 onChange={(e) => setName(e.target.value)}
        //             />

        //             <input
        //                 type="file"
        //                 value={selectedFile}
        //                 onChange={(e) => setSelectedFile(e.target.files[0])}
        //             />
        //     </form>
        //     </div>
        // </div>

        // <div className="App">
        // <form>
        //     <input
        //     type="text"
        //     value={name}
        //     onChange={(e) => setName(e.target.value)}
        //     />

        //     <input
        //     type="file"
        //     value={selectedFile}
        //     onChange={(e) => setSelectedFile(e.target.files[0])}
        //     />
        // </form>
        // </div>
        
    );
}

export default RegisterBlock;