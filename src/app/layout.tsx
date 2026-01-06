import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { Montserrat } from 'next/font/google';
import Footer from "@/components/common/Footer";
import GradientHalo from "@/components/ui/GradientHalo";
import ParticleDrift from "@/components/ui/ParticleDrift";
import CursorAura from "@/components/ui/CursorAura";

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
})

export const metadata = { title: "Sadaf Nemani" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${montserrat.variable} font-sans bg-neutral-55 text-neutral-10 min-h-screen relative`}>
        
        <GradientHalo />
        <ParticleDrift />        
        <CursorAura />

        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
