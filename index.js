import colorScheme from "/data.js"

const schemes = document.getElementById("schemes")

const baseColor = document.getElementById("base-color")
const displaySection = document.getElementById("display-section")
//get display column elemnts

let displayHtml = ``
let colorArray = []
let schemeHtml = ``

//Render schemes options
 for (const scheme of colorScheme) {  
     schemeHtml += `
     <option value="${scheme}">${scheme}</option>
     `
 }
 schemes.innerHTML = schemeHtml
         fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor.value.slice(1)}&mode=${schemes.value}`)
             .then(response => response.json())
             .then(data => {
                 console.log(data.colors[0].hex.value)
             })

//Render colors function
    
function renderColors() {
fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor.value.slice(1)}&mode=${schemes.value}`)
     .then(response => response.json())
     .then(data => {
         displayHtml = ''
         for (const element of data.colors) {
             colorArray.push(element.hex.value)
             displayHtml += `
                <div class="column-divider">
                    <div class="color-column" style="background-color:${element.hex.value}">
                    </div>
                    <div class="color-hex">
                        ${element.hex.value}
                    </div>
                </div>
             `
         }
         document.getElementById("display-section").innerHTML = displayHtml;                
     })    
}

renderColors()
document.getElementById("color-btn").addEventListener("click", renderColors) 


