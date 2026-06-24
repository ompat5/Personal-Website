---
title: "Correlation Isn't Enough"
subtitle: "Measuring an ad campaign you couldn't A/B test."
date: 2026-06-18
type: project
image: "/projects/causal-inference.png"
repo: "https://github.com/ompat5/Causal-Inference-Project"
featured: true
---

Sometimes you can't run a clean A/B test, you just have a billboard that's
already up and a question to answer. **Correlation Isn't Enough** investigates
whether a regional billboard campaign in Porto Alegre actually caused customer
deposits to rise, in a setting where randomized testing wasn't an option
because the intervention was offline and city-wide.

-----

**The causal question:**
Did the campaign in Porto Alegre increase deposits compared to what would have
happened without it? Answering that means estimating a counterfactual, the
deposits that never happened, rather than just eyeballing a before-and-after
chart.

**The data:**
Panel data across two Brazilian cities and two time periods. Porto Alegre is
the treatment group that received the campaign, Florianopolis is the control
group that didn't, with May as the pre-intervention period and July as the
post-intervention one.

**The method:**
Difference-in-Differences is the core strategy, comparing trends across both
groups and time to isolate the campaign's effect. That's backed by OLS
regression with time, treatment, and interaction terms to attach real
statistical inference, standard errors, p-values, and confidence intervals, to
the estimate. Naive before-after and treated-versus-control comparisons are
included too, mostly to show how badly they mislead you.

-----

Built with Python.