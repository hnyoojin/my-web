/*입출력 예제------------------------------------*/

//알림창
alert("Wassup")

//확인창 : 확인 or 취소 가능
confirm("Yo")
var reply = confirm("Are you okay?");

//프롬프트 창에서 입력받기
var name = prompt("Enter your name.");
var name = prompt("Enter your name.", "Steve");

//출력
document.write("<h1>Welcome</h1>");

//입력받아 화면에 출력하기
var name = prompt("Enter your name.");
document.write("<b><big>Welcome, " + name + "!<br></big></b>");

//입력받아 콘솔창에 출력하기
var name = prompt("Enter your name.");
console.log("Welcome, " + name);

//현재 시간 출력
var now = new Date();
var display = now.toLocaleTimeString();
document.write("Current Time : " + display);


/*변수 활용-나이 계산 프로그램--------------------*/

var currentYear = 2024;
var birthYear;
var age;

birthYear = prompt ("What year did you born? (YYYY)", "");
age = currentYear - birthYear + 1;
document.write("<br>Current Year : " + currentYear + "<br>");
document.write("The Age of person who born in " + birthYear + " is " + age + ".");

/*----------------------------------------------*/