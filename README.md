## Relatório
Criei o código seguindo as etapas indicadas e depois disso reestruturei as pastas da seguinte forma:

<p align="center">
  <img width="30%" src="https://github.com/vict0rcarvalh0/Angular-Page/blob/main/assets/angular1.png">
</p>

Rodando a aplicação por meio do comando `ng serve` e abrindo a aplicação na porta padrão 4200:

<p align="center">
  <img width="50%" src="https://github.com/vict0rcarvalh0/Angular-Page/blob/main/assets/angular2.png">
</p>

## Aprendizados
### Uso da CLI do Angular
Aprendi que a CLI(Command Line Interface) do Angular oferece diversas features que facilitam o desenvolvimento, como o `ng new <projeto>` que foi o comando que utilizei ao iniciar o desenvolvimento do código, que cria e configura um projeto Angular básico dentro de uma pasta com o nome definido no comando. Outro comando que obtive o conhecimento foi o `ng generate component exemplo`, que cria os arquivos necessários para a criação de um componente, dentro de uma pasta, incluindo o HTML, CSS e TS, de forma que atualiza automaticamente o app.module para conectar o componente a aplicação com maior facilidade. Aprendi também o comando `ng serve`, que é um comando para iniciar a aplicação localmente e o `ng build`, que compila a aplicação para um ambiente de produção e insere os arquivos compilados em um diretório "dist" no projeto.

### Estrutura de pastas no Angular
Outro aprendizado foi a estrutura de pastas, que possui a seguinte estrutura base:
```
- /src
  - /app
    - /components
      - componente1.component.ts
      - componente2.component.ts
      ...
    - /services
      - service1.service.ts
      - service2.service.ts
      ...
    - app.module.ts
    - app.component.ts
    - app.component.html
    - app.component.css
  - index.html
- angular.json
- package.json
- tsconfig.json
```
### Criação e exibição de novo componente
Com a finalidade de aprendizado, eu criei um novo componente e exibi na tela junto com os outros que o artigo inclui. Portanto, para criar um novo componente, utilizei o comando `ng generate example-component` e depois disso, criei um html simples que inclui uma uma imagem e dois textos. Depois disso, copiei o selector do componente criado e adicionei no template do `app.component.ts`.

<p align="center">
  <img width="80%" src="https://github.com/vict0rcarvalh0/Angular-Page/blob/main/assets/angular3.png">
</p>

O resultado foi esse:

<p align="center">
  <img width="50%" src="https://github.com/vict0rcarvalh0/Angular-Page/blob/main/assets/angular4.png">
</p>
