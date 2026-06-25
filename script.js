const resources = [

{
subject:"Calculus",
semester:"1st Year",
link:"calculus.html"
},

{
subject:"Physics",
semester:"1st Year",
link:"physics.html"
},

{
subject:"English",
semester:"1st Year",
link:"english.html"
},

{
subject:"Discrete Mathematics",
semester:"1st Year",
link:"discrete.html"
},

{
subject:"Structured Programming",
semester:"1st Year",
link:"sp.html"
},

{
subject:"Computer Fundamentals",
semester:"1st Year",
link:"fundamentals.html"
}

];

const container =
document.getElementById("resourceContainer");

function displayResources(data){

container.innerHTML="";

data.forEach(item=>{

container.innerHTML+=`

<div class="card">

<h2>${item.subject}</h2>

<p>${item.semester}</p>

<a class="btn" href="${item.link}">

View Resources

</a>

</div>

`;

});

}

displayResources(resources);

document
.getElementById("searchBox")
.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const filtered=
resources.filter(item=>

item.subject
.toLowerCase()
.includes(value)

);

displayResources(filtered);

});
