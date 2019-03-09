export class car
{
    Engine:string;
    Tyre:string;
    SoundSystem:boolean;

    constructor(E,T,S)
    {
        this.Engine=E;
        this.Tyre=T;
        this.SoundSystem=S;
    }
}
export interface color
{
    clr:string;
}

export class Jeep extends car implements color
{
    clr="Black";

    Enginedata()
    {
        return this.Engine;
    }
    Tyredata()
    {
        return this.Tyre;
    }
    SoundSystemdata()
    {
        return this.SoundSystem;
    }
    clrdata()
    {
        return this.clr;
    }

}