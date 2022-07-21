This file has lots of grammar mistakes created intentionally.

You can create a branch with name fix*gramma*{your firstname} and propose a couple of corrections.

We will practice pull requests and conflict resolution.

In the future, should you see mistakes in this repo which I anticipated a ot, please feel free to create a new branch and request A PR to fix it.

Avoid the GitHub desktop, use git cli because you will not know what git tools you are required to use in the future.

A sample git workflow

open the project

`git fetch`

`git checkout main`

`git pull`

`git checkout -b fix_main_{your firstname}`

Make changes

`git add .`

`git commit -m "description on what is changed"`

`git push origin -u fix_main_{your firstname}`

Review the file difference. Create a pull request through GitHub user interface.

Once approved, you will use `squash and merge` to merge it into `main` branch

finally go back to your local and
`git checkout main` and `git pull` to see if your change gets merged in successfully.
