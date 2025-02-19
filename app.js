let codes = document.getElementById("codes"); // textarea الكتابه في مربع النص 
let play = document.getElementById("play");
let remove = document.getElementById("remove");
let result = document.getElementById("result");

play.onclick = () => {    // عندما يم الضغط على زر تشغيل 
    result.innerHTML = codes.value;
    localStorage.setItem("SAVE" , codes.value); // التخزين ضمن ذاكرة محلية , مفتاح ثم البيانات التي تريد ان تحفظها 
}; // التشغيل - الاضافة 

remove.onclick = () => {  
    result.innerHTML = ""; //  حذف من مربع النتيجة - حذف القيمة 
   // codes.value = ""; //  حذف حذف مربع النص  - حذف القيمة 
}; 

onload = ()=>{ // عند تحميل الصفحة 
    codes.value = localStorage.getItem("SAVE"); // تظهر القيمة التي حفظتها في التخزين المحل التي حفظناها بمفتاح سيف 
}