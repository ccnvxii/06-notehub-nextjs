import Header from '@/components/Header/Header';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
          <footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
