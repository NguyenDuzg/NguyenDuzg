import FONT from "../data/font.js";

export default class Renderer {

    constructor(grid) {
        this.grid = grid;
    }

    drawLetter(letter, startRow, startCol) {
        
        const matrix = FONT[letter];

        if (!matrix) return;

        for (let row = 0; row < matrix.length; row++) {

            for (let col = 0; col < matrix[row].length; col++) {

                if (matrix[row][col] === 1) {

                    this.grid.setActive(
                        startRow + row,
                        startCol + col
                    );

                }

            }

        }

    }
    drawText(text, startRow, startCol) {

    let currentCol = startCol;

    for (const letter of text) {

        this.drawLetter(letter, startRow, currentCol);

        currentCol += 6;

    }

}

}