document.addEventListener("DOMContentLoaded", function() {
    const tempInput=document.querySelector("#tempInput");
    const conversionType=document.querySelector("#conversionType");
    const convertBtn= document.querySelector("#convertBtn");
    const result =document.querySelector("#results");

    convertBtn.addEventListener("click", function(){
        let temp = Number(tempInput.value);
        let type = conversionType.value;
        let output;

        if (isNaN(temp)) {
            output = "Please enter a valid number";
        }else if (type==="cToF"){
            output=`${temp}°C = ${(temp * 9/5 + 32).toFixed(2)}°F`;
        }else if (type==="fToC") {
            output = `${temp}°F =${((temp - 32) * 5/9).toFixed(2)}°C`;
        }

        result.innerText = output;
    });
});
