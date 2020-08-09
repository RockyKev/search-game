// create a new scene
console.log('loadingScene');
let loadingScene = new Phaser.Scene('Loading');

// load asset files for our game
loadingScene.preload = function () {
    const gameH = this.sys.game.config.height;
    const gameW = this.sys.game.config.width;

    //grab logo from bootScene
    let logo = this.add.sprite(gameW / 2, 200, 'logo');

    // progress bar bg
    let bgBar = this.add.graphics();
    const barW = 150;
    const barH = 30;

    bgBar.setPosition(gameW / 2 - barW / 2, gameH / 2 - barH / 2);
    bgBar.fillStyle(0xf5f5f5, 1);
    bgBar.fillRect(0, 0, barW, barH);

    // progress bar
    let progressBar = this.add.graphics();
    progressBar.setPosition(gameW / 2 - barW / 2, gameH / 2 - barH / 2);

    // listen to the 'progress' event - triggers whenfiles load
    this.load.on(
        'progress',
        function (value) {
            //clearing progress bar
            progressBar.clear();

            progressBar.fillStyle(0x9ad98d, 1);
            progressBar.fillRect(0, 0, value * barW, barH);
        },
        this
    );



    // load assets
    this.load.image('backyard', 'assets/images/trees-bg2.jpg');
    this.load.image('background', 'assets/images/bg-mario.jpg');
    this.load.image('flower', 'assets/images/flower.png');

    this.load.image('mario01', "assets/images/mario/mario-12items_01.png");
    this.load.image('mario02', "assets/images/mario/mario-12items_02.png");
    this.load.image('mario03', "assets/images/mario/mario-12items_03.gif");
    this.load.image('mario04', "assets/images/mario/mario-12items_04.gif");
    this.load.image('mario05', "assets/images/mario/mario-12items_05.png");
    this.load.image('mario06', "assets/images/mario/mario-12items_06.gif");
    this.load.image('mario07', "assets/images/mario/mario-12items_07.gif");
    this.load.image('mario08', "assets/images/mario/mario-12items_08.gif");
    this.load.image('mario09', "assets/images/mario/mario-12items_09.gif");
    this.load.image('mario10', "assets/images/mario/mario-12items_10.gif");
    this.load.image('mario11', "assets/images/mario/mario-12items_11.gif");
    this.load.image('mario12', "assets/images/mario/mario-12items_12.gif");

    // // load audio
    this.load.audio('title_bgm', 'assets/smw_title_bgm.mp3');
    this.load.audio('game_bgm', 'assets/smw_overworld_bgm.mp3');

    // // load audio sprite
    // this.load.audioSprite('collect', 'assets/smw_coin.wav');
    this.load.audio('victory', 'assets/smw_course_clear.wav');
    this.load.audio('collect', 'assets/smw_coin.wav');

    // this.load.spritesheet('mario', 'assets/images/mario-12items.png', {
    //     frameWidth: 40, frameHeight: 40
    // })
    // this.load.atlas('mario', 'assets/images/spritesheet.png', 'assets/images/spritesheet.json',)


    // TESTING ONLY COMMENT OUT
    // console.log('load faker is active');
    // for (let i = 0; i < 100; i++) {
    //     this.load.image('test' + i, 'assets/images/candy.png');
    // }
};

loadingScene.create = function () {

    this.scene.start('Home');
    // this.scene.start('Game');
};
