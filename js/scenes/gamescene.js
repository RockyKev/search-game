console.log('gameScene');

// create a new scene
let gameScene = new Phaser.Scene('Game');

// some parameters for our scene
gameScene.init = function () {
    //none
    // this.scene.launch('UI');
    // console.log("    this.scene.launch('UI');", this.scene.launch('UI'))
    // console.log("generate UI scene");


    this.itemsPicked = ["dog"];
    this.totalFound = this.itemsPicked.length;

};


gameScene.create = function () {


    // TODO
    // create the HUD
    // define a 'updateHUD'

    // If a element is picked, then make it colored in the game area.

    // It also checks if all 12 is found before taking you to a game over.

    // load a countdown before starting.
    // Maybe as a overlay?

    // add a way to move the screen left and right.



    // game background
    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);


    // bg.setDisplaySize(this.sys.canvas.width, this.sys.canvas.height);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    // random dice
    const getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // const flowerX = getRandomInt(1, 8);
    // console.log(flowerX);

    // create the flower
    // this.flowerBtn = this.add.sprite(75 * flowerX, 400, 'flower').setInteractive();
    // this.flowerBtn.setScale(0.25);
    // this.flowerBtn.on('pointerdown', this.setGameOver);

    this.createTopUI();
    this.createBottomUI();

    // create all the seek and find graphics
    this.createAllElements();



};

gameScene.createTopUI = function () {
    let hudX = 20;
    let hudY = 20;

    let hudText = this.add.text(hudX, hudY, `TOTAL CLICKS: ${this.totalFound}/12`, {
        fontSize: '24px',
        fill: '#FFF',
    });
    hudText.depth = 1;

    let textBg = this.add.graphics();
    textBg.fillStyle(0x00000, 0.9);
    textBg.fillRect(
        hudX - 10,
        hudY - 10,
        hudText.width + 20,
        hudText.height + 20
    );
    console.log("The top ui scene has fired");

}
gameScene.createBottomUI = function () {

    const gameH = this.sys.game.config.height;
    const gameW = this.sys.game.config.width;
    console.log(gameW)
    console.log(gameH)

    // should really make this into a array or something
    this.mario01ui = this.add.image(gameW - (60 * 01), gameH - 50, 'mario01');
    this.mario02ui = this.add.image(gameW - (60 * 02), gameH - 50, 'mario02');
    this.mario03ui = this.add.image(gameW - (60 * 03), gameH - 50, 'mario03');
    this.mario04ui = this.add.image(gameW - (60 * 04), gameH - 50, 'mario04');
    this.mario05ui = this.add.image(gameW - (60 * 05), gameH - 50, 'mario05');
    this.mario06ui = this.add.image(gameW - (60 * 06), gameH - 50, 'mario06');
    this.mario07ui = this.add.image(gameW - (60 * 07), gameH - 50, 'mario07');
    this.mario08ui = this.add.image(gameW - (60 * 08), gameH - 50, 'mario08');
    this.mario09ui = this.add.image(gameW - (60 * 09), gameH - 50, 'mario09');
    this.mario10ui = this.add.image(gameW - (60 * 10), gameH - 50, 'mario10');
    this.mario11ui = this.add.image(gameW - (60 * 11), gameH - 50, 'mario11');
    this.mario12ui = this.add.image(gameW - (60 * 12), gameH - 50, 'mario12');

    this.mario01ui.depth = 1;
    this.mario02ui.depth = 1;
    this.mario03ui.depth = 1;
    this.mario04ui.depth = 1;
    this.mario05ui.depth = 1;
    this.mario06ui.depth = 1;
    this.mario07ui.depth = 1;
    this.mario08ui.depth = 1;
    this.mario09ui.depth = 1;
    this.mario10ui.depth = 1;
    this.mario11ui.depth = 1;
    this.mario12ui.depth = 1;

    this.mario01ui.alpha = 0.5;
    this.mario02ui.alpha = 0.5;
    this.mario03ui.alpha = 0.5;
    this.mario04ui.alpha = 0.5;
    this.mario05ui.alpha = 0.5;
    this.mario06ui.alpha = 0.5;
    this.mario07ui.alpha = 0.5;
    this.mario08ui.alpha = 0.5;
    this.mario09ui.alpha = 0.5;
    this.mario10ui.alpha = 0.5;
    this.mario11ui.alpha = 0.5;
    this.mario12ui.alpha = 0.5;


    let uiBg = this.add.graphics();
    uiBg.fillStyle(0x00000, 0.9);
    uiBg.fillRect(
        0,
        gameH - 80,
        gameW,
        60
    );
    uiBg.depth = 0;
    console.log("The ui scene has fired");
}

