const init = () => { 
  const form= document.querySelector("form");
  form .addEventListener("submit",(e)=>{
   e.preventDefault()
   const input = document.querySelector("#searchByID")    
   fetch(`http://localhost:3000/movies/${input.value}`)
   .then((Response)=>  Response.json()
  )
   .then ((data)=>{
    const title = document.querySelector("section#movieDetails h4")
    const summary = document.querySelector("section#movieDetails p")
    title.innerText = data.title;
    summary.innerText = data.summary
    form.reset()
  })
    })
 
  };
  
  document.addEventListener("DOMContentLoaded", init);

