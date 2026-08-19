import CONFIG from "../data/config.js";

export default class Grid {

    constructor() {

        this.svg = document.querySelector("#banner");

        this.cells = [];

    }

    render() {

        const svgNS = "http://www.w3.org/2000/svg";

        for (let row = 0; row < CONFIG.ROWS; row++) {

        this.cells[row] = [];

        for (let col = 0; col < CONFIG.COLS; col++) {

            const rect = document.createElementNS(svgNS, "rect");

            rect.setAttribute(
                "x",
                col * (CONFIG.PIXEL_SIZE + CONFIG.GAP)
            );

            rect.setAttribute(
                "y",
                row * (CONFIG.PIXEL_SIZE + CONFIG.GAP)
            );

            rect.setAttribute("width", CONFIG.PIXEL_SIZE);

            rect.setAttribute("height", CONFIG.PIXEL_SIZE);

            rect.setAttribute("rx", 2);

            rect.setAttribute("fill", CONFIG.COLORS.INACTIVE);

            this.svg.appendChild(rect);

            this.cells[row][col] = rect;

        }

    }

}

    setActive(row, col, color = "#39FF14") {

    const cell = this.cells[row]?.[col];

    if (!cell) return;

    cell.setAttribute("fill", color);

    }

}