function bmi ()
{

let a = prompt("น้ำหนัก กก.")
let b = prompt("ส่วนสูง หน่วยเมตร ")
let d = 0
let u = b*b

d = a / u
document.getElementById("sc").innerHTML = "ดัชนีมวลร่างกาย " + d.toFixed(2) +"<br>"

if (d <= 18.5) {
    document.getElementById("sco").innerHTML = "การแปรผล : ผอมเกินไป - น้ำหนักน้อยกว่าปกติ.5"  
    }         
        else if (d < 22.9 ) {
        document.getElementById("sco").innerHTML = "การแปรผล : น้ำหนักปกติ น้ำหนักเหมาะสม"
        }
        else if (d < 24.9 ) {
        document.getElementById("sco").innerHTML = "การแปรผล : เริ่มอ้วน"
        }
        else if (d < 29.0 ) {
        document.getElementById("sco").innerHTML = "การแปรผล : อ้วน"
        }
        else if (d > 30.0 ) {
        document.getElementById("sco").innerHTML = "การแปรผล : อ้วนมากผิดปกติ"
        }                      
}

function cal ()
{
let a = prompt("น้ำหนัก กก.")
let b = prompt("ส่วนสูง หน่วยเชนติเมตร")
let c = prompt("อายุของคุณ")

let d = 0
let e = 0
//การหาค้า BMR = 665+(9.6*นน.กก.)+(1.8*ส่วนสูง เป้นซม.)*(4.7*อายุ)

d = 665+(9.6*a)+(1.8*b)-(6.8*c)
document.getElementById("scoo").innerHTML = "ค่าของผู้หญิง" + d.toFixed(2) +"แคลลอรี่" +"<br>"

e = 66+(13.7*a)+(5*b)-(4.7*c)
document.getElementById("scooo").innerHTML = "ค่าของผู้ชาย " + e.toFixed(2) +"แคลลอรี่" +"<br>"

}
