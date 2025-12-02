const form=document.getElementById("form");
const nameInput=document.getElementById("name");
const priceInput=document.getElementById("price");

const tableBody = document.getElementById("tableBody");
var stt = 1;

form.addEventListener("submit",(event)=>{
    event.preventDefault();
const productName= nameInput.value.trim();
console.log(nameInput,"nameInput");
if(!nameInput) return;
const productPrice= priceInput.value.trim();
console.log(priceInput,"priceInput");
if(!priceInput) return;

const tableName=document.createElement("tr");
tableName.innerHTML=`
<td>${stt}</td>
<td><span class="NameInput" >${productName}</span></td>`;
stt++;
const tablePrice=document.createElement("td");
tablePrice.innerHTML=`
<span class="priceInput">${productPrice}</span>`;
tableName.appendChild(tablePrice);
const tableDelete=document.createElement("button");
tableDelete.innerHTML = 'delete';
tableDelete.className = "delete";
const tableDeleteCell = document.createElement("td");
tableDeleteCell.appendChild(tableDelete);
tableName.appendChild(tableDelete);

tableBody.appendChild(tableName);

// const deleteBtn=document.querySeletor(".delete");
tableDelete.addEventListener("click",()=>{
    tableName.remove();tablePrice.remove;tableDelete.remove
});

// ActionOntable.appendChild(deleteBtn);
nameInput.value="";
nameInput.focus();


})

// <a href="": chuyển trang
//querySlector: chọn phần tử đầu tiên mà nó lấy đc hoặc dùng row.children[0]/children[1].textContent

const userName=localStorage.getItem('tableName');
console.log('tableName');

