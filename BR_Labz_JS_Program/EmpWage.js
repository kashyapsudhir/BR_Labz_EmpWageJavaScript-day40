console.log("Hello Welcome Employee Wage Program")

/*
UC-1
const Absent = 0;
let employeeCheck = Math.floor(Math.random()*10)%2;
if(employeeCheck == Absent)
{
    console.log("Employee is Absent");
    return;


}
else
{
    console.log("Employee is Present")

}
*/
//UC-2
const Part_Time = 1;
const Full_time =2;
const Part_Time_Hours = 4;
const Full_Time_Hours =8;
const Wage_Per_Hours = 20;

let Employee_Hours = 0;
employee_Check = 0;
employee_Check =Math.floor(Math.random()*10) % 3;
switch (employee_Check)
{
    case Part_Time:
        Employee_Hours = Part_Time_Hours;
        break;
    case Full_time:
        Employee_Hours = Full_Time_Hours;
        break;
    default:
        Employee_Hours = 0;    

}
let Employee_Wage =Employee_Hours * Wage_Per_Hours;
console.log("Employee: " + Employee_Wage);