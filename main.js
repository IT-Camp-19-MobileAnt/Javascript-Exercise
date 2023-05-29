const { getUser, testCase } = require("./mock");

let done = false; // หากน้องๆทำเสร็จแล้วสามารถเปลี่ยนเป็น false เพื่อเช็คความถูกต้องก่อนเรียกพี่ๆได้เลย

let users = [];
// ข้อ 1 จงเรียกใช้ getUser และเก็บผลลัพธ์ไว้ในตัวแปร users
async function setUser() {
  // เพิ่มโค้ดตรงนี้

}

// ข้อ 2
// จงเขียน Function signIn เมื่อเรียกใช้งาน
// แล้ว username และ password
// ถูกต้องมีอยู่ใน Array User ให้ return true
// หากไม่มีหรือผิดให้ return false
// หมายเหตุ: username จะไม่เป็น case sensitive
function signIn(username, password) {
  // เพิ่มโค้ดตรงนี้

}

// ข้อ 3
// จงเขียน Function signUp เมื่อเรียกใช้งาน
// ให้เพิ่ม username และ password ใหม่ลงใน Array users
// โดยความยาวของ password ต้องไม่ต่ำกว่า 3 ตัวและ
// username ต้องไม่ซ้ำกับข้อมูลที่มีอยู่
// หากไม่เป็นไปตามเงื่อนไขที่กำหนดจะไม่ถูกเพิ่มแล้ว return false
// หมายเหตุ: username จะไม่เป็น case sensitive
function signUp(username, password) {
  // เพิ่มโค้ดตรงนี้

}

// ข้อ 4 จงกรองข้อมูลใน Array users โดยให้เอาเฉพาะ username ที่มีคำว่า "it" อยู่ และความยาวมากกว่า 3 ตัวอักษร
// แล้ว return ค่าเป็น Array ของ username ที่ผ่านเงื่อนไข
// - (ไม่อยู่ใน TestCase) ข้อ 4.1 ให้ใช้ forEach และ console.log แสดง "ลำดับ", "username", "password" ของแต่ละ user ที่ผ่านเงื่อนไข
function filterUsers() {
  // เพิ่มโค้ดตรงนี้

}

// --------------- ห้ามแก้โค้ดส่วนนี้ ---------------
if (done) {
  const getUsr = () => users;
  testCase(setUser, signIn, signUp, filterUsers, getUsr);
}
