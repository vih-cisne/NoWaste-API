# NoWaste


URL: ""


## Endpoints

Existem 3 endpoints que podem ser utilizados para cadastro e 2 endpoints que podem ser usados para login. Além de um endpoint para acessar a lista de alimentos e outro para acessar à lista (do carrinho se for um comprador ou de produtos se for um vendedor) privada do usuário.

# Rotas que não precisam de autenticação

### Cadastro

POST /register <br/>
POST /signup <br/>
POST /users

Qualquer um desses 3 endpoints irá cadastrar o usuário na lista de "Users", sendo que os campos obrigatórios são os de email e password.
Você pode ficar a vontade para adicionar qualquer outra propriedade no corpo do cadastro dos usuários.


### Login

POST /login <br/>
POST /signin

Qualquer um desses 2 endpoints pode ser usado para realizar login com um dos usuários cadastrados na lista de "Users"



# Rotas que precisam de autenticação

### foods

GET /kdramas

Esse endpoint pode ser usado para receber a lista de alimentos *, mas não é possível alterá-la.*

*Get all companies seller, get all organizations buyers----FILTER*

### foods

POST /users/:userId/myList <br/>
DELETE /myList/:id <br/>
PATCH /myList/:id <br/> 
GET /users/:userId/myList <br/>

Esse endpoint pode ser usado para receber a lista privada de kdramas, onde é possível alterá-la, passando a propriedade userId referente ao id do usuário logado e o objeto completo do kdrama. Para o DELETE e PATCH também é preciso passar o id como parâmetro do endpoint do kdrama que quer alterar. O método GET não necessita body, apenas adicionar no endpoint o id do usuário para fazer a filtragem com o query params.

Obs: Se a propriedade userId não for passada, ou não for a referente ao id do usuário logado, a seguinte mensagem de erro será recebida:

````
"Private resource creation: request body must have a reference to the owner id"
````

Ex: 

#### POST

Envio: 
````

````

Resposta:
````

````





