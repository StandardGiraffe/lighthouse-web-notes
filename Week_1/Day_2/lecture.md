# Lecture:

Get used to discomfort and feeling like things are too fast, too much, and people are ahead of me.

Today: Going to cover coding from ideation to testing and polishing.
Correct approach to course: only correct attitude is be open, be willing to take it in.  Do not stop.  Just keep going through exercises.

Juan Gonzales suggests that we not question the amount of work---a lot of the work we're doing is practicing, repetitious.  Take it and do it.

Juan has been programming since the 80s.  Software developer, world-travelling consultant, interpreter, mentor to companies, and now a teacher.

## Today: solving a new problem together.

Juan's son's finger multiplication.

### Note on process:

1.  Start a new project on github.com.
2.  Write down what the project is supposed to be (in the README.md).

`git status` -> `git add .` -> `git commit -m "message"` -> `git push`

We worked through the algorithm we built, building a quick and dirty code.  Committed each step, pushed when completed.

Refactoring: am I taking it too far?
- Look at functions: Can I anticipate a future scenario when I would need that function again?  If it's becoming too specific, too far.
- Is the function doing one thing really well?  (Eg: `oneParam(which)` is highly reusable.)
```
function oneParam(which) {
  return process.argv.slice(2)[which];
}
```

## Today's process:

Started in github.com.  We developed our algorithm in the README.md.  Cloned to local.  Implemented tiny portions and tested them.  Committed and logged at each step.  Pushed when working.  Refactored where possible.  Tested at each step.  Pushed final, working refactor.
