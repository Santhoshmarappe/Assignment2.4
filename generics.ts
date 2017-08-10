//Create a class which takes Generics of <T>.
interface men {
    name,
    age
}
interface women {
    language,
    glass
}
class gender<T> implements men, women {
    
    name = 'JAMES BOND';
    age = 26;
    language = 'KANNADA';
    glass = 'SUNGLASS';

    genderInfo(){
       return `Mr ${this.name} is ${this.age} year's old, and Mrs Lara speakes ${this.language} and wearing ${this.glass}`;
    }

}

var Person = new gender();

document.write(Person.genderInfo());

//Output:"Mr JAMES BOND is 26 year's old, and Mrs Lara speakes KANNADA and wearing SUNGLASS"