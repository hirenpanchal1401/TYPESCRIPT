import { inherits } from "util";

// Example of Inheritance

export class grandfather
{
  logical()
  {
    return "logical";
  }
}
export class father extends grandfather
{
    hardwork()
    {
        return "hardworking";
    }
}
export class child extends father
{
   artist()
   {
       return "I am "+this.logical()+" & "+this.hardwork()+" artist";
   }
}

// second example

export class Faculty
{
    skills()
    {
        
    }
}

export class JavaFaculty extends Faculty
{
    skills()
    {
        return "I am Expert in Java";
    }
} 
export class PHPFaculty extends Faculty
{
    skills()
    {
        return "I am Expert in PHP ";
    }
}