//The idea is to build a really simple competition webpage that encourages people to spread the news about carbon compensations. Users arrive at the page and sign up a form. After a successful sign up, they get a point for the competition. At this moment they have an option to share the sign up link. Each successful sign up referred via the link will give extra competition points to the original link poster. There is no limit to the number of points a person can get. At the end of the competition, the 10 people with the most points win.
//When the form is submitted, the user gets a point and will be directed to a page with an option to share the special link;
//When people arrive to the competition page via the special link, the original poster will get an extra point;
//After the competition is over, generate a table of the winners;
//linkar com a outra página "https://codepen.io/lucasbf7/full/GRvRKyK"
    
function checkInputs(inputs) {
    var filled = true;
  
  inputs.forEach(function(input) {
    if(input.value === "") {
        filled = false;
    }
    });

  return filled;
}

var inputs = document.querySelectorAll("input");
var button = document.querySelector("button");

inputs.forEach(function(input) {
  input.addEventListener("keyup", function() {
    
    if(checkInputs(inputs)) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
});
