var slideNow = 0;
displaySlide(slideNow);
function move(n){
  slideNow+=n
  displaySlide(slideNow)
}
function displaySlide(slideNum){
  var slide = document.querySelectorAll('.slide');
  if(slideNum>slide.length-1){slideNow=0}
  if(slideNum<0){slideNow=slide.length-1}
  for(i=0;i<slide.length;i++){
    slide[i].style.display = 'none';
  }
  slide[slideNow].style.display = 'block';
}

$(document).ready(function(){
  $(".p-expand").click(function(){
    alert("Do you want to expand/collapse the description of the article");
    $("p.p-detail").toggleClass('active');
    $(".dots").toggleClass('inactive');
    $(".p-expand").html(($(".p-expand").html() === "Read more" ? "Show less" : "Read more"));
  });
});