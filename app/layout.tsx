import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Barbearia Pedro Paulo',
  description: 'Cortes modernos, barba perfeita e clima carioca em São Gonçalo.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
