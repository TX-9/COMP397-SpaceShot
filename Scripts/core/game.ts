/// <reference path="_reference.ts"/>

/**
 * @author Changbae Lee clee194@my.centennialcollege.ca
 * @student Chang Bae Lee(300770812), Hao Jiang(300858525)
 * @date July 31, 2016
 * @version 0.5 - Initial version of core
 * @description This file is the entry point for the game
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

namespace core {

    // Variable Declarations

    // declare a reference to the Preloader
    export let assets: createjs.LoadQueue;
    // make a reference to the canvas element
    let canvas: HTMLElement = document.getElementById("canvas");
    // create a reference to a stage container
    export let stage: createjs.Stage;

    // score and lives variables
    export let score: number = 0;
    export let highScore: number = 0;
    export let lives: number = 5;

    let helloLabel: objects.Label;

    let startButton: objects.Button; // reference to our button class

    // declare scene variables
    let currentScene: objects.Scene;
    export let scene: number;

    let menu: scenes.Menu;
    let over: scenes.Over;
    let level1: scenes.Level1;
    let rule: scenes.Rule;


    // asset manifest for images and sounds
    let assetData: objects.Asset[] = [
        { id: "ruleButton", src: "../../Assets/images/ruleButton.png" },
         { id: "rules", src: "../../Assets/images/instruction.png" },
        { id: "startButton", src: "../../Assets/images/startButton.png" },
        { id: "restartButton", src: "../../Assets/images/restartButton.png" },
        { id: "space1", src: "../../Assets/images/space1.gif" },
        { id: "diamond", src: "../../Assets/images/diamond.png" },
        { id: "player", src: "../../Assets/images/player.png" },
        { id: "enemy1", src: "../../Assets/images/enemy1.png" },
        { id: "dung_sound", src: "../../Assets/audio/dung_sound.wav" },
        { id: "gold_sound", src: "../../Assets/audio/gold_sound.wav" }
    ];

    /**
     * This method preloads assets for the game
     * 
     * @method preload
     * @returns {void}
     */
    function preload(): void {
        assets = new createjs.LoadQueue(); // instantiates the loader
        assets.installPlugin(createjs.Sound);
        assets.on("complete", init, this);
        assets.loadManifest(assetData);
    }


    /**
     * This method is the entry point for the application
     * 
     * @method init
     * @return {void}
     */
    function init(): void {
        stage = new createjs.Stage(canvas); // instatiate the stage container
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event

        // setup the default scene
        scene = config.Scene.MENU;
        changeScene();
    }

    /**
     * This is the main game loop
     * 
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event: createjs.Event): void {

        // call the scenes's update
        currentScene.Update();

        stage.update(); // refreshes the stage
    }

    /**
     * This is the startButton click event handler
     * 
     * @param {createjs.MouseEvent} event
     */
    function startButtonClick(event: createjs.MouseEvent) {
        helloLabel.text = "clicked!";
    }

    export function changeScene(): void {

        //Launch Various Scenes
        switch (scene) {
            // Show the MENU Scene
            case config.Scene.MENU:
                stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            // Show the RULE Scene
            case config.Scene.RULE:
                stage.removeAllChildren();
                rule = new scenes.Rule();
                
                currentScene = rule;
                break;
            // Show the LEVEL1 Scene
            case config.Scene.LEVEL1:
                stage.removeAllChildren();
                level1 = new scenes.Level1();
                currentScene = level1;
                break;
            // Show the GAME OVER Scene
            case config.Scene.OVER:
                stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
        }
    }



    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);

}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++