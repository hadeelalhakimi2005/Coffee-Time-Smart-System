let count = 0;

function addToCart() {
    count++;
    document.getElementById("count").innerText = count;
    alert("تم إضافة المشروب إلى السلة بنجاح! ☕");
}
