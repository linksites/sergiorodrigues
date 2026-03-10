# Sérgio Rodrigues Advocacia - React + Tailwind

Projeto institucional em React com páginas independentes, identidade visual preta com detalhes dourados e formulário de contato integrado ao WhatsApp.

## Tecnologias
- React 18
- React Router DOM (HashRouter para compatibilidade com GitHub Pages)
- Tailwind CSS
- Vite

## Páginas
- `#/` - Início
- `#/sobre` - Perfil e metodologia
- `#/ciencias-criminais` - Atuação criminal
- `#/contato` - Canais e pré-atendimento

## Como executar localmente
1. Instale as dependências:
```bash
npm install
```
2. Rode em desenvolvimento:
```bash
npm run dev
```
3. Gere build de produção:
```bash
npm run build
```

## Publicação no GitHub Pages
Este projeto já está configurado para deploy automático por GitHub Actions em `.github/workflows/deploy-pages.yml`.

1. No GitHub, vá em `Settings > Pages`.
2. Em `Build and deployment`, escolha `Source: GitHub Actions`.
3. Faça `git push` na branch `main`.
4. Aguarde o workflow `Deploy to GitHub Pages` finalizar.

## Personalizações recomendadas
- Dados institucionais: `src/content/office.js`
- Página Sobre: `src/pages/AboutPage.jsx`
- Página Ciências Criminais: `src/pages/CriminalLawPage.jsx`
- Cores e tema: `tailwind.config.js` e `src/index.css`