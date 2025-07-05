// src/app/components/ui/GlobalSpotlightEffect.tsx - VERSÃO ATUALIZADA

"use client";

import React, { useState, useEffect } from "react";

export const GlobalSpotlightEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // 1. Adicionamos um estado para saber o tema atual ('light' ou 'dark')
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Função para atualizar a posição do mouse
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 2. Lógica para detectar o tema na primeira vez que a página carrega
    const checkInitialTheme = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setTheme(isDarkMode ? 'dark' : 'light');
    };
    checkInitialTheme();

    // 3. Usamos um MutationObserver para "ouvir" mudanças na classe do <html>
    //    Isso garante que o efeito mude de cor quando o botão de tema é clicado.
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDarkMode = (mutation.target as HTMLElement).classList.contains("dark");
          setTheme(isDarkMode ? 'dark' : 'light');
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    // Função de limpeza
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect(); // Desconecta o observador
    };
  }, []);

  // 4. A cor do holofote agora é escolhida com base no estado do tema
  const spotlightColor =
    theme === 'dark'
      ? 'rgba(163, 186, 255, 0.15)' // Cor clara para o tema escuro
      : 'rgba(18, 27, 51, 0.08)';  // Cor escura para o tema claro

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(circle 600px at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
      }}
    />
  );
};