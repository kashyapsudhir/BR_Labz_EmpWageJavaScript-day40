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


//UC-3
const Part_Time = 1;
const Full_Time =2;
const Part_Time_Hours = 4;
const Full_Time_Hours =8;
const Wage_Per_Hours = 20;

function getWorkingHours(employee_Check)
{
    switch(employee_Check)
    {
        case Part_Time:
            return Part_Time;
        case Full_Time:
            return Full_Time; 
        default:
            return 0;     
    }
}
let Employee_Hours = 0;

let employee_Check =Math.floor(Math.random()*10) % 3;
Employee_Hours = getWorkingHours(employee_Check);
let Employee_Wage =Employee_Hours * Wage_Per_Hours;
console.log("Employee: " + Employee_Wage);


//UC-4
const Part_Time = 1;
const Full_Time =2;
const Part_Time_Hours = 4;
const Full_Time_Hours =8;
const Wage_Per_Hours = 20;
const Num_Of_Working_Days = 2;
let Employee_Hours = 0;

function getWorkingHours(employee_Check)
{
    switch(employee_Check)
    {
        case Part_Time:
            return Part_Time;
        case Full_Time:
            return Full_Time; 
        default:
            return 0;     
    }
}
for(let day = 0;
    day < Num_Of_Working_Days;
    day++)
    {
        let employee_Check =Math.floor(Math.random()*10) % 3;
        Employee_Hours += getWorkingHours(employee_Check);

    }
    let Employee_Wage =Employee_Hours * Wage_Per_Hours;
     console.log("Employee: " + Employee_Wage);
*/
//UC-5
const Part_Time = 1;
const Full_Time =2;
const Part_Time_Hours = 4;
const Full_Time_Hours =8;
const Wage_Per_Hours = 20;
const Num_Of_Working_Days = 10;

let Total_Employee_Hours = 0;

let Total_Working_Days = 0;
const Max_Hours_In_Month = 100;

function getWorkingHours(employee_Check)
{
    switch(employee_Check)
    {
        case Part_Time:
            return Part_Time;
        case Full_Time:
            return Full_Time; 
        default:
            return 0;     
    }
}


while ( Total_Employee_Hours<= Max_Hours_In_Month && Total_Working_Days < Num_Of_Working_Days) 
{ 
    Total_Employee_Hours++;

     let employee_Check = Math.floor(Math.random() * 10) % 3;

    Total_Employee_Hours += getWorkingHours (employee_Check);

}

let Employee_Wage = Total_Employee_Hours * Wage_Per_Hours; 
console.log("UC5 Total Days:" + Total_Working_Days + "Total Hrs:" + Total_Employee_Hours + "Emp Wage:" + Employee_Wage);
    
