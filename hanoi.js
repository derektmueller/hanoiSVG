/*
github.com/parenparen/svgTowersOfHanoi

Animated SVG-based Towers of Hanoi
Copyright (C) 2014  Derek T. Mueller

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var Disk = (function () {

/**
 * @var Number radius
 * @var Number radiusInner
 * @var Number height
 * @var Number centerX
 * @var Number centerY
 */
function Disk (argsDict) {
    var that = this;
    Object.keys (argsDict).map (function (value) {
        that[value] = argsDict[value];
    });
    this.elements = [];
};

Disk.prototype.clear = function () {
    this.elements.forEach (function (elem) { elem.remove (); });
};

Disk.prototype.drawBack = function () {
    var bottomBack = d3.select ('svg')
        .append ('path')
        .attr ({
            d: 'M' + (this.centerX - this.radius) + ' ' + 
                    (this.centerY + this.height) +
                ' A' + this.radius + ' ' + this.radius + ' ' +
                    0 + ' ' + 0 + ' ' + 1 + ' ' +
                    (this.centerX + this.radius) + ' ' + 
                    (this.centerY + this.height) +
                ' L' + (this.centerX + this.radiusInner) + ' ' + 
                    (this.centerY + this.height) +
                ' A' + this.radiusInner + ' ' + this.radiusInner + ' ' +
                    0 + ' ' + 0 + ' ' + 0 + ' ' +
                    (this.centerX - this.radiusInner) + ' ' + 
                    (this.centerY + this.height) + 
                'Z'
        }).style ({
            fill: this.fill,
            stroke: 'black',
            'stroke-width': '2px'
        })
    ;
    var innerBand = d3.select ('svg')
        .append ('path')
        .attr ({
            d: 'M' + (this.centerX - this.radiusInner) + ' ' + 
                    (this.centerY + this.height) +
                'L' + (this.centerX - this.radiusInner) + ' ' +
                    (this.centerY) + ' ' +
                ' A' + this.radiusInner + ' ' + this.radiusInner + ' ' +
                    0 + ' ' + 0 + ' ' + 1 + ' ' +
                    (this.centerX + this.radiusInner) + ' ' + 
                    (this.centerY) + 
                'L' + (this.centerX + this.radiusInner) + ' ' +
                    (this.centerY + this.height) + ' ' +
                ' A' + this.radiusInner + ' ' + this.radiusInner + ' ' +
                    0 + ' ' + 0 + ' ' + 0 + ' ' +
                    (this.centerX - this.radiusInner) + ' ' + 
                    (this.centerY + this.height)
        }).style ({
            fill: this.fill,
            stroke: 'black',
            'stroke-width': '2px'
        })
    ;
    var topBack = d3.select ('svg')
        .append ('path')
        .attr ({
            d: 'M' + (this.centerX - this.radius) + ' ' + 
                    (this.centerY) +
                ' A' + this.radius + ' ' + this.radius + ' ' +
                    0 + ' ' + 0 + ' ' + 1 + ' ' +
                    (this.centerX + this.radius) + ' ' + 
                    (this.centerY) +
                ' L' + (this.centerX + this.radiusInner) + ' ' + 
                    (this.centerY) +
                ' A' + this.radiusInner + ' ' + this.radiusInner + ' ' +
                    0 + ' ' + 0 + ' ' + 0 + ' ' +
                    (this.centerX - this.radiusInner) + ' ' + 
                    (this.centerY) + 
                'Z'
        }).style ({
            fill: this.fill,
            stroke: 'black',
            'stroke-width': '2px'
        })
    ;
    this.elements.push (bottomBack, innerBand, topBack);
};

