import Link from "next/link";
import "./globals.css";
import {Button, MantineProvider} from '@mantine/core';
import "@mantine/core/styles.css";

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

            <Link href="/courses">Courses</Link>
          </nav>

        </header>

        <main style={{ padding: "1rem", height: "100vh" }}>{children}</main>

        <footer style={{padding: "1rem", borderTop: "1px solid #ddd", paddingTop: "5rem", paddingBottom: "5rem", fontWeight: "bold", textAlign: "center"}}>
          
          <nav style={{ display: "flex", gap: "1rem" , justifyContent: "center", marginBottom: "1rem" }}>
            <Link href="/">Home</Link>

            <Link href="/about">About</Link>

            <Link href="/contact">Contact</Link>

            <Link href="/teachers">Teachers</Link>
            
            <Link href="/students">Students</Link>

            <Link href="/courses">Courses</Link>
          </nav>

          <p>
            &copy;{new Date().getFullYear()} Next Routing Workshop - Persian 
          </p>
        </footer>
        
      </body>
    </html>
  );
}
