import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { I18nProvider } from "@/components/providers/I18nProvider";
import "./globals.scss";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "OZ Coworking Park — Work With Energy",
  description:
    "OZ is a holistic coworking ecosystem where productivity meets life. Workspaces, fitness, dining, and community — all in one vibrant park.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased bg-background`}
    >
      <body className="min-h-full flex flex-col">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
