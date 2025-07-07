"use client";

import { useTranslations } from "next-intl";
import { Tabs, TabList, Tab, TabIndicator } from "@chakra-ui/react";

export const AnimatedNavigation = () => {
  const t = useTranslations();

  const navLinks = [
    { href: "#inicio", label: t('nav_home') },
    { href: "#habilidades", label: t('nav_skills') },
    { href: "#experiencia", label: t('nav_experience') },
    { href: "#projetos", label: t('nav_projects') },
    { href: "#contato", label: t('nav_contact') },
  ];


  return (
    <Tabs
      position="relative"
      variant="unstyled"
      className="hidden md:block"
    >
      <TabList>
        {navLinks.map((link) => (
          <Tab
            key={link.label}
            as="a"
            href={link.href}
            _selected={{ color:'var(--comment)'}}
            color='var(--comment-muted)'
            fontWeight="semibold"
            px={6}
            py={4}
          >
            {link.label}
          </Tab>
        ))}
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="2px"
        bg='var(--comment)'
        borderRadius="1px"
      />
    </Tabs>
  );
};
