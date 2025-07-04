import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import { useTranslations } from 'next-intl';


export const ContactSection = () => {
  const t = useTranslations();
  const contacts = [
    {
      icon: <Mail size={24} />,
      title: t('contact_email_title'),
      info: 'jonas.eng.software@gmail.com',
      href: 'mailto:jonas.eng.software@gmail.com',
    },
    {
      icon: <Github size={24} />,
      title: t('contact_github_title'),
      info: '@Jonas-eng-21', 
      href: 'https://github.com/Jonas-eng-21',
    },
    {
      icon: <Linkedin size={24} />,
      title: t('contact_linkedin_title'),
      info: 'in/jonas-soares-824a8a361', 
      href: 'https://www.linkedin.com/in/jonas-soares-824a8a361/', 
    },
    {
      icon: <MessageSquare size={24} />,
      title: t('contact_whatsapp_title'),
      info: t('contact_whatsapp_cta'),
      href: 'https://wa.me/5587991364331', 
    },
  ];

  return (
    <section id="contato" className="w-full bg-[var(--background)] py-24 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('contact_title')}
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)]">
            {t('contact_subtitle')}
          </p>
        </div>
        <div className="mx-auto max-w-3xl rounded-lg border border-[var(--border)] bg-[var(--surface)] p-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {contacts.map((contact) => (
              <a
                key={contact.title}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg p-4 transition-colors hover:bg-[var(--border)]"
              >
                <div className="text-[var(--accent)]">{contact.icon}</div>
                <div>
                  <h3 className="font-semibold">{contact.title}</h3>
                  <p className="text-sm text-[var(--foreground-muted)]">{contact.info}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};