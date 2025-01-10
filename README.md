# Type Coercion Bug in TypeScript
This repository demonstrates a common error in TypeScript related to loose comparison (==) and type coercion.  The `compare` function uses loose equality, which can lead to unexpected results due to JavaScript's type coercion rules.  The solution shows how to use strict equality (===) to prevent this behavior.

## Problem
The `compare` function in `bug.ts` uses loose equality (`==`). This leads to unexpected behavior when comparing values of different types.

## Solution
The `bugSolution.ts` file demonstrates how to use strict equality (`===`) to avoid type coercion issues and produce consistent, predictable results.