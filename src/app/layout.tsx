import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gita Global Family",
    template: "%s | Gita Global Family",
  },
  description:
    "Gita Global Family, led by Sri BramhBodhi, shares the Bhagavad Gita's timeless teachings to inspire selfless service, uplift communities, and empower underprivileged lives through education.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://gitaglobalfamily.org"),
  openGraph: {
    type: "website",
    title: "Gita Global Family",
    description:
      "Gita Global Family, led by Sri BramhBodhi, shares the Bhagavad Gita's timeless teachings to inspire selfless service, uplift communities, and empower underprivileged lives through education.",
    images: ["/images/og-image.jpeg"],
    siteName: "Gita Global Family",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gita Global Family",
    description:
      "Gita Global Family, led by Sri BramhBodhi, shares the Bhagavad Gita's timeless teachings to inspire selfless service, uplift communities, and empower underprivileged lives through education.",
    images: ["/images/og-image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CYVZ64QW4T"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CYVZ64QW4T');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
