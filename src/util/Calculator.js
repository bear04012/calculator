export default class Calculator {
    constructor() {
        this.v1 = "";  // never undefined
        this.v2 = "";  // never undefined
        this.op = undefined;
    }
    onClick(symbol) {
        if ( !isNaN(parseInt(symbol)) || symbol == '.' ) {
            this._appendtoCurrentValue(symbol);
        }
        else if ( ['+','-','x','÷'].indexOf(symbol) >= 0 ) {
            this.op = symbol;
        }
        else if (symbol == "AC") {
            this.v1 = "";
            this.v2 = "";
            this.op = undefined;
        }
        else if (symbol == "+/-") {
            this._reverseCurrentValue();
        }
        else if (symbol == "="){
            this._calculate();
        }
        else if (symbol == "%"){
            this._calculatePercent();
        }
        else {
            console.error("unexpected symbol", symbol);
        }
        console.log(this);
    }
    getDisplayedValue() {
        return (typeof this.op === 'undefined') ? this.v1 : this.v2;
    }
    _appendtoCurrentValue(sym) {
        if (typeof this.op === 'undefined') {
            this.v1 += sym;
        } else {
            this.v2 += sym;
        }
    }
    _reverseCurrentValue() {
        if (typeof this.op === 'undefined'){
            if (this.v1[0] !== "-"){
                this.v1 = "-" + this.v1
            } else {
                this.v1 = this.v1.substring(1);
            }
        } else {
           if (this.v2[0] !== "-"){
                this.v2 = "-" + this.v2
            } else {
                this.v2=this.v2.substring(1);
            } 
        }
    }
    _calculate() {
        switch(this.op) {
            case "+":
                this.v1=parseFloat(this.v1) + parseFloat(this.v2)+""
                break;
            case "-":
                this.v1=parseFloat(this.v1) - parseFloat(this.v2)+""
                break;
            case "x":
                this.v1=parseFloat(this.v1) * parseFloat(this.v2)+""
                break;
            case "÷":
                this.v1=parseFloat(this.v1) / parseFloat(this.v2)+""
                break;
        }
        this.v2 = "";
        this.op = undefined;
    }
    _calculatePercent() {
        if (typeof this.op === 'undefined'){
            this.v1 = parseFloat(this.v1)/100+""
        } else {
            this.v2 = parseFloat(this.v2)/100+""
        }
        
    }
    
}
