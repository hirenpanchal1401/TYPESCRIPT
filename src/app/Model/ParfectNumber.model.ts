export class ParfectNumber
{
    sum:number=0;
    multi:number=1;
    x;
    constructor(n)
    {  
         this.x=n; 
         while(n>0)
         {
             let x=n%10;
             this.sum=this.sum+x;
             this.multi=this.multi*x;
             n=parseInt((n/10).toString());
         }
    }

    isParfect(sum,multi)
    {
        if(this.multi==this.sum)
        {
            return this.x+" is Parfect number";
        }
        else
        {
            return this.x+" is not Parfect number";
        }
    }


}