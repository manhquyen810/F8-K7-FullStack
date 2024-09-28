import "./globals.css";
import Header from "./HomePage/Header";

export const metadata = {
  title: "F88: Chào mừng đến với F88",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}