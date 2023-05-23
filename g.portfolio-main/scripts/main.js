
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Starting the server...");
  await delay(1500);
  createText("Hello Stranger :)");
  await delay(700);
  createText("Use these flags to find out more about me:");
 
  createCode("--about", "Who am i and what do i do.");
  createCode("--all", "See all commands.");
  createCode("--projects", " My projects.");
  createCode("--socials", "My social networks.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/george-Kmbariah";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "--all"){
    trueValue(value);
    createCode("--projects", "Check out my projects on my github & netlify pages.");
    createCode("--about", "Who am i and what do i do.");
    createCode("--socials", "All my social networks.");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "--projects"){
    trueValue(value);
    createText("<a href='https://github.com/Kmbaria' target='_blank'><i class='fab fa-github white'></i> github.com/Kmbariah</a>")
  createText("<a href='https://app.netlify.com/teams/kmbaria/sites' target='_blank'><i class='fab fa-github white'></i> netlify.com/Kmbariah</a>")
  }
  else if(value === "--about"){
    trueValue(value);
    createText("Hi again, I am Kmbariah :)")
    createText("I am a Full Stack Web Developer, residing in Nairobi, Kenya. I make amazing websites that look professional and playful Courtesy of my creative mind and my awesome fingers thus making me a digital explorer (in Software Engineering & Machine Learning).")
    createText("Languages & Frameworks: <span class='blue'>Javascript, React, Python, Django, Flask & Wordpress.")
    createText("Other Tools: <span class='blue'>Git, Linux, Azure, Google Analytics, Powerapps, PowerBI, Sharepoint</span>.")
  }
  else if(value === "--socials"){
    trueValue(value);
    createText("<a href='https://github.com/Kmbaria' target='_blank'><i class='fab fa-github white'></i> github.com/Kmbariah</a>")
    createText("<a href='https://www.linkedin.com/in/george-mbariah-17aa36143/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/george-Kmbariah</a>")
    // createText("<a href='https://medium.com/@maryanngitonga' target='_blank'><i class='fab fa-medium'></i> medium.com/@maryanngitonga</a>")
  }
  else if(value === "--social"){
    trueValue(value);
    createText("Didn't you mean: --socials?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`flag not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `dig ${value} georgekmbariah`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `dig ${value} georgekmbariah`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
