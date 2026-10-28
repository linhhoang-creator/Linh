
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website cá nhân đã tải thành công!");

    const links = document.querySelectorAll('nav a');

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Đang chuyển đến: " + link.textContent);
        });
    });
});
