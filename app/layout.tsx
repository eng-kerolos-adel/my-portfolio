import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Kerolos Adel | Professional Web Developer",
    template: "%s | Kerolos Adel",
  },
  description:
    "This is the personal portfolio of Kerolos Adel – a professional front-end. Discover his latest web projects, and online courses in HTML, CSS, and JavaScript.",
  keywords: [
    "Kerolos Adel",
    "Personal Portfolio",
    "Web Developer",
    "Frontend Developer",
    "HTML CSS JavaScript",
    "Programming Courses",
    "Web Design",
    "UI UX Developer",
    "Responsive Websites",
    "Clean Code",
    "SEO Optimized Portfolio",
    "Web Projects",
    "Online Courses",
    "Code Examples",
    "Coding Tutorials",
    "Modern Portfolio",
    "Freelance Developer",
    "Software Engineer",
    "Web Creator",
    "Tech Educator",
    "كيرلس عادل",
    "بورتفوليو",
    "معرض أعمال",
    "مطور مواقع",
    "مبرمج مواقع",
    "مطور واجهات",
    "تصميم مواقع",
    "برمجة",
    "تطوير مواقع",
    "كورسات برمجة",
    "تعليم HTML",
    "تعليم CSS",
    "تعليم JavaScript",
    "مشاريع ويب",
    "مشاريع تخرج",
    "موقع شخصي",
    "بورتفوليو مطور",
    "مطور حر",
    "مواقع متجاوبة",
    "تصميم نظيف",
    "موقع سريع",
    "مبرمج حر",
    "مطور مستقل",
  ],
  authors: [{ name: "Kerolos Adel" }],
  creator: "Kerolos Adel",
  publisher: "Kerolos Adel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kerolos-adel.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kerolos-adel.vercel.app",
    title: "Kerolos Adel's Portfolio",
    description:
      "Welcome to my website. This website talks in detail about me, My Projects, the services I provide, my skills, etc.",
    siteName: "Kerolos Adel Portfolio",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "Kerolos Adel Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerolos Adel's Portfolio",
    description:
      "Welcome to my website. This website talks in detail about me, My Projects, the services I provide, my skills, etc.",
    images: ["/"],
    creator: "@kerolos_adel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "LFEZoVO9eWOt-aK-ReodWx0JuVvh7pH5riWOMFKBOKw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SpeedInsights />
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
