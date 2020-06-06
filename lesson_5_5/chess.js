/*
1. Создать функцию, генерирующую шахматную доску. 
При этом можно использовать любые html-теги по своему желанию. 
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*/
"use strict";


const chessBoard = {
  container: document.getElementById('chess'),
  rows: 10,
  cols: 10,


  drawBoard() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    for (let i = 0; i < this.rows; i++) {
      let tr = this.container.appendChild(document.createElement('tr'));

      for (let j = 0; j < this.cols; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);

        if ((i > 0 && i < this.rows - 1) && (j === 0 || j === this.cols - 1)) {
            td.textContent = this.rows - 1 - i;
            continue;
        } else if ((i === 0 || i === this.rows - 1) &&(j !== 0 || j !== this.cols - 1)) {
            td.textContent = letters[j - 1];
            continue;
        }

        if ((i + j) % 2 !== 0) {
          td.style.backgroundColor = 'grey';
        }
      }
    }
  },
};

chessBoard.drawBoard();