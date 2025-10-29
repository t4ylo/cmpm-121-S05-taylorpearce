# Section 5 – Refactoring Code Smells in Practice

Code Smell Refactoring

Combinatorial explosion - lines 31-66, only difference is what happens to the counter, very redundant. Solution: make a render function and two other functions for changing and resetting the count and put the repetitive code and call it inside of the eventListener handler.

Refactored by "Extract Function": created a new render() function to handle UI updates and a changeBy(delta) and reset() function to modify the counter. This removed the repetitive code in each event listener, improving maintainability and readability.

Uncommutative names and What comments - lines 1-73, there is a comment for literally every line of code, repetitive and unnecessary, no meaningful names like what is bI, bD blah blah blah could be fixed by having a more meaningful name, ie instead of bI it could be incrementButton.

Refactored by "Rename Variable" and "Remove Comments / Self-Documenting Code": Replaced unclear names (a, b, h) with meaningful ones (incrementButton, counterDisplay, pageTitle, etc.). This made the code self-documenting and eliminated the need for redundant comments. I also deleted “what” comments that repeated exactly what the code already expressed. The improved naming and structure made the code self-explanatory, so the extra comments were unnecessary.

Dubious Abstraction - lines 68-73, unnecessary start function to just call setup when they just can call setup without an additional function.

Refactored by "Inline Function": I removed the pointless start() wrapper and directly called setup(). This simplified the control flow and avoided unnecessary abstraction.
