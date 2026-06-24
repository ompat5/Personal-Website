---
title: "Watopoly"
subtitle: "Monopoly, but the rent is tuition."
date: 2024-04-04
type: project
image: "/watopoly.png"
repo: "https://github.com/ompat5/Watopoly"
featured: false
---

Monopoly is more fun when the board is somewhere you've actually suffered.
**Watopoly** is a multiplayer, University of Waterloo-themed take on the
classic, swapping Boardwalk and railroads for academic buildings, residences,
the gym, and the very real dread of Tuition and OSAP.

Under the hood it's a study in object-oriented design in C++. A `Square` base
class branches into ownable and unownable types, which lets academic buildings,
residences, and one-off campus spots like SLC, Needles Hall, and the Goose
Nesting tile all share structure while behaving differently. Around them sit the
`Player`, `Board`, and `Dice` classes that run the turns, plus a `TextDisplay`
that draws the whole board to the console.

It's a full game, not a demo: property ownership and rent, dice-driven movement,
and save and load support so a match can be paused and picked back up later. The
Waterloo flavour, from GooseNesting to GoToTims, is what makes losing all your
money feel personal.

Built with C++.