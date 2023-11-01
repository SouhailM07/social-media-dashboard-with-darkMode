import { Inter } from "next/font/google";
import "@/styles/globals.css";
import ThemeContextProvider from "./contexts/ThemeContextProvider";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata = {
  title: "social-media-dashboard",
  description: "Generated by Shadow",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
