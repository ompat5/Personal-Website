---
title: "Minesweeper AI Bot"
subtitle: "It clicks so you don't have to."
date: 2024-09-20
type: project
image: "/minesweeper-ai-bot.png"
repo: "https://github.com/ompat5/MineSweeper-AI-Bot"
featured: true
---

Minesweeper is mostly logic and occasionally a coin flip. **Minesweeper AI
Bot** handles the logic, and when it truly has to guess, it guesses smart.

It works in three escalating phases. The basic solver flags the obvious mines
and clears the obvious safe cells. When that runs dry, a subset solver compares
overlapping constraints to squeeze out deductions the basic pass missed.
Only when no certainty remains does the random solver step in, picking the
cell least likely to blow up rather than clicking blindly.

The whole board is modeled as a Constraint Satisfaction Problem, where each
revealed number becomes an equation about its neighbors. Solving the game
turns into solving that system, which is what lets the bot reason instead of
just gambling.

Built with Python.