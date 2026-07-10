import "./globals.css"
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className="bg-[#0D0D0D] text-white"
    suppressHydrationWarning>
    <Navbar />
      
      <main>
        {children}
      </main>
    </body>


    </html>
  );
}