Disk.prototype.drawFront = function () {
    var bottomFront = d3.select ('svg')
        .append ('path')
        .attr ({
            d: 'M' + (this.centerX - this.radius) + ' ' + 
                    (this.centerY + this.height) +
                ' A' + this.radius + ' ' + this.radius + ' ' +
                    0 + ' ' + 0 + ' ' + 0 + ' ' +
                    (this.centerX + this.radius) + ' ' + 
                    (this.centerY + this.height) +
                ' L' + (this.centerX + this.radiusInner) + ' ' + 
                    (this.centerY + this.height) +
                ' A' + this.radiusInner + ' ' + this.radiusInner + ' ' +
                    0 + ' ' + 0 + ' ' + 1 + ' ' +
                    (this.centerX - this.radiusInner) + ' ' + 
                    (this.centerY + this.height) + 
                'Z'
        }).style ({
            fill: this.fill,
            stroke: 'black',
            'stroke-width': '2px'
        })
    ;
    var outerBand = d3.select ('svg')
        .append ('path')
        .attr ({
            d: 'M' + (this.centerX - this.radius) + ' ' + 
                    (this.centerY + this.height) +
                'L' + (this.centerX - this.radius) + ' ' +
                    (this.centerY) + ' ' +
                ' A' + this.radius + ' ' + this.radius + ' ' +
                    0 + ' ' + 0 + ' ' + 0 + ' ' +
                    (this.centerX + this.radius) + ' ' + 
                    (this.centerY) + 
                'L' + (this.centerX + this.radius) + ' ' +
                    (this.centerY + this.height) + ' ' +
                ' A' + this.radius + ' ' + this.radius + ' ' +
                    0 + ' ' + 0 + ' ' + 1 + ' ' +
                    (this.centerX - this.radius) + ' ' + 
                    (this.centerY + this.height)
        }).style ({
            fill: this.fill,
            //fill: 'gray',
            stroke: 'black',
            'stroke-width': '2px'
        })
    ;
    var topFront = d3.select ('svg')
        .append ('path')
        .attr ({
            d: 'M' + (this.centerX - this.radius) + ' ' + 
                    (this.centerY) +
                ' A' + this.radius + ' ' + this.radius + ' ' +
                    0 + ' ' + 0 + ' ' + 0 + ' ' +
                    (this.centerX + this.radius) + ' ' + 
                    (this.centerY) +
                ' L' + (this.centerX + this.radiusInner) + ' ' + 
                    (this.centerY) +
                ' A' + this.radiusInner + ' ' + this.radiusInner + ' ' +
                    0 + ' ' + 0 + ' ' + 1 + ' ' +
                    (this.centerX - this.radiusInner) + ' ' + 
                    (this.centerY) + 
                'Z'
        }).style ({
            fill: this.fill,
            stroke: 'black',
            'stroke-width': '2px'
        })
    ;
    this.elements.push (bottomFront, outerBand, topFront);
};

return Disk;

}) ();

var Rod = (function () {

/**
 * @var Number number
 * @var Number height
 * @var Number offsetX
 * @var Number offsetY
 * @var Number width
 */
function Rod (argsDict) {
    var that = this;
    Object.keys (argsDict).map (function (value) {
        that[value] = argsDict[value];
    });
    
    this.disks = []; // stack of disks
    this.elements = [];
};


Rod.prototype.addDisk = function (diskNumber) {
    var radius = diskNumber * this.diskRadiusDelta;
    this.disks.push (new Disk ({
        radius: radius,
        radiusInner: this.width / 2,
        height: this.diskHeight,
        centerX: this.offsetX + this.width / 2,
        centerY: this.height + this.offsetY - 
            this.disks.length * this.diskHeight,
        fill: this.diskColors[diskNumber - 1]
    }));
};

Rod.prototype.clear = function (clear) {
    this.elements.forEach (function (elem) { elem.remove (); });
};

Rod.prototype.draw = function (clear) {
    var clear = typeof clear === 'undefined' ? false : clear; 
    if (clear) {
        this.clear ();
        this.disks.forEach (function (disk) { 
            disk.clear ();
        });
    }
    this.disks.forEach (function (disk) { 
        disk.drawBack ();
    });
    var rod = d3.select ('svg')
        .append ('path')
        .attr ({
            d: 'M' + (this.offsetX) + ' ' + 
                    (this.height + this.offsetY) +
               ' L' + (this.offsetX) + ' ' + 
                    this.offsetY + 
               ' A' + this.width / 2 + ' ' + this.width / 2 + ' ' +
                    0 + ' ' + 0 + ' ' + 1 + ' ' +
                    (this.offsetX + this.width) + ' ' + 
                    this.offsetY + 
               ' A' + this.width / 2 + ' ' + this.width / 2 + ' ' +
                    0 + ' ' + 0 + ' ' + 1 + ' ' +
                    (this.offsetX) + ' ' + 
                    this.offsetY + 
               ' A' + this.width / 2 + ' ' + this.width / 2 + ' ' +
                    0 + ' ' + 0 + ' ' + 1 + ' ' +
                    (this.offsetX + this.width) + ' ' + 
                    this.offsetY + 
               ' L' + (this.offsetX + this.width) + ' ' + 
                    (this.height + this.offsetY) +
               ' A' + this.width / 2 + ' ' + this.width / 2 + ' ' +
                    0 + ' ' + 0 + ' ' + 1 + ' ' +
                    (this.offsetX) + ' ' + 
                    (this.offsetY + this.height)
        }).style ({
            fill: this.fill,
            stroke: 'black',
            'stroke-width': '2px'
        })
    ;
    this.elements.push (rod);
    this.disks.forEach (function (disk) { 
        disk.drawFront ();
    });
};

/**
 * @return Promise
 */
Rod.prototype._animateRemoveDisk = function () {
    var that = this;
    return new Promise (function (resolve, reject) {
        var timeout = window.setInterval (function () {
            var oldCenterY = that.disks[that.disks.length - 1].centerY;
            if (oldCenterY < 50) {
                window.clearInterval (timeout);
                resolve ();      
            } else {
                that.disks[that.disks.length - 1].centerY = 
                    oldCenterY - 10;
                that.draw (true);
            }
        }, 30);
    });
};

/**
 * @param Rod otherRod
 * @return Promise
 */
Rod.prototype._animateMoveDiskOver = function (otherRod) {
    var that = this;
    var deltaX = (otherRod.offsetX - this.offsetX);
    return new Promise (function (resolve, reject) {
        var timeout = window.setInterval (function () {
            var oldCenterX = that.disks[that.disks.length - 1].centerX;
            if (that.number < otherRod.number &&
                oldCenterX >= otherRod.offsetX + (otherRod.width / 2) ||
                that.number > otherRod.number &&
                oldCenterX <= otherRod.offsetX + (otherRod.width / 2)) {

                window.clearInterval (timeout);
                resolve ();      
            } else {
                that.disks[that.disks.length - 1].centerX = 
                    oldCenterX + deltaX / 20;
                that.draw (true);
            }
        }, 20);
    });
};

/**
 * @return Promise
 */
Rod.prototype._animateAddDisk = function () {
    var that = this;
    if (this.disks.length === 1) {
        var destY = this.offsetY + this.height;
    } else {
        var destY = this.disks[this.disks.length - 2].centerY -
            this.diskHeight;
    }
    return new Promise (function (resolve, reject) {
        var timeout = window.setInterval (function () {
            var oldCenterY = that.disks[that.disks.length - 1].centerY;
            if (oldCenterY >= destY) {
                window.clearInterval (timeout);
                resolve ();      
            } else {
                that.disks[that.disks.length - 1].centerY = 
                    oldCenterY + 10;
                that.draw (true);
            }
        }, 30);
    });
};

/**
 * @param Disk disk
 * @param Rod otherRod
 */
Rod.prototype.transferDisk = function (otherRod) {
    var that = this;
    return new Promise (function (resolve, reject) {
        that._animateRemoveDisk ().
            then (function () {
                return that._animateMoveDiskOver (otherRod)
            }).
            then (function () {
                otherRod.disks.push (that.disks.pop ());
                return otherRod._animateAddDisk ();
            }).
            then (function () {
                resolve ();
            });
    });
};

return Rod;

}) ();


