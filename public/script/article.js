document.getElementById("Reddit").addEventListener("click",function(){
  fetch("/links/reddit").then(
    function(response){
      if(response.status !== 200){
        console.err(err)
        return
      }
      response.json().then(function(result) {
        const article = document.querySelector('#article ul')
        result.forEach((link) => {
          var li = document.createElement('li')
          var anchor = document.createElement('a')
          li.appendChild(anchor)
          anchor.href =  link.url
          anchor.innerText = link.titile
          article.appendChild(li)
        })
        
      })
      
    }
  )
});


// document.getElementById("HackerNews").addEventListener("click",function(){
//   fetch("/links/hacknews").then(
//     function(response){
//       if(response.status !== 200){
//         console.err(err)
//         return
//       }
//       response.json().then(function(result) {
//         const article = document.querySelector('#article ul')
//         result.forEach((link) => {
//           var li = document.createElement('li')
//           var anchor = document.createElement('a')
//           li.appendChild(anchor)
//           anchor.href =  link.url
//           anchor.innerText = link.title
//           article.appendChild(li)
//         })
        
//       })
      
//     }
//   )
// });

