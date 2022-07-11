# Condicao IF ELSE

### Exemplos

```js
//sem bloco de comandos
if(idade >= 18)
 console.log("pode")
else
console.log("nao pode")

//Com bloco de comando
if(idade >= 18){
 console.log("pode")
 console.log("Qual o seu pedido?")}
else{
console.log("nao pode")
console.log("volte futuramente")}

// Com mais de uma checagem

if(idade >= 35){
    console.log("pode")
    console.log("Qual o seu pedido?")}
else if(idade >= 18){
    console.log("Pode")
    console.log("mostre a indentidade")}
else{
   console.log("nao pode")
   console.log("volte futuramente")}

// Com cobinacao de logica AND

if(idade >= 18 && idade <= 70){
    console.log("pode")
    console.log("Qual o seu pedido?")}
else{
   console.log("nao pode")
   console.log("volte futuramente")}


// Com combinacao logica OR
if(idade >= 18 || idade > 70){
    console.log("pode")
    console.log("Qual o seu pedido?")}
else{
   console.log("nao pode")
   console.log("volte futuramente")}