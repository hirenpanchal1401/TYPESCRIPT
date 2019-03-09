export interface Father
{
    fast_eating()
    hard_work()
    responsible()
}

export interface Mother
{
    soft_harted()
    good_cook()
}

export class Child implements Father,Mother
{
    Logical()
    {
        return "I am logical,"+this.fast_eating()+","+this.hard_work()+","+this.good_cook()+". But I am "+this.responsible()+" "+this.soft_harted();
    }
    fast_eating()
    {
        return "fast eating";
    }
    hard_work()
    {
        return "hard working";
    }
    responsible()
    {
        return "nither responsible";
    }
    soft_harted()
    {
        return "nor soft harted.";
    }
    good_cook()
    {
        return "good cook";
    }
}

//second example
export interface stack
{
    length:number;

    push();
    pop(n);
}

export class Array implements stack
{
    Arr:number[];
    length:number=10;
    push()
    {
        for(let i=0; i<length; ++i)
        {
            this.Arr[i]=i+1;
        }
        return this.Arr;
    }
    pop(n:number)
    {
        for(let j=this.Arr.length-1; j>=n; j--)
        {
         this.Arr.pop();
        }
        return this.Arr;
    }


}