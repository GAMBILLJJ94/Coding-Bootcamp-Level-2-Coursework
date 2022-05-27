// https://api.vschool.io/pokemon

const xhr = new XMLHttpRequest()

xhr.open("GET","https://api.vschool.io/pokemon",true)
xhr.send()

xhr.onreadystatechange = function (){
    if (xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.objects[0].pokemon)
    }

}

// const h1 = arr.map(poke => poke.name)
//         h1.textContent = arr[i].name
//         document.body.append(h1)

function showData(arr){
    for(let i = 0; i < arr.length; i++){
    const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.append(h1)
    const h2 = document.createElement('h2')
        h2.textContent = arr[i].resource_uri
        document.body.append(h2)
} 
}

// 
//        
//     