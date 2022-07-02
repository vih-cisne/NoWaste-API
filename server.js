const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  users: 600,
  foods: 640,
  cart: 600
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);

/*Rota de Cadastro - Pessoa: /users - POST
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
}
Rota de Cadastro - ONG/Projeto: /signin/user - POST
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

----

{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsT1JHQHRlc3RlLmNvbSIsImlhdCI6MTY1Njc3MDI4OCwiZXhwIjoxNjU2NzczODg4LCJzdWIiOiIyIn0.5p9OexSJlG4KilU-Za81l3xwpIpzsuqQj7BkpT0Dlgk",
	"user": {
		"email": "emailORG@teste.com",
		"account": "buyer",
		"type": "PJ",
		"info": {
			"nomeDoProjeto/RazaoSocial": "LaraCompany",
			"responsavel": "Lara",
			"CNPJ": "000.000.000-00",
			"contato": "4002-8922",
			"endereço": {
				"rua": "Das Laranjeiras",
				"numero": 540,
				"complemento": "",
				"bairro": "Qualquer",
				"CEP": "62000-000"
			},
			"formasdePagamento": {
				"dinheiro": "",
				"pix": "chave"
			}
		},
		"id": 2
	}
}

LOGIN *-----------**

email incorreto = "Cannot find user"
passwrod incorreto = "Incorrect password"


Rota de Cadastro - Restaurante: /signin/seller - POST

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

CART **--------****

POST / PATCH/ DELETE

FOODs  *----------------****

POST --- /users/:userId/foods

{
	"nomeDoProduto": "Vegetables",
	"descricao":  "Nothing in the moment",
	"precoDeCusto": 3,
   "precoDeRevenda": 4 
}
answer ------*-*
{
	"nomeDoProduto": "Vegetables",
	"descricao": "Nothing in the moment",
	"precoDeCusto": 3,
	"precoDeRevenda": 4,
	"userId": "3",
	"id": 1
}

PATCH --- /users/:userId/foods



*/
