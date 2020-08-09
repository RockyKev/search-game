console.log('uiscene');

class UIScene extends Phaser.Scene {
    constructor() {
        super('UI');
    }

    init() {
        //grab a refrence to the game scene.
        this.gameScene = this.scene.get('Game');
    }

    create() {
        this.setupUIElements();
        this.setupEvents();
    }

    setupUIElements() {
        //create the score text game object

        this.scoreText = this.add.text(100, 100, 'WORKING: 0', {
            fontSize: '16px',
            fill: '#fff',
        });
        console.log("ui scene");

        // this.coinIcon = this.add.image(15, 15, 'items', 3);
    }

    setupEvents() {
        console.log("I'm in this area")
        //listen for the updateScore event from the game scene
        // this.gameScene.events.on('updateScore', (score) => {
        //     this.scoreText.setText(`Coins: ${score}`);
        // });
    }
}
