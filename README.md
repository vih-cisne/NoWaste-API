# NoWaste


URL: https://no-waste-project.herokuapp.com


## Endpoints

Existem 3 endpoints que podem ser utilizados para cadastro e 2 endpoints que podem ser usados para login. Além de um endpoint para acessar a lista de alimentos e outro para acessar à lista (do carrinho se for um comprador ou de produtos se for um vendedor) privada do usuário.

# Rotas que não precisam de autenticação

* ## Cadastro

POST /register <br/>
POST /signup <br/>
POST /users

Qualquer um desses 3 endpoints irá cadastrar o usuário na lista de "Users", temos três "tipos" de usários: 

#### Comprador Pessoa Física: 
````
{
"account": "buyer",
"type": "PF",
"email": "email@teste.com",
"password": "nowaste@1",
"info":{
	"nome": "Lara",
	"sobrenome": "Ponciano" ,
	"CPF": "000.000.000-00",
	"contato": "4002-8922",
	"endereço":{
		"rua": "Das Laranjeiras",
		"numero": 522,
		"complemento": "",
		"bairro": "Qualquer",
		"CEP": "62000-000"
	},
"formasdePagamento":{
		"dinheiro": "",
		"pix": "chave"
	}
}
````

#### Comprador Organização: 

````
{
"account": "buyer",
"type": "PJ",
"email": "emailORG@teste.com",
"password": "nowaste@2",
"info":{
	"nomeDoProjeto/RazaoSocial": "LaraCompany",
	"responsavel": "Lara" ,
	"CNPJ": "000.000.000-00",
	"contato": "4002-8922",
	"endereço":{
		"rua": "Das Laranjeiras",
		"numero": 540,
		"complemento": "",
		"bairro": "Qualquer",
		"CEP": "62000-000"
	},
"formasdePagamento":{
		"dinheiro": "",
		"pix": "chave"
	}
}
}
````

#### Vendedor:

````
{
"account": "seller",
"type": "PJ",
"email": "emailRES@teste.com",
"password": "nowaste@3",
"info":{
	"razaoSocial": "LaraRestaurant",
	"responsavel": "Lara" ,
	"CNPJ": "000.000.000-00",
	"contato": "4002-8922",
	"endereço":{
		"rua": "Das Laranjeiras",
		"numero": 545,
		"complemento": "",
		"bairro": "Qualquer",
		"CEP": "62000-000"
	},
		"formasdePagamento": {
				"dinheiro": "",
				"pix": "chave"
		}
}
}
````




* ## Login

POST /login <br/>
POST /signin

Qualquer um desses 2 endpoints pode ser usado para realizar login com um dos usuários cadastrados na lista de "Users". Precisa passar apenas o email e password e poderá receber alguma dessas respostas:

#### email incorreto  
````
"Cannot find user"
````

#### password incorreto 
````
"Incorrect password"
````

#### successo 
````
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQHRlc3RlLmNvbSIsImlhdCI6MTY1Njc3MzU3NiwiZXhwIjoxNjU2Nzc3MTc2LCJzdWIiOiIxIn0.FPaOPJXH9IwczDoWUYea23k87sIAtX3ZVJoiR9MHAE8",
	"user": {
		"email": "email@teste.com",
		"account": "buyer",
		"type": "PF",
		"info": {
			"nome": "Lara",
			"sobrenome": "Ponciano",
			"CPF": "000.000.000-00",
			"contato": "4002-8922",
			"endereço": {
				"rua": "Das Laranjeiras",
				"numero": 522,
				"complemento": "",
				"bairro": "Qualquer",
				"CEP": "62000-000"
			},
			"formasdePagamento": {
				"dinheiro": "",
				"pix": "chave"
			}
		},
		"id": 1
	}
}
````



# Rotas que precisam de autenticação

* ## foods

GET /foods

Esse endpoint pode ser usado para receber a lista de todos os alimentos à venda.

POST /users/:userId/foods <br/>
DELETE /foods/:idFood <br/>
PATCH /foods/:idFood <br/> 
GET /users/:userId/foods <br/> 

O userId se refere ao id do usuário logado. Para o DELETE e PATCH é preciso passar o id do alimento como parâmetro do endpoint. O método GET não necessita body, apenas adicionar no endpoint o id do usuário para fazer a filtragem com o query params.

Obs: Se o userId não for o referente ao id do usuário logado ou o id do alimento não for de um alimento pertencente ao usuário logado, a seguinte mensagem de erro será recebida:

````
"Private resource creation: request body must have a reference to the owner id"
````

Ex: 

#### POST

Envio: 
````

{
	"nomeDoProduto": "Vegetables",
	"descricao":  "Nothing in the moment",
	"precoDeCusto": 3,
   "precoDeRevenda": 4 
}

````

Resposta:
````
{
	"nomeDoProduto": "Vegetables",
	"descricao": "Nothing in the moment",
	"precoDeCusto": 3,
	"precoDeRevenda": 4,
	"userId": "3",
	"id": 1
}

````



* ## cart

POST /users/:userId/cart <br/>
DELETE /cart/:idProduct <br/>
PATCH /cart/:idProduct <br/> 
GET /users/:userId/cart <br/> 

O userId se refere ao id do usuário logado. Para o DELETE e PATCH é preciso passar o id do produto como parâmetro do endpoint. O método GET não necessita body, apenas adicionar no endpoint o id do usuário para fazer a filtragem com o query params.

Obs: Se o userId não for o referente ao id do usuário logado ou o id do alimento não for de um alimento pertencente ao usuário logado, a seguinte mensagem de erro será recebida:

````
"Private resource creation: request body must have a reference to the owner id"
````

Ex: 

#### POST

Envio: 
````

{
	"nomeDoProduto": "Vegetables",
	"descricao": "Nothing in the moment",
	"preco": 4
}

````

Resposta:

````
{
	"nomeDoProduto": "Vegetables",
	"descricao": "Nothing in the moment",
	"preco": 4,
	"userId": "2",
	"id": 3
}

````





