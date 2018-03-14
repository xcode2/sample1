
function loadJSON(url){
  return new Promise ( (resolve,reject) => {
    return fetch(url).then(response => {
      if (response.ok) {
        resolve(response.json());
      }else {
        reject(new error('error'));
      }
    })
  })
}

var myfile=loadJSON("data.json");
myfile.then(function(data){
  console.log(data);
  career(data.career);
  education(data.education);
})

var content=document.querySelector(".content");
function career(car){
  var h2=document.createElement("h2");
  h2.textContent="Career Objective";
  content.appendChild(h2);
  var hr=document.createElement("hr");
    content.appendChild(hr);
    var p=document.createElement("p");
    p.textContent=car.data;
    content.appendChild(p);

}

function education(edu){
  var h2=document.createElement("h2");
  h2.textContent="Educational Qualifications";
  content.appendChild(h2);
  var hr=document.createElement("hr");
  content.appendChild(hr);
  console.log(edu.legth);

  var ul=document.createElement("ul");
  content.appendChild(ul);
  for(var i=0; i<edu.length; i++){
    var li=document.createElement("li");
    li.textContent=edu[i].degree;
    ul.appendChild(li);
    var li2=document.createElement("p");
    li2.textContent=edu[i].college;
    ul.appendChild(li2);
    var p=document.createElement("p");
    p.textContent=edu[i].data;
    ul.appendChild(p);
  }
}
