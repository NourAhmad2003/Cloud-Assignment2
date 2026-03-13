document.getElementById("btn").addEventListener("click", () => {
    const msg = document.getElementById("msg");
    msg.innerText = "Deployment Successful! The Pipeline is working perfectly.";
    msg.style.color = "#27ae60";
    msg.style.fontWeight = "bold";
});