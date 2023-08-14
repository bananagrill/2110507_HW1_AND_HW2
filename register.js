function getData(){
    let company_name = document.getElementById("company_name");
    let name = document.getElementById("name");
    let tel = document.getElementById("tel");
    let chair = document.getElementById("chair");
    let boothsize = document.getElementById("booth_size")
    if(company_name.value.length == 0){
        alert("กรุณาใส่ชื่อบริษัท");
    }
    else if(name.value.length == 0){
        alert("กรุณาใส่ชื่อผู้ติดต่อ")
    }
    else if(tel.value.length == 0){
        alert("กรุณาใส่เบอร์โทรผู้ติดต่อ")
    }
    else if(chair.value > 10 ){
        alert("เก้าอี้สามารถขอได้สูงสุด 10 ตัว")
    }
    else if(chair.value < 0){
        alert("กรุณาใส่จำนวนเก้าอี้เป็นจำนวนบวก(สูงสุด 10 ตัว)")
    }
    else if(boothsize.value == "not_choose"){
        alert("กรุณาเลือกขนาดบูธที่ต้องการ")
    }
}