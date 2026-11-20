let stdname,standard,urdu,eng,math,physics,com,obtmarks,percentage,grade;

stdname=prompt("Enter Your Name")
standard=prompt("Enter Your Class")
urdu=prompt("Enter Your Urdu Marks")
eng=prompt("Enter Your Eng Marks")
math=prompt("Enter Your Math Marks")
physics=prompt("Enter Your Physics Marks")
com=prompt("Enter Your Com Marks")

obtmarks=parseInt(urdu)+parseInt(eng)+parseInt(math)+parseInt(physics)+parseInt(com);
percentage=(obtmarks / 500)* 100;
if (percentage >= 90 && percentage <=100 ){
    grade = "A+";
}
else if(percentage >= 80 && percentage <=90){
    grade = "A";
}
else if(percentage >=70 && percentage <=80){
    grade = "B";
}
else if(percentage >=60 && percentage <=70){
    grade = "C";
}
else if(percentage >=50 && percentage <=60){
    grade = "D";
}
else if(percentage >=40 && percentage <=50){
    grade = "E";
}
else{
    grade = "Fail"
}

