function create(text){
    let p=document.createElement("p");
    p.innerHTML=text;
    document.body.appendChild(p);
}
for (let i=1; i<=10; i++){
    create(`${i}`);
} 

