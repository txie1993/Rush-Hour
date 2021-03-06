/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(1);
	const GameView = __webpack_require__(3);
	
	document.addEventListener("DOMContentLoaded", function(){
	  const canvasEl = document.getElementsByTagName("canvas")[0];
	  canvasEl.width = Game.DIM_X;
	  canvasEl.height = Game.DIM_Y;
	
	  const ctx = canvasEl.getContext("2d");
	  const game = new Game(canvasEl);
	  new GameView(game, ctx).start();
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Car = __webpack_require__(2);
	
	class Game {
	    constructor(canvas) {
	        this.canvas = canvas;
	        this.canvas.addEventListener("mousedown", (e) => this.checkDown(e));
	        document.addEventListener("mousemove", (e) => this.checkMove(e));
	        document.addEventListener("mouseup", (e) => this.checkUp(e));
	        this.level = 0;
	        this.endGame = 5;
	        this.winButtons = document.getElementById("win");
	        this.completeScreen = document.getElementById("complete");
	        const resetButton = document.getElementById("reset");
	        const resetButton2 = document.getElementById("resetlevel");
	        const nextLevel = document.getElementById("nextlevel");
	        const restartButton = document.getElementById("restart");
	        resetButton.addEventListener("click", () => this.resetBoard(this.level));
	        resetButton2.addEventListener("click", () => this.resetBoard(this.level));
	        nextLevel.addEventListener("click", () => this.setCars(++this.level));
	        restartButton.addEventListener("click", () => {
	            this.level = 0;
	            this.resetBoard(this.level);
	            this.completeScreen.className = "hidden";
	        });
	        this.won = false;
	
	        this.cars = [];
	        this.currentCar = null;
	
	        this.setCars(this.level);
	
	
	    }
	
	    setCars(level) {
	        this.won = false;
	        this.winButtons.className = "hidden";
	        if (this.level < this.endGame) {
	            let newCars;
	            const yellowCar = document.getElementById("yellowCar");
	            const redCar = document.getElementById("redCar");
	            const purpleCar = document.getElementById("purpleCar");
	            const orangeCar = document.getElementById("orangeCar");
	            const blueCar = document.getElementById("blueCar");
	            const greenCar = document.getElementById("greenCar");
	            if (level === 0) newCars = [new Car({
	                id: 1,
	                pos: [5, 205],
	                len: 180,
	                height: 90,
	                game: this,
	                horizontal: true,
	                img: redCar
	            })];
	            else if (level === 1) newCars = [new Car({
	                    id: 1,
	                    pos: [5, 205],
	                    len: 180,
	                    height: 90,
	                    game: this,
	                    horizontal: true,
	                    img: redCar
	                }),
	                new Car({
	                    id: 2,
	                    pos: [505, 105],
	                    len: 90,
	                    height: 180,
	                    game: this,
	                    horizontal: false,
	                    img: greenCar
	                })
	            ];
	            else if (level === 2) newCars = [new Car({
	                    id: 1,
	                    pos: [105, 205],
	                    len: 180,
	                    height: 90,
	                    game: this,
	                    horizontal: true,
	                    img: redCar
	                }),
	                new Car({
	                    id: 2,
	                    pos: [5, 5],
	                    len: 180,
	                    height: 90,
	                    game: this,
	                    horizontal: true,
	                    img: greenCar
	                }),
	                new Car({
	                    id: 3,
	                    pos: [405, 405],
	                    len: 180,
	                    height: 90,
	                    game: this,
	                    horizontal: true,
	                    img: blueCar
	                }),
	                new Car({
	                    id: 4,
	                    pos: [205, 505],
	                    len: 270,
	                    height: 90,
	                    game: this,
	                    horizontal: true,
	                    img: greenCar
	                }),
	                new Car({
	                    id: 5,
	                    pos: [5, 105],
	                    len: 90,
	                    height: 270,
	                    game: this,
	                    horizontal: false,
	                    img: purpleCar
	                }),
	                new Car({
	                    id: 6,
	                    pos: [305, 105],
	                    len: 90,
	                    height: 270,
	                    game: this,
	                    horizontal: false,
	                    img: blueCar
	                }),
	                new Car({
	                    id: 7,
	                    pos: [505, 5],
	                    len: 90,
	                    height: 270,
	                    game: this,
	                    horizontal: false,
	                    img: yellowCar
	                }),
	            ];
	            else if (level === 3) newCars = [new Car({
	                    id: 1,
	                    pos: [5, 205],
	                    len: 180,
	                    height: 90,
	                    game: this,
	                    horizontal: true,
	                    img: redCar
	                }),
	                new Car({
	                    id: 2,
	                    pos: [305, 405],
	                    len: 180,
	                    height: 90,
	                    game: this,
	                    horizontal: true,
	                    img: orangeCar
	                }),
	                new Car({
	                    id: 3,
	                    pos: [405, 205],
	                    len: 90,
	                    height: 180,
	                    game: this,
	                    horizontal: false,
	                    img: greenCar
	                }),
	                new Car({
	                    id: 4,
	                    pos: [305, 505],
	                    len: 270,
	                    height: 90,
	                    game: this,
	                    horizontal: true,
	                    img: blueCar
	                }),
	                new Car({
	                    id: 6,
	                    pos: [5, 305],
	                    len: 90,
	                    height: 270,
	                    game: this,
	                    horizontal: false,
	                    img: purpleCar
	                }),
	                new Car({
	                    id: 7,
	                    pos: [305, 5],
	                    len: 90,
	                    height: 270,
	                    game: this,
	                    horizontal: false,
	                    img: yellowCar
	                }),
	            ];
	            else if (level === 4) newCars = [new Car({
	                    id: 1,
	                    pos: [5, 205],
	                    len: 180,
	                    height: 90,
	                    game: this,
	                    horizontal: true,
	                    img: redCar
	                }),
	                new Car({
	                    id: 2,
	                    pos: [205, 405],
	                    len: 180,
	                    height: 90,
	                    game: this,
	                    horizontal: true,
	                    img: blueCar
	                }),
	                new Car({
	                    id: 3,
	                    pos: [205, 505],
	                    len: 180,
	                    height: 90,
	                    game: this,
	                    horizontal: true,
	                    img: purpleCar
	                }),
	                new Car({
	                    id: 4,
	                    pos: [405, 305],
	                    len: 90,
	                    height: 270,
	                    game: this,
	                    horizontal: false,
	                    img: greenCar
	                }),
	                new Car({
	                    id: 5,
	                    pos: [505, 305],
	                    len: 90,
	                    height: 270,
	                    game: this,
	                    horizontal: false,
	                    img: purpleCar
	                }),
	                new Car({
	                    id: 6,
	                    pos: [105, 405],
	                    len: 90,
	                    height: 180,
	                    game: this,
	                    horizontal: false,
	                    img: orangeCar
	                }),
	                new Car({
	                    id: 7,
	                    pos: [305, 5],
	                    len: 90,
	                    height: 270,
	                    game: this,
	                    horizontal: false,
	                    img: yellowCar
	                }),
	                new Car({
	                    id: 8,
	                    pos: [205, 105],
	                    len: 90,
	                    height: 180,
	                    game: this,
	                    horizontal: false,
	                    img: greenCar
	                }),
	            ];
	
	            this.cars = newCars;
	
	            this.mainCar = this.cars[0];
	        }
	    }
	
	    resetBoard(level) {
	        this.cars = [];
	        this.setCars(this.level);
	
	    }
	
	    checkDown(e) {
	
	        let clickX = e.pageX - this.canvas.offsetLeft;
	        let clickY = e.pageY - this.canvas.offsetTop;
	
	        this.cars.forEach((car) => {
	            if ((clickX >= car.pos[0] &&
	                    clickX <= car.pos[0] + car.len) &&
	                (clickY >= car.pos[1] &&
	                    clickY <= car.pos[1] + car.height)) {
	                this.currentCar = car;
	                this.currentCar.mousedown();
	            }
	        });
	    }
	
	    checkUp(e) {
	        if (this.currentCar) {
	            this.currentCar.mouseup();
	            this.currentCar = null;
	        }
	    }
	
	    checkMove(e) {
	      if (this.currentCar) this.currentCar.drag(e);
	    }
	
	    checkWin() {
	        if (this.mainCar && this.mainCar.pos[0] > 400) {
	            this.mainCar = null;
	            this.cars = [];
	            this.won = true;
	            return true;
	        }
	        return false;
	    }
	
	
	    draw(ctx) {
	        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
	        let idx = 0;
	
	        for (let i = 0; i < 6; i++) {
	            for (let j = 0; j < 6; j++) {
	                idx % 2 === 0 ? ctx.fillStyle = "#adadad" : ctx.fillStyle = "#cecece";
	                ctx.fillRect(100 * i, 100 * j, 100, 100);
	                idx++;
	            }
	            idx++;
	        }
	
	        ctx.fillStyle = "#ff0000";
	        ctx.fillRect(590, 200, 10, 100);
	
	        if (this.level === this.endGame) {
	            this.completeScreen.className = "completescreen";
	        } else if (this.won) {
	            this.winButtons.className = "winscreen";
	        } else {
	
	
	            //draw arrow
	            ctx.lineWidth = 5;
	            ctx.strokeStyle = '#000000';
	            ctx.beginPath();
	            ctx.moveTo(550, 230);
	            ctx.lineTo(570, 250);
	            ctx.lineTo(520, 250);
	            ctx.lineTo(565, 250);
	            ctx.moveTo(573, 250);
	            ctx.lineTo(550, 270);
	            ctx.stroke();
	
	
	            this.cars.forEach((car) => {
	                car.draw(ctx);
	            });
	            this.checkWin();
	        }
	    }
	
	}
	
	Game.DIM_X = 600;
	Game.DIM_Y = 600;
	
	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

	class Car {
	    constructor(options) {
	        this.id = options.id;
	        this.img = options.img;
	        this.pos = options.pos;
	        this.len = options.len;
	        this.height = options.height;
	        this.game = options.game;
	        this.horizontal = options.horizontal;
	        this.draggable = false;
	        this.oppPos = [this.pos[0] + this.len, this.pos[1] + this.height];
	
	        this.offsetTop = this.game.canvas.offsetTop;
	        this.offsetLeft = this.game.canvas.offsetLeft;
	
	    }
	
	    colliding(top, bot, left, right) {
	
	        const insideCoords = (topLeft, bottomRight) => {
	            return (
	                (left <= bottomRight[0] && //is the left of my car more left than the right of the other car
	                    right >= topLeft[0] && //is the right of my car more right than the left of the other car
	                    top <= bottomRight[1] && // is the top of my car higher than the bottom of the other car
	                    bot >= topLeft[1]) //is the bottom of my car lower than the top of the other car
	            );
	        };
	
	        let collide = false;
	        this.game.cars.forEach((car) => {
	            if (this.id != car.id && !collide) {
	                if (insideCoords(car.pos, car.oppPos)) {
	                    collide = car;
	                    return car;
	                }
	            }
	        });
	        return collide;
	    }
	
	    draw(ctx) {
	        if (this.horizontal) {
	            const canvas = this.game.canvas;
	            ctx.translate(canvas.width / 2, canvas.height / 2);
	            ctx.rotate(-Math.PI / 2);
	            ctx.drawImage(this.img, (-this.pos[1]) + 210, this.pos[0] - 300, this.height, this.len);
	            ctx.rotate(Math.PI / 2);
	            ctx.translate(-canvas.width / 2, -canvas.height / 2);
	        } else ctx.drawImage(this.img, this.pos[0], this.pos[1], this.len, this.height);
	    }
	
	    drag(e) {
	        if (this.draggable) {
	            let left = e.pageX - this.len / 2 - this.offsetLeft;
	            let right = e.pageX + this.len / 2 - this.offsetLeft;
	            let top = e.pageY - this.height / 2 - this.offsetTop;
	            let bot = e.pageY + this.height / 2 - this.offsetTop;
	
	            let coll;
	            if (this.horizontal) coll = this.colliding(this.pos[1], this.oppPos[1], left, right);
	            else coll = this.colliding(top, bot, this.pos[0], this.oppPos[0]);
	            if (this.inBounds(e.pageX, e.pageY) && (this.mouseNearCar(e.pageX, e.pageY)) && !coll) {
	                if (this.horizontal) {
	                    this.pos[0] = left;
	                    this.oppPos[0] = this.pos[0] + this.len;
	                } else {
	                    this.pos[1] = top;
	                    this.oppPos[1] = this.pos[1] + this.height;
	                }
	            }
	        }
	    }
	
	    inBounds(x, y, lowX = this.offsetLeft, highX = 600 + this.offsetLeft, lowY = this.offsetTop, highY = 600 + this.offsetTop) {
	        return (
	            x - this.len / 2 >= lowX &&
	            x + this.len / 2 <= highX &&
	            y - this.height / 2 >= lowY &&
	            y + this.height / 2 <= highY
	        );
	    }
	    mouseNearCar(x, y) {
	        return (
	            this.pos[0] + this.offsetLeft - 170 < x &&
	            this.oppPos[0] + this.offsetLeft + 170 > x &&
	            this.pos[1] + this.offsetTop - 170 < y &&
	            this.oppPos[1] + this.offsetTop + 170 > y
	        );
	    }
	
	    mousedown() {
	        document.body.style.cursor = "default";
	        this.draggable = true;
	    }
	
	    mouseup() {
	        this.draggable = false;
	    }
	}
	
	module.exports = Car;


/***/ },
/* 3 */
/***/ function(module, exports) {

	class GameView {
	  constructor(game, ctx) {
	    this.ctx = ctx;
	    this.game = game;
	  }
	
	  start() {
	    this.lastTime = 0;
	    //start the animation
	    requestAnimationFrame(this.animate.bind(this));
	  }
	
	  animate(time) {
	    const timeDelta = (time - this.lastTime);
	    this.lastTime = time;
	    this.game.draw(this.ctx);
	
	    //every call to animate requests causes another call to animate
	    requestAnimationFrame(this.animate.bind(this));
	  }
	}
	
	module.exports = GameView;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map