

É preciso criar o arquivo `.env` na raiz do projeto com o conteúdo do `.env.example` e valores preenchidos.

Execute `npm run local:dev` para subir o serverless localmente.

Faça a request com `http://localhost:3000/?token=teste`, substituindo o valor de `token` de acordo com o que foi preenchido em `VERIFICATION_TOKEN` no arquivo `.env`.


test:
	@docker-compose up test

serverless:
	@docker-compose up start-serverless
