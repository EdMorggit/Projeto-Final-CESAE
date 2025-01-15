import '@/app/ui/global.css'; 
// Importação do ficheiro global.css para que todas as páginas tenham acesso ao CSS (AS).

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
