// Write your JavaScript code here\n\n// The previous GitHub API fetching code has been removed.\n// HTML and CSS are kept intact as static mockup.\n// Add your new JS functionality here.
let serSec=document.querySelector(".search-section")
let serInput=document.querySelector("#usernameInput")
let pSec=document.querySelector("#profileSection")
//et eSec=document.querySelector(".error-section")
let errorSection=document.querySelector(".error-section")
let pImg=document.querySelector("#profileImage")
let button=document.getElementById("searchBtn")

let plogin=document.querySelector("#profileLogin")
let repo=document.querySelector("#publicRepos")
let fo=document.querySelector("#following")
let bio=document.querySelector("#profileBio")
let em=document.querySelector("#errorMessage")
let fol=document.getElementById("followers")
//=========================================================================


//==========================================================================
getData=function(){
    fetch(`https://api.github.com/users/${serInput.value}`)
    .then(function(response){
        if(response.ok)
        {
            return response.json()
        }
        else
        {
            throw new Error("User not Found")
        }
    })
    .then(function(data){
        errorSection.classList.add("hidden")
        pSec.classList.remove("hidden")
        pImg.setAttribute("src",data.avatar_url)
        plogin.innerHTML=data.login
        repo.innerHTML=data.public_repos
        fol.innerHTML=data.followers
        bio.innerHTML=data.bio
        fo.innerHTML=data.following
    }
    )
    .catch(function(Error){
            pSec.classList.add("hidden")
            errorSection.classList.remove("hidden")
            em.innerHTML=Error
    })  
}
//============================EVENT=================================
button.addEventListener("click",getData)



