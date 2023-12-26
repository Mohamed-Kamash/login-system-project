let logOutBtn = document.querySelector('#logOutBtn')
let welcome = document.querySelector('#welcome') // <p> ely haktb feha esm el user ely da5l

let loginedUser=[];//container le esm el user ely da5l

loginedUser=JSON.parse(localStorage.getItem('accepted')) // new local storge key feh esm el user ely da5l

welcome.innerHTML = loginedUser[0]

logOutBtn.addEventListener('click',function(){
    localStorage.removeItem('accepted') //awl lama a3ml logout b3ml remove lel local sotrge ely feha esm el user ely da5el
    document.location.href="../index.html"
})


