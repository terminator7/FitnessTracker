![R2F](R2F.png)


## Managing Braches
Each Page/Features of the application will be represented by a branch.

### RECOMMENED Naming Style for Pages/Features
1. Initial App Startup: <code>appStartUp</code>
2. Database Implentation: <code>databaseImplemtation</code>
3. Workout Page: <code>workoutPage</code>
4. Diet Page: <code>dietPage</code>
5. Progress Page: <code>progressPage</code>
6. Water Tracker: <code>waterTrackerPage</code>
7. Weight Tracker: <code>weightTrackerPage</code>

### Steps for Branch setup
1. Create and Check into Branch: <code>git checkout -b 'pageName'</code> 
2. Access and Edit Branch (if not in branch already): <code>git checkout 'pageName' </code>
3. Add changes to file into Branch: <code>git add *</code> or <code>git add .</code>
4. Push branch to Repository: <code>git add push origin 'pageName'</code>

## Repository Layout
1. components folder: Will hold componets either designed for a specific page or universally for entire app
    - components should be named in camel case structure: <code>MyComponet.js</code>
2. pages folder: Will hold all pages to for the app
   - pages should be named in camel case structure: <code>MyPage.js</code>
3. utils: Will hold basic helper functions that may be useful for whole team
   - helper functions should be named in all lowercase: <code>alllowercasename.js</code>
4. *to be continued as project continues in complexity **(suggestions are appericated!)*** 

*to be continued...(When I think of more stuff to put lol)*

https://www.npmjs.com/package/react-native-vector-icons#icon-component

https://oblador.github.io/react-native-vector-icons/

https://reactnavigation.org/docs/

https://www.waldo.com/blog/react-native-project-structure

https://github.com/vhpoet/react-native-styling-cheat-sheet#view