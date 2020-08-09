console.log('gameScene');

// create a new scene
let gameScene = new Phaser.Scene('Game');

// some parameters for our scene
gameScene.init = function () {
    //none
    // this.scene.launch('UI');
    // console.log("    this.scene.launch('UI');", this.scene.launch('UI'))
    // console.log("generate UI scene");


    this.itemsPicked = [];
    this.totalFound = this.itemsPicked.length;

};


gameScene.create = function () {

    this.music = this.sound.add('game_bgm');

    this.music.play();

    // TODO
    // It also checks if all 12 is found before taking you to a game over.

    // load a countdown before starting.
    // Maybe as a overlay?

    // add a way to move the screen left and right.

    // game background
    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

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

    // enable cursor keys
    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.on('pointerdown', function (pointer) {
        console.log(pointer.x, pointer.y);
    });

    // load all the sound
    this.sfxCoin = this.sound.add('collect');
    this.sfxVictory = this.sound.add('victory');


};

gameScene.createTopUI = function () {
    let hudX = 20;
    let hudY = 20;

    this.hudText = this.add.text(hudX, hudY, `TOTAL CLICKS: ${this.totalFound}/12`, {
        fontSize: '24px',
        fill: '#FFF',
    });
    this.hudText.depth = 1;

    let textBg = this.add.graphics();
    textBg.fillStyle(0x00000, 0.9);
    textBg.fillRect(
        hudX - 20,
        hudY - 10,
        this.hudText.width + 40,
        this.hudText.height + 20
    );


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

    this.mario01ui.alpha = 0.3;
    this.mario02ui.alpha = 0.3;
    this.mario03ui.alpha = 0.3;
    this.mario04ui.alpha = 0.3;
    this.mario05ui.alpha = 0.3;
    this.mario06ui.alpha = 0.3;
    this.mario07ui.alpha = 0.3;
    this.mario08ui.alpha = 0.3;
    this.mario09ui.alpha = 0.3;
    this.mario10ui.alpha = 0.3;
    this.mario11ui.alpha = 0.3;
    this.mario12ui.alpha = 0.3;


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

    // this.mario01btn = this.add.image(40 * 01, 100, 'mario01').setInteractive();
    // this.mario02btn = this.add.image(40 * 02, 100, 'mario02').setInteractive();
    // this.mario03btn = this.add.image(40 * 03, 100, 'mario03').setInteractive();
    // this.mario04btn = this.add.image(40 * 04, 100, 'mario04').setInteractive();
    // this.mario05btn = this.add.image(40 * 05, 100, 'mario05').setInteractive();
    // this.mario06btn = this.add.image(40 * 06, 100, 'mario06').setInteractive();
    // this.mario07btn = this.add.image(40 * 07, 100, 'mario07').setInteractive();
    // this.mario08btn = this.add.image(40 * 08, 100, 'mario08').setInteractive();
    // this.mario09btn = this.add.image(40 * 09, 100, 'mario09').setInteractive();
    // this.mario10btn = this.add.image(40 * 10, 100, 'mario10').setInteractive();
    // this.mario11btn = this.add.image(40 * 11, 100, 'mario11').setInteractive();
    // this.mario12btn = this.add.image(40 * 12, 100, 'mario12').setInteractive();

    this.mario01btn = this.add.image(022, 258, 'mario01').setInteractive(); // coin
    this.mario02btn = this.add.image(363, 120, 'mario02').setInteractive(); // feather
    this.mario03btn = this.add.image(528, 018, 'mario03').setInteractive(); // blue
    this.mario04btn = this.add.image(208, 199, 'mario04').setInteractive(); // moon
    this.mario05btn = this.add.image(331, 022, 'mario05').setInteractive(); // star
    this.mario06btn = this.add.image(167, 323, 'mario06').setInteractive(); // flower
    this.mario07btn = this.add.image(075, 300, 'mario07').setInteractive(); // redstar
    this.mario08btn = this.add.image(540, 325, 'mario08').setInteractive(); // mushroom
    this.mario09btn = this.add.image(440, 178, 'mario09').setInteractive(); // music
    this.mario10btn = this.add.image(405, 353, 'mario10').setInteractive(); // questionbx
    this.mario11btn = this.add.image(739, 139, 'mario11').setInteractive(); // redbox
    this.mario12btn = this.add.image(480, 230, 'mario12').setInteractive(); // yoshicoin



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

    // Grab the name of the item -> put in global
    let itemSelectedName = this.texture.key;
    gameScene.itemsPicked.push(itemSelectedName);

    console.log(itemSelectedName);
    console.log(gameScene.itemsPicked);
    // console.log("mario01 alpha", )
    // change alpha


    // bind items
    const bindNames = {
        "mario01": gameScene.mario01ui,
        "mario02": gameScene.mario02ui,
        "mario03": gameScene.mario03ui,
        "mario04": gameScene.mario04ui,
        "mario05": gameScene.mario05ui,
        "mario06": gameScene.mario06ui,
        "mario07": gameScene.mario07ui,
        "mario08": gameScene.mario08ui,
        "mario09": gameScene.mario09ui,
        "mario10": gameScene.mario10ui,
        "mario11": gameScene.mario11ui,
        "mario12": gameScene.mario12ui,

    }

    // If clicked, make it highlight ont he toolbar.
    bindNames[itemSelectedName].alpha = 1;

    // Fire the 'update UI' code.
    gameScene.updateUI();

    // Play sfx
    gameScene.sfxCoin.play();

    // destroy the item
    this.destroy();

}

gameScene.updateUI = function () {

    // console.log("hude text", this.hudText)
    let totalFound = this.itemsPicked.length;

    let content = `TOTAL CLICKS: ${totalFound}/12`;

    this.hudText.setText(content);
    console.log("text updated")

    if (totalFound == 12) {
        console.log("YOU WIN")
        gameScene.setGameOver();
    }

}

gameScene.setGameOver = function () {
    console.log("Ive been clicked!");

    // Show victory screen
    // const gameH = this.scene.sys.game.config.height;
    // const gameW = this.scene.sys.game.config.width;
    const gameH = this.sys.game.config.height;
    const gameW = this.sys.game.config.width;

    console.log(this);

    // Stop Muysic - Play sfx
    this.music.stop();
    this.sfxVictory.play();

    let text = this.add.text(gameW / 2, gameH / 2, 'YOU FOUND THEM ALL', {
        font: '40px Arial',
        fill: '#ffffff',
    });

    text.setOrigin(0.5, 0.5);
    text.depth = 10;

    // text background -- to add colors, you start with 0x, so 0xfffff
    let textBg = this.add.graphics();
    textBg.fillStyle(0x00000, 0.7);
    textBg.fillRect(
        gameW / 2 - text.width / 2 - 10,
        gameH / 2 - text.height / 2 - 10,
        text.width + 20,
        text.height + 20
    );

    // Reset the game after 5 sec
    this.time.addEvent({
        delay: 10000,
        repeat: 0,
        callbackScope: this,
        callback: function () {
            this.scene.start('Home');
        },
    });

}

