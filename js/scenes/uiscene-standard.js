console.log("uiScene");

// create a new scene
let uiScene = new Phaser.Scene('UI');

uiScene.init = function () {
    //this.gameScene = this.scene.get('Game');
    console.log("I'm in the initalize scene!");
};

// executed once, after assets were loaded
uiScene.create = function () {
    console.log("I'm in the ui scene create!");
    this.setupUIElements();
    this.setupEvents();
}

uiScene.setupUIElements = function () {
    //create the score text game object

    this.mario01Btn = this.add.image(40, 40 * 01, 'mario01').setInteractive();
    this.mario02Btn = this.add.image(40, 40 * 02, 'mario02').setInteractive();
    this.mario03Btn = this.add.image(40, 40 * 03, 'mario03').setInteractive();
    this.mario04Btn = this.add.image(40, 40 * 04, 'mario04').setInteractive();
    this.mario05Btn = this.add.image(40, 40 * 05, 'mario05').setInteractive();
    this.mario06Btn = this.add.image(40, 40 * 06, 'mario06').setInteractive();
    this.mario07Btn = this.add.image(40, 40 * 07, 'mario07').setInteractive();
    this.mario08Btn = this.add.image(40, 40 * 08, 'mario08').setInteractive();
    this.mario09Btn = this.add.image(40, 40 * 09, 'mario09').setInteractive();
    this.mario10Btn = this.add.image(40, 40 * 10, 'mario10').setInteractive();
    this.mario11Btn = this.add.image(40, 40 * 11, 'mario11').setInteractive();
    this.mario12Btn = this.add.image(40, 40 * 12, 'mario12').setInteractive();

    this.scoreText = this.add.text(100, 100, 'WORKING: 0', {
        fontSize: '16px',
        fill: '#fff',
    });
    console.log("The ui scene has fired");

    // this.coinIcon = this.add.image(15, 15, 'items', 3);
}

uiScene.setupEvents = function () {
    console.log("I'm in this area")
    //listen for the updateScore event from the game scene
    // this.gameScene.events.on('updateScore', (score) => {
    //     this.scoreText.setText(`Coins: ${score}`);
    // });
}
