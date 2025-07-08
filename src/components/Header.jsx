import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className=" h-16 flex items-center px-4 md:px-8 justify-between">
            <h1 className="text-white font-bold text-sm md:text-base lg:text-lg ">pet-проекты</h1>
            <nav className="flex gap-4 md:gap-6 text-white  text-sm md:text-base lg:text-lg">
                <Link 
                    to="/" 
                    className="font-semibold hover:underline p-2 transition-all"
                >
                    главная
                </Link>
                <Link 
                    to="/about" 
                    className="font-semibold hover:underline p-2 transition-all"
                >
                    добавить проект
                </Link>
                <Link 
                    to="/"
                    className="font-semibold hover:underline p-2 transition-all"
                >
                    профиль 
                </Link>
            </nav>
        </header>
    );
}

export default Header;