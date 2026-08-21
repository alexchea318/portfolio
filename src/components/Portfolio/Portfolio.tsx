"use client";

import type { Locale } from "@/lib/i18n";
import { LangProvider } from "@/components/primitives/T";
import { Cursor } from "@/components/Cursor";
import { useInteractions } from "@/hooks/interactions";
import { useViewportLock } from "@/hooks/useViewportLock";
import { bands } from "@/content/site";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Band } from "@/components/sections/Band";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import styles from "./portfolio.module.scss";

function Shell() {
  useInteractions();
  useViewportLock();
  return (
    <div className={styles.portfolio}>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Band text={bands.work} duration={62} />
        <Work />
        <Services />
      </main>
      <Contact />
    </div>
  );
}

export function Portfolio({ initialLang }: { initialLang: Locale }) {
  return (
    <LangProvider initial={initialLang}>
      <Shell />
    </LangProvider>
  );
}
