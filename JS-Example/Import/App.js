import { Display, javaT } from "./Mobile.js";
import { StudentCard, showMyMsg } from "./Student.js";
const d = new Display();
var student = new StudentCard("Jerry", 1234);
d.show();
javaT();

student.showCard();
showMyMsg();
