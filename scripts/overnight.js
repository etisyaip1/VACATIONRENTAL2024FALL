document.addEventListener("DOMContentLoaded", ()=>{

    const overnightForm = document.getElementById("overnightForm");
    const when = document.getElementById("when");
    const output = document.getElementById("output");

    overnightForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        output.innerText = when.value;
    });

});