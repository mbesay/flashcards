var Cloze = function(text, cloze) {

    this.text = text;
    this.cloze = this.text.match(/\(([^)]+)\)/)[1];
    this.printCloze = function() {
        console.log(this.cloze);
    }
    this.printText = function() {
        console.log(this.text);
    }

    

        Cloze.prototype.printAnswer = function() {

            console.log('NOPE!!!: \n' + this.text.replace(/[{()}]/g, ''));
        }

        module.exports = Cloze;
