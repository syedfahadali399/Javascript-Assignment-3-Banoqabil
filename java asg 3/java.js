let temp = prompt('Enter the Temprature in Celsisus');

if (temp>=30) {
    alert('Its a Hot Day')
} else {
    alert('The Whether is Moderate')
} 

// marksheet

let sub1 = Number(prompt('Enter Your 1st Subject Marks'));
let sub2 = Number(prompt('Enter Your 2nd Subject Marks'));
let sub3 = Number(prompt('Enter Your 3rd Subject Marks'));
let sub4 = Number(prompt('Enter Your 4th Subject Marks'));

function calculategrade(per) {
    if(per >= 100){
        return 'A+';
    } else if(per <= 90){
        return 'A'
    } else if(per <= 80){
        return 'B'
    } else if(per <= 70){
        return 'C'
    } else if(per <= 60){
        return 'D'
    } else if(per <= 50){
        return 'Passed'
    } if(per <=33){
        return 'fail'
    }   
}

let totalmarks = sub1 + sub2 + sub3  + sub4;
let per  = (totalmarks / 400) * 100;
    
let grade = calculategrade(per);

alert(
    'subject 1:' + sub1 +
    '\n subject 2:' + sub2 +
    '\n subject 3:' + sub3 +
    '\n subject 4:' + sub4 +
    '\n total marks' + totalmarks +
    '\n percentage' + per + '%' +
    '\n Grade' + grade  
)