gameScene.createAllElements = function () {

    // create all 12 items

    //this.flowerBtn = this.add.image(400, 400, 'mario').setInteractive();
    // this.flowerBtn.setScale(0.25);
    // this.flowerBtn.on('pointerdown', this.setGameOver);

    this.mario01btn = this.add.image(40 * 01, 100, 'mario01').setInteractive();
    this.mario02btn = this.add.image(40 * 02, 100, 'mario02').setInteractive();
    this.mario03btn = this.add.image(40 * 03, 100, 'mario03').setInteractive();
    this.mario04btn = this.add.image(40 * 04, 100, 'mario04').setInteractive();
    this.mario05btn = this.add.image(40 * 05, 100, 'mario05').setInteractive();
    this.mario06btn = this.add.image(40 * 06, 100, 'mario06').setInteractive();
    this.mario07btn = this.add.image(40 * 07, 100, 'mario07').setInteractive();
    this.mario08btn = this.add.image(40 * 08, 100, 'mario08').setInteractive();
    this.mario09btn = this.add.image(40 * 09, 100, 'mario09').setInteractive();
    this.mario10btn = this.add.image(40 * 10, 100, 'mario10').setInteractive();
    this.mario11btn = this.add.image(40 * 11, 100, 'mario11').setInteractive();
    this.mario12btn = this.add.image(40 * 12, 100, 'mario12').setInteractive();


    this.mario01btn.on('pointerdown', this.pickItem);
    this.mario02btn.on('pointerdown', this.pickItem);
    this.mario03btn.on('pointerdown', this.pickItem);
    this.mario04btn.on('pointerdown', this.pickItem);
    this.mario05btn.on('pointerdown', this.pickItem);
    this.mario06btn.on('pointerdown', this.pickItem);
    this.mario07btn.on('pointerdown', this.pickItem);
    this.mario08btn.on('pointerdown', this.pickItem);
    this.mario09btn.on('pointerdown', this.pickItem);
    this.mario10btn.on('pointerdown', this.pickItem);
    this.mario11btn.on('pointerdown', this.pickItem);
    this.mario12btn.on('pointerdown', this.pickItem);

}


gameScene.pickItem = function () {

    // this.scene.



}

gameScene.setGameOver = function () {
    console.log("Ive been clicked!");

    // Show victory screen
    const gameH = this.scene.sys.game.config.height;
    const gameW = this.scene.sys.game.config.width;

    console.log(this);

    let text = this.scene.add.text(gameW / 2, gameH / 2, 'YOU FOUND IT', {
        font: '40px Arial',
        fill: '#ffffff',
    });

    text.setOrigin(0.5, 0.5);
    text.depth = 1;

    // text background -- to add colors, you start with 0x, so 0xfffff
    let textBg = this.scene.add.graphics();
    textBg.fillStyle(0x00000, 0.7);
    textBg.fillRect(
        gameW / 2 - text.width / 2 - 10,
        gameH / 2 - text.height / 2 - 10,
        text.width + 20,
        text.height + 20
    );

    // Reset the game after 5 sec
    this.scene.time.addEvent({
        delay: 1000,
        repeat: 0,
        callbackScope: this,
        callback: function () {
            this.scene.scene.start('Home');
        },
    });

}

