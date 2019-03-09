//Example of Class

export class Rect
{
    public length:number;
    public width:number;

    constructor(l:number,w:number)
    {
        this.length=l;
        this.width=w;
    }

    area()
    {
        return "area of rectangle: "+(this.length*this.width);
    }

}
