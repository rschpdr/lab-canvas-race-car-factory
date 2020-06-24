function component(game, x, y, w, h) {
    return {
        game: game,
        x: x,
        y: y,
        width: w,
        height: h,
        img: new Image(),

        drawComponent(imgSource) {

            let daCtx = this.game.ctx;
            this.img.src = imgSource;
    
            daCtx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }
}

// class Component {
//     constructor(game, x, y, w, h) {
//         this.game = game;
//         this.x = x;
//         this.y = y;
//         this.width = w;
//         this.height = h;
//         this.img = new Image();
//     }
//     drawComponent(imgSource) {
//         let daCtx = this.game.ctx;
//         this.img.src = imgSource;

//         daCtx.drawImage(this.img, this.x, this.y, this.width, this.height);
//     }
// }