import chalk from 'chalk';
import pegaArquivo from './app.js';

const caminho = process.argv[2];

async function processaTexto(caminhoDeArquivo) {
    if (!caminhoDeArquivo) {
        console.log(chalk.red("Erro: Insira o caminho do arquivo como argumento."));
        console.log(chalk.yellow("Exemplo: npm run cli ./arquivos/texto.md"));
        return;
    }
    
    const resultado = await pegaArquivo(caminhoDeArquivo);
    console.log(chalk.green('Lista de links extraídos:'));
    console.log(resultado);
}

processaTexto(caminho);
