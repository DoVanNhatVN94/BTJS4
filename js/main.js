/**
 * Bai 1 QUản Lý Tuyển Sinh
 * 
 * Khối 1:
 * Điểm Chuẩn (diemChuan) , Chọn khu vực (khuVuc), chọn đối tượng (doiTuong), điểm môn thứ nhất (diem1), diểm môn thu 2 (diem2), diểm môn thu 3 (diem3)
 * 
 * Khối 2:
 * b1: Khai báo biến 
 *  tổng điểm (sum)
 *  Biến đệm khu vuc(diemKv)
 * Biến đệm đối tượng (diemDt)
 * 
 * b2: Lập điều kiện
 * if(khuVuc=="A") diemKv=2; else if(khuVuc=="B") diemKv=1; else if(khuVuc=="C") diemKv=0.5; else = 0;
 * if(doiTuong==1) diemDt=2.5; else if(doiTuong=="2") diemDt=1.5; else if(doiTuong=="3") diemDt =1; else diemDt=0;
 * 
 * sum = diem1 + diem2 + diem3 + diemDt + diemKv ;
 * if(sum>=diemChuan) => bạn đã đậu 
 * else => Bạn đã rớt 
 *
 * b3: xuất kết quả ra màn hình : document.getElementById("txtSum").innerHTML 
 * 
 * Khối 3:
 * 
 * nhập diemChuan = 20 , khuVuc = A, doiTuong = 2, diem1 = 8, diem2 = 8, diem3 =8
 * 
 * => Bạn đã đậu. Tổng điểm: 27.5
 * 
 */

document.getElementById("btnSum").onclick = function () {
    var diem1 = Number(document.getElementById("inpDiem1").value);
    var diem2 = Number(document.getElementById("inpDiem2").value);
    var diem3 = Number(document.getElementById("inpDiem3").value);
    var diemChuan = Number(document.getElementById("inpDiemChuan").value);
    if (diem1 < 0 || diem1 > 10) alert("Nhập lại Điểm 1");
    if (diem2 < 0 || diem2 > 10) alert("Nhập lại Điểm 2");
    if (diem3 < 0 || diem3 > 10) alert("Nhập lại Điểm 3");
    if (diemChuan < 0 || diemChuan > 30) alert("Nhập lại điểm chuẩn");

    var sum = Number(diem1 + diem2 + diem3 + ftDiemKhuVuc() + ftDiemDoiTuong());

    if (sum >= diemChuan) document.getElementById("txtSum").innerHTML = "Bạn đã đậu. Tổng điểm: " + sum;
    else document.getElementById("txtSum").innerHTML = "Bạn đã rớt. Tổng điểm: " + sum;
}

function ftDiemKhuVuc() {
    var khuVuc = document.getElementById("inpKhuVuc").value;
    var diemKv = 0;
    if (khuVuc == "A") diemKv = 2;
    else if (khuVuc == "B") diemKv = 1;
    else if (khuVuc == "C") diemKv = 0.5;
    else diemKv = 0;
    return diemKv;
}
function ftDiemDoiTuong() {
    var doiTuong = document.getElementById("inpDoiTuong").value;
    var diemDt = 0;
    if (doiTuong == "1") diemDt = 2.5;
    else if (doiTuong == "2") diemDt = 1.5;
    else if (doiTuong == "3") diemDt = 1;
    else diemDt = 0;
    return diemDt;
}


/**
 * Bài 2 : QUản lý Tiền Điện
 * 
 * khối 1: 
 * people (chủ hộ), số kw (numKw)
 * 
 * Khoi 2:
 * b1: khai báo biến
 * tiền điện (tienDien)
 * 
 * b2: Lập điều kiện
 * if(numKw<=50) tienDien = numKw*500;
 * else if (numKw>50&&numKw<=100) tienDien = 500*50 +(numKw-50)*650;
 * else if (numKw>100&&numKw<=200) tienDien = 500*50 +650*50 + (numKw-100)*850;
 * else if (numKw>200&&numKw<=350) tienDien = 500*50 +650*50 + 850*100 + (numKw-200)*1100;
 * else if (numKw>350)  tienDien = 500*50 +650*50 + 850*100 + 1100*150 + (numKw-350)*1300;
 * 
 * b3: suất kết quả ra màn hình
 *      
 * 
 * Khối 3: 
 * nhập chủ hộ : Đỗ Văn Nhật
 * số kw : 370
 * => Họ tên: a; Tiền điện: 333.500 
 */

document.getElementById("btnTienDien").onclick = function () {
    people = document.getElementById("inpChuHo").value;
    document.getElementById("txtTienDien").innerHTML= "Họ tên: "+people+";Tiền điện: "+(new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(ftTienDien()));
    
}
function ftTienDien() {
    var numKw = Number(document.getElementById("inpKw").value);
    var tienDien = 0;
    if (numKw <= 50) tienDien = numKw * 500;
    else if (numKw > 50 && numKw <= 100) tienDien = 500 * 50 + (numKw - 50) * 650;
    else if (numKw > 100 && numKw <= 200) tienDien = 500 * 50 + 650 * 50 + (numKw - 100) * 850;
    else if (numKw > 200 && numKw <= 350) tienDien = 500 * 50 + 650 * 50 + 850 * 100 + (numKw - 200) * 1100;
    else if (numKw > 350) tienDien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (numKw - 350) * 1300;
    return tienDien;
}


// Button bt 
document.getElementById("btnBai1").onclick = function () {
    document.getElementById("form__1").style.display = "flex";
    document.getElementById("form__2").style.display = "none";
}
document.getElementById("btnBai2").onclick = function () {
    document.getElementById("form__1").style.display = "none";
    document.getElementById("form__2").style.display = "flex";
}