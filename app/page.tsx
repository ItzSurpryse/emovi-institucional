import "./globals.css";

export const metadata = {
  title: "Emovi Sports – Uniformes Esportivos",
  description:
    "Uniformes esportivos personalizados para times, escolas e empresas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-900 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
