# Usando React para listar e filtrar receitas
Neste desafio, voc? criar? uma interface para listar e filtrar receitas.

## T?picos
Com esse desafio, voc? aprender?:

- React
- ES6
- Javascript
- Testes unitários

## Requisitos
Voc? precisar? do Nodejs (LTS ou Current) instalado em sua m?quina.

## Detalhes
Dentro da pasta `src`, voc? encontrar? a estrutura b?sica do projeto React. . Al?m disso, todos os arquivos necess?rios j? est?o criados assim como a estrutura em rela??oo a `HTML` e `CSS`. Sua miss?o neste desafio ser? criar a l?gica dos componentes para deix?-lo din?mico.


Dentro da pasta `sample_data`, voc? ter? uma listagem de receitas que dever?o ser impressa na tela.

### Tarefas
1. Renderizar dinamicamente o componente `RecipeItems` para todos os elementos dentro dos dados de amostra;
2. Ao digitar um texto no `input` dentro do component `Navbar`, os `RecipeItems` dever?o ser filtrados, tanto pelo `title` quanto pelo `ingredients`;
3. O filtro dever? ser `case insensitive`;
4. (B?nus) fazer o highlight do texto pesquisado dentro do `title` e `ingredients` utilizando a tag `<mark>`.

### Exemplo
![](https://s3-us-west-1.amazonaws.com/codenation-challenges/react-0/BouncyAfraidDikkops-size_restricted.gif)

### Aten??o
- N?O MUDE o nome dos componentes, eles s?o utilizados para a realiza??o dos testes.
- O componente `App` deve utilizar o `state` chamado `searchString` para realizar o filtro de `RecipeItems`, garantindo assim o funcionamento adequado dos teste.

## Rodando a aplica??o
Na primeira execu??o rodar o comando:
```
npm install
```
Para rodar a aplica??o:
```
npm start
```
