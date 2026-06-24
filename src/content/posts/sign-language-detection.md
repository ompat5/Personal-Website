---
title: "Sign Language Detection"
subtitle: "Teaching a webcam to read your hands."
date: 2024-09-17
type: project
image: "/sign-language-detection.png"
repo: "https://github.com/ompat5/Sign-Language-Detection"
featured: true
---

Wave at your laptop and it waves back, sort of. **Sign Language Detection**
watches your hand through the webcam and translates the gesture into the
letter you're signing, live, frame by frame.

Under the hood it's a full machine learning pipeline. First it collects
training samples straight from the camera, then it trains a neural network on
those gestures, and finally it predicts in real time with the guess drawn
right back onto the video feed. A separate evaluation step keeps the model
honest by measuring how often it actually gets the letter right.

The interesting part is that none of this is pre-baked. The dataset is built
by hand, gesture by gesture, so the model learns from your camera, your
lighting, and your hands rather than someone else's.

Built with Python, TensorFlow, Keras, and OpenCV.