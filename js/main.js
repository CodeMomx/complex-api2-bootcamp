document.querySelector('button').addEventListener('click', getCountry)

function getCountry(){

let search = document.querySelector('input').value
let url = `http://api.worldbank.org/v2/country/${search}?format=json`

fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data[1][0])
			document.querySelector('.name').innerText = data[1][0].name
			document.querySelector('h2').innerText = data[1][0].id
			document.querySelector('h3').innerText = data[1][0].capitalCity
			document.querySelector('h4').innerText = data[1][0].region.value
			

			let flagUrl = `https://countryflagsapi.com/png/${data[1][0].id}`

			document.querySelector('img').src = flagUrl
			document.querySelector('input').value = ''
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
}