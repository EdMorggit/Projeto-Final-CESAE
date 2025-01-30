"use client"; // Habilita interatividade no Next.js

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">🏆 BTT Championship</Link>
        
        {/* Menu Principal */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          
          {/* Dropdown Eventos */}
          <li className="relative">
            <button
              className="hover:text-gray-300"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Eventos ⬇
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-md rounded-md overflow-hidden">
                <li>
                  <Link href="/calendario" className="block px-4 py-2 hover:bg-gray-200">Calendário</Link>
                </li>
                <li>
                  <Link href="/eventos-futuros" className="block px-4 py-2 hover:bg-gray-200">Eventos Futuros</Link>
                </li>
              </ul>
            )}
          </li>

          <li><Link href="/regulamento" className="hover:text-gray-300">Regulamento</Link></li>
          <li><Link href="/inscricoes" className="hover:text-gray-300">Inscrições</Link></li>
          <li><Link href="/sobre" className="hover:text-gray-300">Sobre</Link></li>
          <li><Link href="/contactos" className="hover:text-gray-300">Contactos</Link></li>
        </ul>
      </div>
    </nav>
  );
}
