export class Student
{
    roll_no:number;
    name:string;
     
    constructor(r,n)
    {
        this.roll_no=r;
        this.name=n;
    }

    S_name()
    {
        return this.name;
    }
    S_rollno()
    {
        return this.roll_no;
    }
}