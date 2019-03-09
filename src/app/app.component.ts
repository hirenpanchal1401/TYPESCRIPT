import { Component, OnInit } from '@angular/core';
import { Rect } from './Model/rect.model';
import { child } from './Model/inheritance.model';
import { Child } from './Model/interface-example.model';
import { JavaFaculty } from './Model/inheritance.model'; 
import { PHPFaculty } from './Model/inheritance.model';
import { Array } from './Model/interface-example.model';
import { ParfectNumber } from './Model/ParfectNumber.model';
import { car, Jeep } from './Model/Inter_Inherit.model';
import { Details } from './Model/laptop.model';
import { Student } from './Model/Student.model';

enum days {sunday=1,monday,tuesday,wednesday,thursday,friday,saturday};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TYPESCRIPT';
  
  //Simple Class Example
  Rect1 = new Rect(5,10);
  
  //Inheritance
  child1 = new child();


  //Interface example
  Child1 = new Child();

  //Inheritance example
  java = new JavaFaculty();
  php = new PHPFaculty();

  //Interface
  Array1 = new Array();

  //ParfectNumber class
  parfectnumber = new ParfectNumber(133);

  //Student details
  stud1 = new Student(1,"Sikander");
  stud2 = new Student(2,"Virat Kohli");
  stud3 = new Student(3,"Hiren");
  //car example
  Car = new Jeep("4 stroke","MRF",true);

  //laptop details
  laptop1 =  new Details("Lenovo G50-80",35000,"Intel Core i3 Processor (5th Gen)","4 GB DDR3 RAM","1 TB HDD");
  laptop2 =  new Details("MSI Dominator Pro",205000,"Intel Core i7 Processor (4th Gen)","8 GB DDR3 RAM","1 TB HDD");

  EnumEx()
  {
    return `Friday is ${days.friday}th day of week.`;
  }

  MyName(fn:string,ln:string):string
  {
    return fn+" "+ln;
  }

  //TypeScript Assignments
   SimpleInt(principal,rate,year):number
   { 
    let SI = principal*rate*year/100;
    return SI;
   }

   fibbo(n:number)
   { 
    if(n===1)
    {
      return [0, 1];
    }
    let f = this.fibbo(n-1)  //array of function
    f.push(f[f.length-1] + f[f.length-2]);
    return f;
   }

   isprime(num)
   {
      let status:boolean=true;
      if(num!==2 && num%2==0)
      {
        status=false;
      }
      else
      {
        for(let i=2;i<num;i++)
        {
          if(num%i==0)
          status=false;
          break;
        }
      }
      return status;
   }
   prime(n:number)
   {let primearray:string='';
    let count=0;
    let currentnum = 2;
    let str:string = ',';
    while(count<n)
    {
      if(this.isprime(currentnum))
      { console.log(currentnum);
        primearray+=currentnum+str; 
        count++;
      }
      currentnum++;
    }
    return primearray;
   }

   reverse()
   { let str = "abcdef";
     let str1:string = '';
     for(let i = str.length-1;i>=0;i--)
     { 
       str1 += str[i];
     }
      return str1;
   }
   
   grammer(str:string)
   {
     let v:number = 0;
     let c:number = 0;
     for(let i=0;i<str.length-1;i++)
     {
       if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u' || str[i]==='A' || str[i]==='E' || str[i]==='I' || str[i]==='O' || str[i]==='U')
       {
         v++;
       }
       else
       {
         c++;
       }
     }
     return "vowel:"+v+" consonent:"+c;
   }

   armstrong(n:number)
   {
     let sum:number=0;
     let r:number;
     let t:number=n;
     while(n>0)
     {
      
      r=n%10;
      sum+=(r*r*r);
      n=parseInt((n/10).toString()); 
     }
     if(t==sum)
     {
       return t+" is armstrong number";
     }
     else
     {
      return t+" is not armstrong number";
     }
   }

   palindrome(n:number)
   {
     let r=0;
     let t=n;
     while(t!=0)
     {
       r=r*10;
       r=r+(t%10);
       t=parseInt((t/10).toString());
     }
     if(n==r)
     {
       return n+" is palindrome";
     }
   }

   OddEven(n:number)
   {
     if( n%2 == 0)
     {
      return n+" is even";
     }
     else
     {
       return n+" is odd";
     }
   }

   ArrayOddEven()
   {
     let a:number[]=[11,6,2,9,1,44,29,3,19];
     let e:number=0;
     let o:number=0;
     let ecount:number=0;
     let ocount:number=0;
     for(let i=0;i<a.length;++i)
     {
      if( a[i]%2 == 0)
      {
       e+=a[i];
       ecount++;
      }
      else
      {
       o+=a[i];
       ocount++;
      }
     }

     return "even number:"+ecount+" sum of even number:"+e+" & odd number: "+ocount+" sum of odd number:"+o;
   }

   ArrayReverse()
   {
     let a:number[]=[1,3,6,2,8];
     let j:number=a.length-1;
     let i:number=0;
     let temp:number;
     while(i<j)
     {
        temp=a[i];
        a[i]=a[j];
        a[j]=temp;
        i++;
        j--;
     }
     return a;
   }

   SwitchCase(n:string)
   { let a:number=10;
     let b:number=5;
     let c:number;
     switch(n)
     {
       case '+': c=a+b;
                 return "sum of "+a+" & "+b+" :"+c;
                 
       case '-': c=a-b;
                 return "difference of "+a+" & "+b+" :"+c;
                
       case '*': c=a*b;
                 return "multiplication of "+a+" & "+b+" :"+c;
               
       default : c=a/b;
                 return "division of "+a+" by "+b+" :"+c;
              
     }
   }
}
