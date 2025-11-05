import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Next Routing Workshop",
};

// herunder fra component start til return vises der hvordan man fortæller layoutet at typen af children er React.ReactNode
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem", borderBottom: "1px solid #ddd"}}>
          
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link href="/">Home</Link>

            <Link href="/about">About</Link>

            <Link href="/contact">Contact</Link>

            <Link href="/teachers">Teachers</Link>
            
            <Link href="/students">Students</Link>
          </nav>

        </header>

        <main style={{ padding: "1rem", flex: 1 }}>{children}</main>

        <footer>

          <nav style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Link href="/">Home</Link>

            <Link href="/about">About</Link>

            <Link href="/contact">Contact</Link>

            <Link href="/teachers">Teachers</Link>
            
            <Link href="/students">Students</Link>
          </nav>

          <p style={{ padding: "1rem", textAlign: "center" }}>
            &copy;{new Date().getFullYear()} Next Routing Workshop
          </p>
        </footer>

      </body>
    </html>
  );
}
