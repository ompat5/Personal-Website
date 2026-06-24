---
title: "Sudoku Solver"
subtitle: "Because life's too short to stare at a 9×9 grid."
date: 2023-03-31
type: project
image: "/sudoku.png"
repo: "https://github.com/ompat5/Sudoku-Solver"
featured: false
---

Stuck on a sudoku? Don't be. **Sudoku Solver** chews through any valid
puzzle in seconds. No guessing, no "almost," no quietly putting the
newspaper down in defeat.

Under the hood it's a backtracking algorithm. It tries a number, follows
that path until it hits a wall, then rewinds and tries again. It keeps at it
relentlessly until the grid is solved, which means a guaranteed **100% solve
rate** on every solvable board.

The catch with most solvers is entering the puzzle. So I built a
**PyGame GUI** that lets you click your way through the board and politely
refuses invalid inputs, so you never solve a puzzle you typed wrong.

Built with Python and PyGame.