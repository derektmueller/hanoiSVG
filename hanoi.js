

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
};

Disk.prototype.drawBack = function () {
    // bottom back
    d3.select ('svg')
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
    // inner band 
    d3.select ('svg')
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
    // top back
    d3.select ('svg')
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
};

Disk.prototype.drawFront = function () {
    // bottom front
    d3.select ('svg')
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
    // outer band 
    d3.select ('svg')
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
    // top front
    d3.select ('svg')
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

Rod.prototype.draw = function () {
    this.disks.forEach (function (disk) { 
        disk.drawBack ();
    });
    d3.select ('svg')
        .append ('path')
        .attr ({
            d: 'M' + (this.number * this.offsetX) + ' ' + 
                    (this.height + this.offsetY) +
               ' L' + (this.number * this.offsetX) + ' ' + 
                    this.offsetY + 
               ' A' + this.width / 2 + ' ' + this.width / 2 + ' ' +
                    0 + ' ' + 0 + ' ' + 1 + ' ' +
                    (this.number * this.offsetX + this.width) + ' ' + 
                    this.offsetY + 
               ' A' + this.width / 2 + ' ' + this.width / 2 + ' ' +
                    0 + ' ' + 0 + ' ' + 1 + ' ' +
                    (this.number * this.offsetX) + ' ' + 
                    this.offsetY + 
               ' A' + this.width / 2 + ' ' + this.width / 2 + ' ' +
                    0 + ' ' + 0 + ' ' + 1 + ' ' +
                    (this.number * this.offsetX + this.width) + ' ' + 
                    this.offsetY + 
               ' L' + (this.number * this.offsetX + this.width) + ' ' + 
                    (this.height + this.offsetY) +
               ' A' + this.width / 2 + ' ' + this.width / 2 + ' ' +
                    0 + ' ' + 0 + ' ' + 1 + ' ' +
                    (this.number * this.offsetX) + ' ' + 
                    (this.offsetY + this.height)
        }).style ({
            fill: this.fill,
            stroke: 'black',
            'stroke-width': '2px'
        })
    ;
    this.disks.forEach (function (disk) { 
        disk.drawFront ();
    });
};

/**
 * @param Disk disk
 * @param Rod otherRod
 */
Rod.prototype.transferDisk = function (disk, otherRod) {
};

return Rod;

}) ();


function hanoi () {
    var offsetX = 180;
    var offsetY = 100;
    var diskHeight = 10;
    var diskRadiusDelta = 30;
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
    rod1.addDisk (1);
    rod1.draw ();
    var rod2 = new Rod ({
        number: 2,
        height: 250,
        offsetX: offsetX,
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
        offsetX: offsetX,
        offsetY: offsetY,
        width: 20,
        diskHeight: diskHeight,
        diskColors: diskRadiusDelta,
        fill: 'red'
    });
    rod3.draw ();
}

hanoi ();

