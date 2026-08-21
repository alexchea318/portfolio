import type { Metadata } from "next";
import { Portfolio } from "@/components/Portfolio";
import { ogEn } from "@/content/site";

const NAME = "Alexander Chechenev";
const PITCH = "a site in a week, turnkey";
const DESC =
  "Websites, online stores, client portals and chatbots, turnkey. One person for the whole project: from idea to launch in a week. Saint Petersburg, remote.";

export const metadata: Metadata = {
  title: `${NAME} — ${PITCH}`,
  description: DESC,
  alternates: {
    canonical: "/en/",
    languages: { ru: "/", en: "/en/" },
  },
  openGraph: {
    title: `${NAME} — ${PITCH}`,
    description: DESC,
    type: "profile",
    images: [{ url: ogEn.src, width: ogEn.width, height: ogEn.height, alt: `${NAME} — ${PITCH}` }],
  },
  twitter: { card: "summary_large_image", images: [ogEn.src] },
};

export default function HomeEn() {
  return <Portfolio initialLang="en" />;
}
