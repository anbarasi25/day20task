document.getElementById("generateBtn").addEventListener("click", function() {
    fetch('https://api-thirukkural.vercel.app/api')
        .then(response => response.json())
        .then(data => {
            const kuralContainer = document.getElementById("kuralContainer");
            kuralContainer.textContent = `${data.number}. ${data.line1} ${data.line2}`;
        })
        .catch(error => {
            console.log(error);
        });
});