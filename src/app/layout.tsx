import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes'
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import "./globals.css";


export const metadata: Metadata = {
  title: "next-project-site",
  description: "Start building your Next.js project with this template.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className="antialiased"
      >
        <ThemeProvider defaultTheme="system">
        <Menu />
          <div className="flex flex-col justify-between mt-12 sm:mt-16 md:mt-24 lg:mt-32 px-8 relative">
            <main className="max-w-[60ch] mx-auto w-full space-y-6 flex-grow mb-8 mt-8 md:mt-6 lg:-mt-2 xl:-mt-6">
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
