import type { Metadata } from "next";
import { Portfolio } from "@/components/Portfolio";
import { meHero } from "@/content/site";

const NAME = "Alexander Chechenev";
const PITCH = "a site or service, built in a week";
const DESC =
  "I build websites, online stores, client portals and chatbots. One person for the whole project: from idea to a working site in a week. Saint Petersburg, remote.";

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
    images: [meHero.src],
  },
};

export default function HomeEn() {
  return <Portfolio initialLang="en" />;
}
