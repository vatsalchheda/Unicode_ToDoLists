// function Declaration // hiding input section
plusToggle = () => {
 $("input").fadeToggle();
}

$(" .fa-plus").click(plusToggle);


//addinf a new  element () =>
 $("input").keypress(function(event){
   if(event.which===13){
     var todoText=$(this).val();
     $(this).val("");
     $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
   }
 });


           //add a completed class on clicking
            $("li").click(function(){
            $(this).toggleClass("completed");
           })


 // event of clickng on delete icon
$('ul').on("click", "span", function(event){
   $(this).parent().remove();
 })




// //Using JavaScript
// var plus=document.querySelector(".fa-plus");
// var input=document.querySelector("input");
// var li=document.querySelectorAll("li");
// var i=1;
//
// //Hiding Input section
// plus.addEventListener("click", function(){
//   if(i==1)
//   {
//     input.style.display="none";
//     i=0;
//   }
//   else
//   {
//       input.style.display="block";
//       i=1;
//   }
//
// });
//
// // Adding Completed class
// for(j=0;j<li.length;j++)
// {
//   li[j].addEventListener("click", addClass)
// }
// function addClass(li){
// li.className="completed";
// }
