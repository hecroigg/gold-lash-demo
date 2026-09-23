import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gold Lash | Mannheim",
  description: "Lashes & brows in Mannheim.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
