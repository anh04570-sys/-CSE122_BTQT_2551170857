document.getElementById('btn-print').addEventListener('click', function() {
    let d = parseInt(document.getElementById('input-day').value);
    let m = parseInt(document.getElementById('input-month').value);
    let y = parseInt(document.getElementById('input-year').value);

    if (isNaN(d) || isNaN(m) || isNaN(y)) {
        alert("Vui lòng nhập đầy đủ Ngày, Tháng, Năm!");
        return;
    }

    let dateObj = new Date(y, m - 1, d);

    if (dateObj.getFullYear() !== y || dateObj.getMonth() !== m - 1 || dateObj.getDate() !== d) {
        alert("Ngày tháng năm không hợp lệ!");
        return;
    }

    let daysOfWeek = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
    let weekdayString = daysOfWeek[dateObj.getDay()];

    let monthsOfYear = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", 
                        "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    let monthString = monthsOfYear[m - 1];

    let currentHour = new Date().getHours();
    let greetingText = "Chào buổi ngày!";

    if (currentHour >= 4 && currentHour < 11) {
        greetingText = "Chào buổi sáng!";
    } else if (currentHour >= 11 && currentHour < 13) {
        greetingText = "Chào buổi trưa!";
    } else if (currentHour >= 13 && currentHour < 18) {
        greetingText = "Chào buổi chiều!";
    } else {
        greetingText = "Chào buổi tối!";
    }

    document.getElementById('display-year').innerText = y;
    document.getElementById('display-month').innerText = monthString;
    document.getElementById('display-day').innerText = d < 10 ? "0" + d : d;
    document.getElementById('display-weekday').innerText = weekdayString;
    document.getElementById('display-greeting').innerText = greetingText;
});