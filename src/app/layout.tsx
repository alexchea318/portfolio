import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { siteUrl, links } from "@/lib/config";
import { meHero } from "@/content/site";

const NAME = "Александр Чеченев";
// Pitch goes in the title; JOB_TITLE stays a real job title for JSON-LD.
const PITCH = "сделаю сайт или сервис за неделю";
const JOB_TITLE = "Разработчик сайтов и сервисов";
const DESC =
  "Делаю сайты, интернет-магазины, личные кабинеты и чат-боты. Один человек на весь проект: от идеи до работающего сайта — за неделю. Санкт-Петербург, удалённо.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: `${NAME} — ${PITCH}`,
  description: DESC,
  alternates: {
    canonical: "/",
    languages: { ru: "/", en: "/en/" },
  },
  openGraph: {
    title: `${NAME} — ${PITCH}`,
    description: DESC,
    type: "profile",
    images: [meHero.src],
  },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  jobTitle: JOB_TITLE,
  url: `${siteUrl()}/`,
  email: links.email,
  address: { "@type": "PostalAddress", addressLocality: "Saint Petersburg", addressCountry: "RU" },
  sameAs: [links.linkedin, links.telegram, links.vk],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
