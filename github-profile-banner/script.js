import Grid from "./src/core/Grid.js";
import Renderer from "./src/core/Renderer.js";

const grid = new Grid();

grid.render();

const renderer = new Renderer(grid);

renderer.drawText(
    "NGUYENDUZG",
    12,
    12
);