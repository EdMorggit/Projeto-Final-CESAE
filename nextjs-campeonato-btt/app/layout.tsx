import '@/app/ui/global.css'; 
// Importação do CSS global

import Navbar from "@/app/components/navbar"; 
// Importação da Navbar

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Navbar adicionada aqui, antes do conteúdo principal */}
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}

