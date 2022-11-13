const TimeScreen = () => {
    return (
        <div className="flex w-full justify-center">
            <div className="flex md:flex-row flex-col items-start justify-between">
                <div className="flex flex-1 justify-start flex-col md:mr-10 ">
                    <br>
                    </br>
                    <h1 className="text-3xl sm:text-5xl text-white py-1">
                        Aviso !
                    </h1>
                    <br>
                    </br>
                    <div className="flex flex-1 justify-start flex-col md:mr-10 bg-[#619EDC] pl-10 pr-10 pb-5">
                        
                        <h1 className="text-1xl sm:text-2xl text-black py-1">
                             Seu pedido de cadastro foi encaminhado a parte de analise e esta sendo validado por 
                        </h1>
                        <h1 className="text-1xl sm:text-2xl text-black py-1">
                            um de nossos funcionarios, assim que for concluido podera utilizar o sistema
                        </h1>
                        <br>
                        </br>
                        <h2 className="text-1xl sm:text-2xl text-black py-1">
                            agurarde a liberacao ...
                        </h2>
                       
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

export default TimeScreen;