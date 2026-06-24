---
title: "PySpark in Action"
subtitle: "Seven ways to make a cluster do the heavy lifting."
date: 2026-06-08
type: project
image: "/pyspark-in-action.png"
repo: "https://github.com/ompat5/pyspark-in-action"
featured: false
---

Big data stops being scary once you stop doing it on one machine. **PySpark in
Action** is a collection of seven mini-projects from CS 431 (Data-Intensive
Distributed Analytics at the University of Waterloo), working through
distributed computing and big data processing one assignment at a time.

-----

**Assignment 0: Python Text Analytics Warm-Up**
Analyzes Shakespeare's plays in pure Python to find the top 50 most frequent
words and build a co-occurrence dictionary for words following "perfect."

Key concepts: file I/O, text tokenization, dictionary operations.

**Assignment 1: Pointwise Mutual Information (PMI) Analysis**
Calculates the PMI of tokens in Shakespeare to measure how likely words are to
co-occur on the same line, supporting both single and two-token queries.

Key concepts: probability calculations, heap structures, computational
complexity.

**Assignment 2: Distributed PMI Analysis**
Moves the PMI analysis onto Apache Spark, using RDDs to parallelize the work
across a cluster and rewriting the earlier functions for distributed
computation. 

Key concepts: Spark RDDs, parallel transformations (map, flatMap,
distinct), distributed probability.

**Assignment 3: Spark Graph Analysis & Personalized PageRank**
Analyzes the Gnutella server network, extracting graph properties and
implementing Single Source Personalized PageRank. 

Key concepts: distributed
graph processing, PageRank, degree distributions, iterative algorithms.

**Assignment 4: Spam Detection using SGD**
Builds classification models with stochastic gradient descent to separate spam
from ham, exploring how shuffling the data affects the learned weights.

Key concepts: SGD, machine learning, training/testing datasets, MapPartitions.

**Assignment 5: Relational Data Analysis using Spark SQL**
Trades RDDs for the DataFrames API to run SQL-style queries against TPC-H
benchmark datasets. 

Key concepts: Spark SQL, DataFrames, relational processing,
data aggregation.

**Assignment 6: Real-time Streaming Analysis**
Processes live ultrasound sensor telemetry from a wall-navigating robot using
Spark Streaming and rolling time windows. 

Key concepts: Spark Streaming,
DStreams, real-time processing, window functions.

----

Built with Python and Apache Spark.