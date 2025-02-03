"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white py-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold"> Campeonato Nacional de BTT-Orientação 🏆</Link>
        
        {/* Menu Principal */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/calendario" className="hover:text-gray-300">Calendário</Link></li>
          <li><Link href="/provasfuturas" className="hover:text-gray-300">Provas Futuras</Link></li>
          <li><Link href="/regulamento" className="hover:text-gray-300">Regulamento</Link></li>
          <li><Link href="/form-participante" className="hover:text-gray-300 font-bold">📝 Inscrições</Link></li>
          <li><Link href="/sobre" className="hover:text-gray-300">Sobre</Link></li>
          <li><Link href="/login" className="hover:text-gray-300">Login</Link></li>
          <li><Link href="/superadmin" className="hover:text-gray-300">Superadmin</Link></li>
          
        </ul>
      </div>
    </nav>
  );
}
