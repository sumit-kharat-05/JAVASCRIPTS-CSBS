//Prototype//

function Student(Name ,Marks)
{
    this.name  = Name;
    this.marks = Marks;
}

Student.prototype.Grade = function()
{
    if(this.marks >= 90)
    {
        return "A";
    }
    else if(this.marks >= 80)
    {
        return "B";
    }
    else if(this.marks >= 70)
    {
        return "C";
    }
    else if(this.marks >= 60)
    {
        return "D";
    }
    else
    {
        return "Fail";
    }
}

let s1 = new Student("Sumit" , 95);
console.log(s1.name + " " + s1.marks + " " + s1.Grade());