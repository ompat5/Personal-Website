---
title: "Gate-Keeping"
subtitle: "Does making players wait make them stay?"
date: 2026-06-10
type: project
image: "/a-b-test.png"
repo: "https://github.com/ompat5/A-B-Testing-Analysis"
featured: true
---

Mobile games love a time-gate, the moment they politely ask you to wait (or
pay). **Gate-Keeping** is an A/B test on the mobile game Cookie Cats,
investigating what happens when that first gate is pushed from level 30 to
level 40, judged on the two things that actually matter: long-term player
retention and engagement-driven monetization.

-----

**Trustworthy experimentation:**
The analysis follows the principles from Ron Kohavi's *Trustworthy Online
Controlled Experiments*, including Sample Ratio Mismatch detection via binomial
testing, a clearly defined Overall Evaluation Criterion aligned to business
goals, and a primary-metrics-plus-guardrails framing.

**Data and methodology:**
Across 90,189 players, engagement outliers are tamed with log transformations
and Interquartile Range filtering before any test is run, so the conclusions
aren't hijacked by a handful of extreme values.

**Statistical tests:**
A Two-Proportion Z-Test compares 1-day and 7-day retention, permutation testing
handles the heavily skewed game-rounds data without assuming normality, and
bootstrapping builds 95% confidence intervals on the engagement mean
differences.

-----

Built with Python.