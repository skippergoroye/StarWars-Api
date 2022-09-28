let button     = document.querySelector('#button')
let namebtn    = document.querySelector('#name')
let height     = document.querySelector('#height')
let gender       = document.querySelector('#gender')
let birthYear  = document.querySelector('#birth-year')
let count=0;





function getInfo(){
    // updateInfoWithLoading()


    // let randomNumber = Math.floor((Math.random() * 88) + 1)
    let apiUrl = 'https://swapi.dev/api/people/' 

    // https://swapi.dev/api/people/1
    axios.get( apiUrl).then(response => {
        updateInfo(response.data.results, count);
        // console.log(response.data.results[0])
    }).catch(e => {
        updateInfoWithError()
    })
}

let images=['./images/luke.jpeg','./images/c3po.jpeg','./images/R2-D2.jpeg','./images/Darth Vader.jpeg','./images/Leia Organa.jpeg','./images/Owen Lars.jpeg','./images/Beru Whitesun lars.jpeg','./images/R5-D4.jpeg','./images/Biggs Darklighter.jpeg','./images/Obi-Wan Kenobi.jpeg',];

function updateInfo(data){
    namebtn.innerText    = data[count].name
    gender.innerText       = `Gender : ${data[count].gender}`
    height.innerText     = `Height: ${data[count].height}`
    // birthYear.innerText  = `Birth Year: ${data[count].birth_year}`
    document.querySelector('#infocont').src= images[count];
    count++
}



function updateInfoWithError(){
    namebtn.innerText    = 'Oh No! That person isnt avaliable'
    height.innerText     =  'Not On api'
    gender.innerText       =  'Not On api'
    birthYear.innerText  =  'Not On api'
}


// Loader Font Awesome

function updateInfoWithLoading(){
    namebtn.innerHtml    =  '<ion-icon name="reload"></ion-icon>'
    height.innerText     =  ''
    mass.innerText       =  ''
    birthYear.innerText  =  ''
}

 

button.addEventListener('click', getInfo)






// function main() {}

// module.exports = { main }


