import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "OpenInApp-ReactJS-AbhinavTomar-Internship-Assignment",
  description: "OpenInApp-ReactJS-AbhinavTomar-Internship-Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F8FAFF]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}