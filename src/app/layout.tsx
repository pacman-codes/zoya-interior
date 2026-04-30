import type { Viewport } from "next";
import "./globals.css";
import { fontDisplay, fontBody } from "./fonts";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${fontDisplay.variable} ${fontBody.variable}`}>
        {children}
      </body>
    </html>
  );
}
