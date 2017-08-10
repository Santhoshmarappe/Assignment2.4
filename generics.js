var gender = (function () {
    function gender() {
        this.name = 'JAMES BOND';
        this.age = 26;
        this.language = 'KANNADA';
        this.glass = 'SUNGLASS';
    }
    gender.prototype.genderInfo = function () {
        return "Mr " + this.name + " is " + this.age + " year's old, and Mrs Lara speakes " + this.language + " and wearing " + this.glass;
    };
    return gender;
}());
var Person = new gender();
document.write(Person.genderInfo());
//Output:"Mr JAMES BOND is 26 year's old, and Mrs Lara speakes KANNADA and wearing SUNGLASS" 
