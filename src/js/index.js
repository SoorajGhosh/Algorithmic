import "../css/index.css";
import {canvas} from "./Canvas.js";
import {game_of_life} from "./algorithms/GameOfLife"


const animate = () => {
    canvas.ctx.clearRect(0,0,canvas.width,canvas.height);
    game_of_life()
    window.requestAnimationFrame(animate);
}

animate()

// Hot Module Replacement
if (module && module.hot) module.hot.accept()
