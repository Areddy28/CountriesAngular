//This is a model done with typescript 
//This is the same idea as a C# model 

export class Country{
    name : string; 
    language : string; 
    flagURL : string; 
    president: string
    // colors: colors [];
    
    constructor(name: string, language: string, flagURL: string, president: string,){
        this.name = name;
        this.language = language;
        this.flagURL = flagURL;
        this.president = president;
        // this.colors = colors; 
    }
}