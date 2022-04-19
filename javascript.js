function jokeapi(url) {
    console.log("deu")
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function jokes(){
    let body = document.querySelector("body");
    let maiin = document.querySelector("main")
    div = document.createElement("div")
    pdelivery = document.createElement("p")
    p = document.createElement("p")
    body.appendChild(maiin)
    maiin.appendChild(div)
    div.appendChild(p)
    div.appendChild(pdelivery)
  
}



function main(jokess){
    data = jokeapi("https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,religious,racist,sexist,explicit")
    jokess = JSON.parse(data);
    console.log(jokess)
    jokes();
    if(jokess.joke == undefined){
        p.innerHTML = jokess.setup
        pdelivery.innerHTML = jokess.delivery
    }
    else{
        p.innerHTML = jokess.joke
    }
}

main()