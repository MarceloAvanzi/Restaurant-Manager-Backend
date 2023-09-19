import React from 'react';
import { PiNotepad } from "react-icons/pi";
import { GiChickenOven } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";
import Header from '../Header/index.jsx';


function App() {
    return (
        <>
            <Header />
            <div className="flex min-h-screen min-w-screen bg-background-meal bg-cover pl-20 pr-20 pt-20 pb-20">
                <div className="w-50 bg-[#050833d5] rounded-md">
                    <ul className="mt-6">
                        <li className="mb-4 text-white hover:cursor-pointer hover:text-lg hover:shadow-lg p-4 hover:bg-white hover:text-black rounded-md transition-all">
                            <div className="justify-center items-center flex">
                                <PiNotepad size={50} />
                            </div>
                            <div className="justify-center items-center flex">
                                Pedidos
                            </div>
                        </li>
                        <li className="mb-4 text-white hover:cursor-pointer hover:text-lg hover:shadow-lg p-4 hover:bg-white hover:text-black rounded-md transition-all">
                            <div className="justify-center items-center flex">
                                <GiChickenOven size={50} />
                            </div>
                            <div className="justify-center items-center flex">
                                Cozinha
                            </div>
                        </li>
                        <li className="mb-4 text-white hover:cursor-pointer hover:text-lg hover:shadow-lg p-4 hover:bg-white hover:text-black rounded-md transition-all">
                            <div className="justify-center items-center flex">
                                <BsCashCoin size={50} />
                            </div>
                            <div className="justify-center items-center flex">
                                Pagamento
                            </div>
                        </li>
                        <li className="mb-4 text-white hover:cursor-pointer hover:text-lg hover:shadow-lg p-4 hover:bg-white hover:text-black rounded-md transition-all">
                            <div className="justify-center items-center flex">
                                <BiSolidUser size={50} />
                            </div>
                            <div className="justify-center items-center flex">
                                Clientes
                            </div>
                        </li>
                        <div className="mt-24">
                            <li className="mb-4 text-white hover:cursor-pointer hover:text-lg hover:shadow-lg p-4 hover:bg-white hover:text-black rounded-md transition-all">
                                <div className="justify-center items-center flex">
                                    <SlOptions size={50} />
                                </div>
                                <div className="justify-center items-center flex">
                                    Configurações
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>

                <div className="flex-1 flex justify-center items-center bg-blue-500 rounded-md">
                    <div className="w-full h-full bg-white flex items-center justify-center rounded-lg shadow-lg pl-2 pr-2 pt-2 pb-2">
                        <span className="text-gray-700 text-3xl">Welcome to My Square Desktop Homepage</span>
                    </div>
                </div>

            </div>
        </>
    );
}

export default App;
