# Projeto-Final-CESAE

### Clonar repositório

1. Se necessário, instalar o Node.js. Se não tiver o *performant node pagackage manager* instalado, instale-o com o comando `npm install -g pnpm`.

2. No VSCode, selecionar help->Welcome e clicar em 'Clone Git Repository'. Quando for pedido o link, adicionar o seguinte link: [GitHub Eduardo](https://github.com/EdMorggit/Projeto-Final-CESAE).

3. Instalar as dependências não incluídas no repositório (e.g., node_modules) através da instrução `pnpm install` em linha de comandos ou terminal do VSCode.

### Iniciar o servidor da aplicação

1. Introduzir o comando `pnpm dev`.
    Nota: No caso de ser devolvido um erro, verificar o diretório da aplicação no terminal do VSC ou na linha de comandos. Se necessário, utilizar cd para alterar para o diretorio correto que tem de terminar em 'nextjs-campeonato-btt'.

2. Para parar, premir `ctrl` + `c` (Windows/Linux) ou `command`+ `c`(Mac).

### Criar páginas

Para criar uma nova página e uma rota para essa página é necessário recorrer ao sistema de 'rotas aninhadas': cria-se uma nova pasta com o nome da página (e.g., 'home') e, dentro dessa nova pasta, um ficheiro page.tsx. Esse ficheiro exporta um componente de React e torna a rota acessível (seguindo o mesmo exemplo, '/home'). Para criar rotas aninhadas, cria-se uma pasta e respetivo ficheiro page (e.g., /home/contactos/page.tsx).

## Estrutura da página

Login (criação de conta e login)
Formulários
    form-participante
Página da prova
Página principal (home)