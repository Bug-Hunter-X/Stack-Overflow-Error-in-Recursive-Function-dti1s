# Stack Overflow Bug in JavaScript Recursive Function

This repository demonstrates a common error in recursive JavaScript functions: stack overflow due to a missing or improperly implemented base case. The `bug.js` file contains the buggy code, which recursively calls itself without a proper termination condition.  The `bugSolution.js` provides a corrected version with an improved base case to prevent the stack overflow.

## How to Reproduce the Bug

1. Clone this repository.
2. Open `bug.js` in a JavaScript environment.
3. Call the `foo` function with a large integer as the first argument (e.g., `foo(1000, 0)`).
4. Observe the stack overflow error.

## Solution

The solution involves adding a more robust base case to handle sufficiently large or otherwise problematic input, preventing excessive recursive calls. Examine `bugSolution.js` for the corrected code.