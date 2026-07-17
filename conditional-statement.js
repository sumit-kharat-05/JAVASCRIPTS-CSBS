
{
    let name = "SUMIT KHARAT";
    let age = '18';

    //If Statement//
    if (age >= 18) 
    {
        console.log("You Can Vote");
    }
    
    //If Else Statement//
    if (age > 18) 
    {
        console.log("You Can Vote");
    }
    else
    {
        console.log("You Can Not Vote");
    }

    //If - Else - If Statement//

    const marks = prompt("Enter Your Marks");
    console.log(marks);

    if (marks >= 90) 
    {
     console.log("Grade A");    
    }
    else if(marks >= 80)
    {
        console.log("Grade B");
    }
    else if(marks >= 70)
    {
        console.log("Grade C");
    }
    else if(marks >= 60)
    {
        console.log("Grade D");
    }
    else if(marks > 50)
    {
    console.log("Pass");
    }
    else
    {
        console.log("Fail");
    }
}