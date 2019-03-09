export class Laptop
{
    Name:string;
    Price:number;
    Processor:string;
    Ram:string;
    Harddrive:string;
    constructor(n,pr,pro,r,hd)
    {
        this.Name=n;
        this.Price=pr;
        this.Processor=pro;
        this.Ram=r;
        this.Harddrive=hd;
    }

}

export class Details extends Laptop
{
    
    NameD()
    {
        return this.Name;
    }
    PriceD()
    {
        return this.Price;
    }
    ProcessorD()
    {
        return this.Processor;
    }
    RamD()
    {
        return this.Ram;
    }
    HardDriveD()
    {
       return this.Harddrive; 
    }
}