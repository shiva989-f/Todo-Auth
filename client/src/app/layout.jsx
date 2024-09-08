import { Nunito } from "next/font/google"
import "./globals.css";
import AuthProvider from "../components/AuthProvider";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "TODO",
  description: "Easy TODO managing site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {/* covered whole app with auth provider so we can use authentication anywhere in app */}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
