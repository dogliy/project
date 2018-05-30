var obj_form=document.createElement("FORM");
var obj_text=document.createElement("input");




$("document").ready(function(){  
    obj_text.setAttribute("type","text");
    obj_form.appendChild(obj_text);
    document.getElementsByTagName("body")[0].appendChild(obj_form);
    obj_form.style.visibility = "hidden";

  



});


window.onload=function(){

    var  obj_table_head=document.createElement("section");

    var  obj_table_buttom=document.createElement("section");

    var table_student_obj_1=document.createElement("section");

    var table_student_obj_2=document.createElement("section");

    table_student_obj_1.style.width="77px";
    table_student_obj_1.style.height="43px";
    table_student_obj_1.style.borderLeft="2px solid #c0c0c0";
    table_student_obj_1.style.backgroundColor="yellow";
    table_student_obj_1.style.cssFloat="right";

    table_student_obj_1.style.color="#0055cc";
    table_student_obj_1.style.fontSize="14px";

    table_student_obj_1.innerHTML="תמונה";
    table_student_obj_1.style.textAlign = "center";
    table_student_obj_1.style.fontFamily = "helvetica,Charcoal,sans-serif";
    table_student_obj_1.style.fontWeight="bold";



    table_student_obj_2.style.width="120px";
    table_student_obj_2.style.height="43px";
    table_student_obj_2.style.borderLeft="2px solid #c0c0c0";
    table_student_obj_2.style.backgroundColor="yellow";
    table_student_obj_2.style.cssFloat="right";

    table_student_obj_2.style.color="#0055cc";
    table_student_obj_2.style.fontSize="14px";

    table_student_obj_2.innerHTML="שם";
    table_student_obj_2.style.textAlign = "center";
    table_student_obj_2.style.fontFamily = "helvetica,Charcoal,sans-serif";
    table_student_obj_2.style.fontWeight="bold";







    obj_table_head.style.height="39px";
    obj_table_head.style.width="679px";
    obj_table_head.style.borderTop="2px solid #c0c0c0";
    obj_table_head.style.borderRight="2px solid #c0c0c0";
    obj_table_head.style.borderLeft="2px solid #c0c0c0";

    obj_table_head.appendChild(table_student_obj_1);
    obj_table_head.appendChild(table_student_obj_2);


    obj_table_buttom.style.height="39px";
    obj_table_buttom.style.width="679px";
    obj_table_buttom.style.borderBottom="2px solid #c0c0c0";
    obj_table_buttom.style.borderRight="2px solid #c0c0c0";
    obj_table_buttom.style.borderLeft="2px solid #c0c0c0";



    obj_table_head.style.backgroundColor="green";

    obj_table_buttom.style.backgroundColor="green";

    document.getElementById("student_table").appendChild(obj_table_head);

    document.getElementById("student_table").appendChild(obj_table_buttom);


}

document.getElementById("magnifying_glass_id").addEventListener("mouseover",function (){
 
});

document.getElementById("magnifying_glass_id").addEventListener("mouseout", function (){

});