function setUpHanoi (n) {
    var offsetX = 200;
    var rodSeparation = 280;
    var offsetY = 100;
    var diskHeight = 10;
    var diskRadiusDelta = 20;
    var diskColors = [
        'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
    ];

    var rod1 = new Rod ({
        number: 1,
        height: 250,
        offsetX: offsetX,
        offsetY: offsetY,
        width: 20,
        diskHeight: diskHeight,
        diskRadiusDelta: diskRadiusDelta,
        diskColors: diskColors,
        fill: 'green'
    });
    //rod1.addDisk (7);
    //rod1.addDisk (6);
    for (var i = 0; i < n; i++) {
        rod1.addDisk (n - i);
    }
    rod1.draw ();
    var rod2 = new Rod ({
        number: 2,
        height: 250,
        offsetX: offsetX + rodSeparation,
        offsetY: offsetY,
        width: 20,
        diskHeight: diskHeight,
        diskColors: diskRadiusDelta,
        fill: 'orange'
    });
    rod2.draw ();
    var rod3 = new Rod ({
        number: 3,
        height: 250,
        offsetX: offsetX + 2 * rodSeparation,
        offsetY: offsetY,
        width: 20,
        diskHeight: diskHeight,
        diskColors: diskRadiusDelta,
        fill: 'red'
    });
    rod3.draw ();

    return [rod1, rod2, rod3];

}

function hanoi (n, rodA, rodB, instructions) {
    var rodC = 3 - ((rodA + rodB) % 3);
    if (n === 1) {
        instructions.push (rodA + '->' + rodB);
    } else {
        hanoi (n - 1, rodA, rodC, instructions); 
        instructions.push (rodA + '->' + rodB);
        hanoi (n - 1, rodC, rodB, instructions); 
    }
}

var rods = setUpHanoi (5);
var instructions = [];
hanoi (5, 1, 3, instructions);

executeInstructions (instructions);

function executeInstructions (instructions) {
    if (!instructions.length) return;
    var nextInstruction = instructions.shift ();
    var a = parseInt (nextInstruction.split ('').shift (), 10);
    var b = parseInt (nextInstruction.split ('').pop (), 10);
    return rods[a - 1].transferDisk (rods[b - 1]).then (function () {
        executeInstructions (instructions);
    });
}


/*rods[0].transferDisk (rods[2]).then (function () {
    rods[2].transferDisk (rods[0]);
});*/



