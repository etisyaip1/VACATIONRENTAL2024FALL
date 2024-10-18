document.addEventListener("DOMContentLoaded", () => {
    const overnightForm = document.getElementById("overnightForm");
    const when = document.getElementById("checkInDate");
    const output = document.getElementById("output");
    overnightForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const nights = Number(document.getElementById("nights").value);
        const room = document.querySelector('input[name="roomType"]:checked').value;
        const checkInDate = new Date(when.value);
        const month = checkInDate.getMonth();
        const isPeak = month >= 5 && month <= 7;
        let rate = 0;
        if(isPeak){   
            if("suite" === room){
                rate = 350
            }else{
                rate = 250
            }
        }else{
            if("suite" === room){
                rate = 210
            }else{
                rate = 150
            }
        }
        let subtotal = nights * rate;
        let tax = 0.12 * subtotal;
        let total = tax + subtotal;
        output.innerText = `SUBTOTAL: ${subtotal}\nTAX: ${tax}\nTOTAL: ${total}. `;
    });

});