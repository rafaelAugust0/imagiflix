import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import logo from '../assets/logo.png';
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import user from '../assets/user.jpg';


const Navbar = () => (
    <nav className="absolute top-0 left-0 grid grid-cols-2  items-center w-full p-8">
        <div className=" justify-self-start grid grid-cols-2 gap-4 items-center">
            <h1 className="hidden">Imagiflix</h1>
            <img 
                src={logo} 
                alt='imagiflix logo' 
            />
            <ul className="flex grid grid-flow-col gap-4">
                <li className="font-bold">
                    Início
                </li>
                <li>
                    <a href="#series">Séries</a>
                </li>
                <li>
                <a href="#movies">Filmes</a>
                </li>
            </ul>
        </div>

        <div className="justify-self-end flex justify-items-end items-center">
            <form className="relative w-64">
                <input 
                    className="w-full bg-black border border-white rounded py-1 px-2 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100" 
                    type='text' 
                    placeholder="Títulos, gente e gêneros"
                />
                <button className="absolute right-0 py-1 px-2">
                    <FontAwesomeIcon 
                        icon={faSearch} 
                    />
                </button>
            </form>
            <div className="flex ml-4">
                <img 
                    src={user} 
                    alt='foto do usuário'
                />
                <button>
                    <FontAwesomeIcon 
                        className="ml-2" 
                        icon={faCaretDown}
                    />
                </button>

                <ul className="hidden">
                    <li>
                        <a href="#account">Minha conta</a>
                    </li>
                    <li>
                        <a href="#logout">Sair</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;