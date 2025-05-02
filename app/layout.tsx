import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import { SplashScreen } from "@/components/splash-screen";
import { Logo } from "@/components/logo";
import { CustomCursor } from "@/components/custom-cursor";
import { MiniKitProvider } from "@/providers/MiniKitProvider";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = (): Metadata => {
  return {
    title: "SDFM 2520 - Premium Hoodies",
    description: "Premium streetwear and comfortable hoodies",
    other: {
      "fc:frame": JSON.stringify({
        version: process.env.NEXT_PUBLIC_VERSION,
        imageUrl: process.env.NEXT_PUBLIC_IMAGE_URL,
        button: {
          title: `Launch ${process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME}`,
          action: {
            type: "launch_frame",
            name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
            url: process.env.NEXT_PUBLIC_URL,
            splashImageUrl: process.env.NEXT_PUBLIC_SPLASH_IMAGE_URL,
            splashBackgroundColor: `#${process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR}`,
          },
        },
      }),
    },
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <MiniKitProvider>
        <body className={`${inter.className} bg-dark-900 text-gray-100`}>
          <SplashScreen />
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
            <Logo />
          </div>
          {children}
          <footer className="w-full py-6 px-4 bg-dark-600 text-gray-400">
            <div className="container mx-auto text-center">
              <p>&copy; 2023 SDFM 2520. All rights reserved.</p>
            </div>
          </footer>
          <CustomCursor />
        </body>
      </MiniKitProvider>
    </html>
  );
}
