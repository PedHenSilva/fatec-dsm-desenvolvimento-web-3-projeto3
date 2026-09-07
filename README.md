# Projeto 03 - Desenvolvimento Web III

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## Sobre o Projeto
Este projeto é uma ferramenta de Interface de Linha de Comando (CLI) desenvolvida em Node.js para a disciplina de Desenvolvimento Web III. Ele unifica duas ferramentas principais:
1. Um extrator de links a partir de arquivos de texto (`.md`).
2. Um verificador de **HTTP Status Code** para validação de disponibilidade de sites em tempo real.

O projeto foi construído dando continuidade ao código desenvolvido em sala de aula, mantendo a estrutura modularizada e o tratamento de erros.

## Funcionalidades
- **Extração de Links:** Lê arquivos locais usando a biblioteca nativa `fs` e utiliza Expressões Regulares (RegEx) para encontrar e listar URLs em textos.
- **Consulta de Status Code:** Realiza requisições HTTP/HTTPS para um endereço web fornecido pelo usuário via terminal e retorna o status do servidor (ex: `200 - OK`, `404 - Not Found`, `500 - Internal Server Error`).
- **Tratamento de Erros:** Respostas visuais no terminal (usando a biblioteca `chalk`) para cenários como arquivos inexistentes, sites inválidos, falhas de conexão ou falta de parâmetros.

## Pré-requisitos
- [Node.js](https://nodejs.org/) instalado na máquina (versão 22 ou superior recomendada).

## Instalação

   ```bash
   git clone [https://github.com/PedHenSilva/PedHenSilva-fatec-dsm-desenvolvimento-web-3-projeto3](https://github.com/PedHenSilva/PedHenSilva-fatec-dsm-desenvolvimento-web-3-projeto3)
   cd fatec-dsm-desenvolvimento-web-3-projeto3
   npm install
   ```

## Como executar
   
   1. Consultar HTTP Status Code (Novo Recurso)
   ```bash
   npm run teste [https://www.google.com](https://www.google.com)
   ```

   2. Extrair Links de Arquivos
   ```bash
   npm run teste ./caminho/do/seu/arquivo.md
   ```