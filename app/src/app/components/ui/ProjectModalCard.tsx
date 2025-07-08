// src/app/components/ProjectModalCard.tsx
"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";

interface Project {
  title: string;
  description: string;
  tech: string;
  // Opcional: adicione um link para o seu projeto nos arquivos de tradução
  href?: string;
}

export const ProjectModalCard = ({ project }: { project: Project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations();

  return (
    <>
      <div
        onClick={onOpen}
        className="flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background)] shadow-lg transition-transform hover:-translate-y-1"
      >
        <div className="h-48 w-full bg-[var(--surface)]" />
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-3 flex-1 text-sm text-[var(--foreground-muted)]">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.split(', ').map((tech: string) => (
              <span
                key={tech}
                className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--accent)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- INÍCIO DAS MUDANÇAS --- */}
      <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        isCentered 
        size="xl"
        // 1. Adicionada a animação 'slideInBottom'
        motionPreset='slideInBottom'
      >
        {/* 2. Removido o backdropFilter para um visual mais limpo */}
        <ModalOverlay bg="blackAlpha.700" />
        {/* 3. Fundo alterado para var(--background) para melhor contraste */}
        <ModalContent bg="var(--background)" color="var(--foreground)" borderRadius="lg">
          <ModalHeader borderBottomWidth="1px" borderColor="var(--border)">
            {project.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody py={6}>
            <p className="mb-4 text-[var(--foreground-muted)]">
              {project.description}
            </p>
            <h4 className="mb-2 font-semibold">Tecnologias Utilizadas:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.split(', ').map((tech: string) => (
                <span
                  key={tech}
                  className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--accent)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ModalBody>
          <ModalFooter borderTopWidth="1px" borderColor="var(--border)">
            {/* 4. Adicionado um botão secundário para o link do projeto */}
            <Button 
              as="a"
              href={project.href}
              target="_blank"
              variant='ghost' 
              mr={3} 
              hidden={!project.href} // O botão só aparece se houver um link
            >
              {t('modal_view_project_button')}
            </Button>
            <Button 
              onClick={onClose} 
              bg="var(--accent)" 
              color="var(--background)"
              _hover={{ bg: "var(--accent)", opacity: 0.8 }}
            >
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* --- FIM DAS MUDANÇAS --- */}
    </>
  );
};
