# Projeto-Final-CESAE

Nota: Instruções para elaborar um ficheiro readme: [Como criar um readme](https://medium.com/@sumudithalanz/the-art-of-crafting-an-effective-readme-for-your-github-project-cf425a8b1580).

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

### Estilização de uma página

* Dentro do elemento que se pretende estilizar (div, form, h1, etc.), incluir as instruções de estilização dentro da propriedade `className=""`.

* Para ordenar os items, pode utilizar-se a propriedade flex. Por exemplo, `className="flex flex-col items-center"` (neste caso, os items são dispostos em coluna ao centro).
  Para mais opções relativos a containers, ver [TailwindCSS Flex/Grid](https://tailwindcss.com/docs/flex).

* Cor de fundo: utilizar a propriedade bg-cor-gradiente. Por exemplo, `className="bg-blue-900"`.
  A paleta de cores pré-definidas está disponível em [TailwindCSS Colors](https://tailwindcss.com/docs/customizing-colors).

* Edição de texto:
    - Exemplos de fontes: `className="font-sans"`, `className="font-serif"`, `className="font-mono"`. Ver mais opções na documentação em Font Family.
    - Exemplo de **cor do texto**: `className="text-amber-200"`. Ver mais opções na documentação em Text Color;
    - Exemplo de **dimensão do texto**: `className="text-1xl"`. Ver mais opções na documentação em Font Size;
    - Exemplo de **realce do texto**: `className="font-bold"`. Ver mais opções na documentação em Font Weight;
    - **_Documentação sobre edição de texto_**: [TailwindCSS Fonts](https://tailwindcss.com/docs/font-family).

* Margin e padding:
    - Exemplo para margem em cima (margin top) e margem em baixo (margin bottom): `className="mt-10 mb-5"`.
    - **_Documentação sobre margin e padding_**: [TailwindCSS margin e padding](https://tailwindcss.com/docs/padding).

* Para arredondar o background de um texto, formulário, etc., utilizar a propriedade rounded. Exemplo: `className="bg-blue-900 rounded-lg"`.
    - **_Documentação sobre Border Radius_**: [TailwindCSS Border Radius](https://tailwindcss.com/docs/border-radius).

* Sobre como **inserir uma imagem**, ver [Geeks4Geeks How to Add a Background Image in Next.js?](https://www.geeksforgeeks.org/how-to-add-a-background-image-in-next-js/).

* **_Estilização de formulários_**: [TailwindCSS Forms](https://v1.tailwindcss.com/components/forms).

#### Estilização de elementos comum a diferentes páginas

Pode utilizar-se o ficheiro app\ui\global.css para se estilizar elementos HTML em páginas diferentes, uma vez que esse ficheiro foi importado para o layout da aplicação (app\layout.tsx).
Exemplo:
`input {
  background-color: beige !important; 
  color: black;
}`

**Nota**: se uma determinada estilização não produzir efeitos, provavelmente há outra estilização pré-definida a sobrepôr-se. Nesse caso, utilizar a propriedade `!important`.

## Interação com a base de dados

### Conectar Next.js a MySQL

1. Começar por verificar se está instalada a dependência necessária, mysql2, através do comando `pnpm list mysql2`. Se o resultado for '(empty)', seguir o próximo passo.

2. Instalar a dependência mysql2 através do comando `pnpm install mysql2`.