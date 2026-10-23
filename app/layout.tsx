import type { Metadata } from "next";
// Only the neutral foundation lives at the root. Each design version imports
// its own stylesheet from its own route, because Next does not unload a global
// stylesheet on navigation and v1's styles would otherwise bleed into v2.
import "./base.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://revyveholdings.com"),
  title: "Revyve | AI-native holding company for healthcare services",
  description:
    "Revyve owns and operates healthcare services companies, starting with medical billing. We keep the people and customers, and change how the work gets done.",
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Revyve | AI-native holding company for healthcare services",
    description:
      "Revyve owns and operates healthcare services companies, starting with medical billing. We keep the people and customers, and change how the work gets done.",
    type: "website",
    siteName: "Revyve",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
