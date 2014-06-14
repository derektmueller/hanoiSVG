

/*var Disk = (function () {

function Disk (number) {
    this.number = number;
};

Disc.prototype.draw = function () {
};

}) ();*/

var Rod = (function () {

/**
 * @var Number number
 * @var Number height
 * @var Number offset
 */
function Rod (argsDict) {
    var that = this;
    Object.keys (argsDict).map (function (value) {
        that[value] = argsDict[value];
    });
    
    this.disks = []; // stack of disks
};

Rod.prototype.draw = function () {
    console.log ('draw');
    d3.select ('svg')
        .append ('path')
        .attr ({
            d: 'M' + (this.number * this.offsetX) + ' ' + 
                    (this.height + this.offsetY) +
               ' L' + (this.number * this.offsetX) + ' ' + 
                    this.offsetY + 
               ' L' + (this.number * this.offsetX + this.width) + ' ' + 
                    this.offsetY + 
               ' L' + (this.number * this.offsetX + this.width) + ' ' + 
                    (this.height + this.offsetY) +
               ' Z'
        }).style ({
            'fill': this.fill
        })
    ;
};

Rod.prototype.addDisk = function () {
};

/**
 * @param Disk disk
 * @param Rod otherRod
 */
Rod.prototype.transferDisk = function (disk, otherRod) {
};

return Rod;

}) ();

var rod = new Rod ({
    number: 1,
    height: 250,
    offsetX: 180,
    offsetY: 20,
    width: 20,
    fill: 'green'
});

rod.draw ();

 console.log ('rod= ');
 console.log (rod);
