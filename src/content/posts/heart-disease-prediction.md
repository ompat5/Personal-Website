---
title: "Heart Disease Prediction Model"
subtitle: "Reading the warning signs before they're symptoms."
date: 2023-01-08
type: project
image: "/heart-disease-prediction.png"
repo: "https://github.com/ompat5/Heart-Disease-Prediction-Model"
featured: false
---

The numbers that matter most are sometimes the ones a person never thinks to
check. **Heart Disease Prediction Model** estimates the likelihood of heart
failure from clinical signals like palpitations, resting heart rate, and
cholesterol, turning routine measurements into an early warning.

It learns from a dataset of over 10,000 patient records (sourced from an IBM
coding challenge) and doesn't bet everything on a single approach. The project
trains and compares several models, from straightforward binary classification
to decision trees and random forests, so the strongest predictor earns its
place rather than being assumed. A preprocessing module handles the messy work
of parsing and cleaning the patient data before any model sees it.

There's also a server component, a nod toward the part people forget: a model
is only useful once something can actually call it.

Built with Python.