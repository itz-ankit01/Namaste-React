# Namaste React

## npm = it is a package manager but not stand for node package manager

## package.json is a configuratuon for npm, 
- sometimes, package is also cld as dependencies
- it keeps track of the version of the installed parcel with newer coming version

# npm install -D parcel
-There are 2 types of dependencies
- Dev dependencies : required in the development phase 
- Normal dependencies : required also in production phase

- So, we install parcel as Dev dependencies as in development phase. so, we have to tell npm install parcel as Dev dependencies(-D)



```json

 "devDependencies": {
    "parcel": "^2.11.0"
  }
`
^(caret) : when a newer version has minor upgradation will come of parces,
 this ^ will already make the changes.

 ~(tilda) : when a newer version has major upgradation will come of parces,
 this ~ will already make the changes.

 But it always preferred to use ^ than ~ as major changes in parcel can break or disrupt your application in different ways`
```

### package-lock.json 
- it keeps track of exact version of all the dependencies 

### node modules
- it is like database for all the dependencies/packages
- parcel uses his own packages/dependencies. and his depencies has it's own dependencies, like parcel use Babel etc, also cld as transitive dependencies

#### it is very import to push package.json and package-lock.json as they maintain the exact version of the dependencies
- and if i have package.json and package-lock.json then they can recreate the node_modules

- we do not have to push the things on git which cen be regenerated

#### npx parcel index.html
- npx parcel [file name]: it just execute the package, create a localhost port for the website

# Parcel
- Dev Build
- Provides Local server
- HMR = Hot Module Replacement (means automatically refresh the website)
- Parcel refreshes the web as we make any changes to any file as it reads all the file
- It is doing due to *File Watching Algorithm* - Written in c++
- Caching - Faster Builds (stores in cache and run directly after u make changes, it also make that change in cache)
- Image Optimisation
- Minification of file
- Bundling of file
- Compressing
- Consistent Hashing
- code splitting
- Differential Bundling (to support older browsers)
- Diagnostics (gives error in colorful ui/ux)
- Error Handling
- HTTPs(parcel gives facility to host on https)
- Tree Shaking - remove unused code for you

- [Parcel_documentation](https://parceljs.org/docs/)

- Different dev and prod bundles

###### when you run *npx parcel index.html* it build dev and host server from dist folder as it stores things in dist folder and parcel-cache

## to run [npx parcel build index.html]
- u first hv to remove `"main": "App.js",` from package.json
- then after running it compress all the files to 3 files, make this production ready files
- html, css, and js and takes more time

- dist & parcel-cache folder automatically regenerate, so no need to push on github

```json
"browserslist": [
    "last 2 versions"
  ]

work for all last 2 versions of all the browsers
```

- - - 
# Episode 3

### Shortcut for running the Project
- add `"start" : 'parcel index.html'` in `Script` found in package.json

- `npm run start = npm start`

- add `"build" : 'parcel build index.html'` in `Script` found in package.json

- `npm run build != npm build`
