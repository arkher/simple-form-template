# Validate Password Form

## Overview sobre o projeto

Neste projeto, foram utilizadas as tecnologias: `Vite js`, `React`, `typescript`, `Formik` em conjunto com `Yup` (Para validações de formulários), além da biblioteca `react-testing-library` para testes unitários. Foi utilizado também o framework css `Tailwind` para auxiliar na criação de componentes e customização por css com suporte do pós-processador `postcss`. Para realizar requisições a APIs, foi utilizada a biblioteca `Axios` em conjunto com uma estrutura onde a configuração da API é feita independente da chamada dos services que, por sua vez, também é independente do formato do endpoint utilizado.

## Como executar

Para rodar o projeto, execute os seguintes comandos:
- Instalação de pacotes: ```npm install``` ou ```yarn```
- Criação de um arquivo de environment: Crie um arquivo chamado ```.env``` na sua aplicação e adicione a variável ```VITE_API_URL``` a exemplo do arquivo ```.env.example``` disponível na raiz do projeto.
- Rode o projeto: ```npm run dev``` ou ```yarn dev```

## Como executar os testes

Para executar os testes unitários e de snapshot, basta digitar ```npm run test``` ou ```yarn test```.