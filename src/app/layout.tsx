import { Menu } from '@/components/Menu';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-surface-0 text-on-surface min-h-screen min-w-screen`}
      >
        <div className="flex gap-3 h-screen">
          <div className="w-60 mt-4 ml-3">
            <Menu />
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <Header />
            <div className="flex h-full pr-8 pb-6">
              <div className="bg-surface-2 flex-1 rounded-2xl overflow-hidden px-8 py-4">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
