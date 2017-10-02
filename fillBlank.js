var fs = require("fs");

module.exports = BlankFlashcard;

function BlankFlashcard(text, blank) {
    this.text = text;
    this.blank = blank;
    this.blankDeleted = this.text.replace(this.blank, '_____');
    this.create = function() {
        var data = {
            text: this.text,
            blank: this.blank,
            blankDeleted: this.blankDeleted,
            type: "blank"
        };
        fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
            if (error) {
                console.log(error);
            }
        });
    };
     }