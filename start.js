class start extends Phaser.Scene{
    constructor(){
      super("Start");
    }
    preload() {
        this.load.image("bg_Start", "assets/DinoWorld.png"); // السماء
        this.load.image("startButton", "assets/start.png"); // الصخور
    }

    create(){
      this.scene.start("instructions");
    }
}
