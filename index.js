const inputs = document.getElementsByName('input-grades')
const form = document.getElementById('form')
const spanResults = document.getElementById('you-selected')
const partOne = document.querySelector('.part1')
const partTwo = document.querySelector('.part2')
form.addEventListener('submit' , (e)=>{
    console.log(e);
    e.preventDefault()
    inputs.forEach((element)=>{
        if (element.checked){
            spanResults.innerText=element.getAttribute("content")
            partOne.style.display="none"
            partTwo.style.display="flex"
        }
    })
})