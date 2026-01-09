import { cookies } from "next/headers";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Quicksand } from "next/font/google";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import "./globals.css";
import "@/styles/layout.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header/Header";
import { SessionProvider } from "@/components/providers/SessionProvider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Haru Garden",
    template: "%s • Haru Garden",
  },
  description: "A virtual OS world created by Haru.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Haru Garden",
    description: "A virtual OS world created by Haru.",
    url: "https://haru.garden",
    siteName: "Haru Garden",
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${quicksand.variable} antialiased`}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider defaultOpen={defaultOpen}>
              <div className="border-grid flex flex-1 flex-col">
                <Header />
                <main className="mx-4 py-4 md:mx-8 lg:mx-12">{children}</main>
              </div>
              <AppSidebar />
            </SidebarProvider>
          </ThemeProvider>
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
