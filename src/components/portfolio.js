import React from "react";
import { FaBehance } from "react-icons/fa";

function Portfolio(){
    return( 
        <div className='text-center py-14'>
            <h2 className="font-bold text-4xl">Veja mais projetos</h2>
            <a href="www.behance.net/rafaelgoliveira" target="_blank" className="justify-center font-medium text-xl px-5 py-2.5 flex items-center gap-2"><FaBehance />Portfólio</a>

        </div>
    )
}
export default Portfolio;