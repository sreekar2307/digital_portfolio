 var Projects = document.querySelector(".Projects");
 var About  = document.querySelector(".About");
 var about_me = document.querySelector(".about_me");
 var projects_me = document.querySelector(".projects_me");
 Projects.addEventListener("click",function(){
 Projects.classList.add("active");
 projects_me.classList.remove("d-none");
 About.classList.remove("active");
 about_me.classList.add("d-none");
})
About.addEventListener("click",function(){
	 About.classList.add("active");
 	 Projects.classList.remove("active");
 about_me.classList.remove("d-none");
 projects_me.classList.add("d-none");
})