<p align="center">
  <a href="http://gulpjs.com">
    <img height="50" src="http://cdn.warer.com/media/JAVAScript-collector.png">
    <img height="70" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
    <img height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2000px-Npm-logo.svg.png">
    <img height="50" src="http://bower.io/img/bower-logo.svg">
  </a>
  <h3 align="center">PROJECT TEMPLATE </h3>
  <p align="center">JS | NPM | GULP | BOWER </p>
</p>

####To Run:

- You will need to have the following installed on your computer
  - Node 
  - Npm (if you install node, you should have npm)

```
Within the directory, run:
  $ npm install
  $ bower install
  $ gulp 
```

###CREATE FILE STRUCTURE
______________________________

```
|- app/
      |- css/
        |- styles.css
      |- fonts/
      |- images/
      |- index.html
      |- js/
        |- app.js
        |- browser-interface.js
      |- scss/
        |- style.scss
  |- dist/  //Technically this will be created by your gulp tasks
  |- temp/  //Technically this will be created by your gulp tasks
  |- gulpfile.js
  |- node_modules/
  |- package.json

```

### Installing with NPM
______________________________

- **NPM**
  ` $ npm init`

- **GULP**
  ```
  $ npm install gulp --save-dev
  $ npm install gulp -g
  ```

- **BROWSERIFY**
  ```
  $ npm install browserify --save-dev
  $ npm install browserify -g
  ```

- **BOWER**
  ` $ npm install bower -g`

### Installing with BOWER
______________________________

  - **Bower**
    ` $ bower init `

  - **JQUERY**

    ```
    $ bower install jquery --save
    $ npm install bower-files --save -dev
    ```

  - **BOOTSTRAP**

    ` $ bower install bootstrap --save `

### Gulp Modules
______________________________

  - **BROWSERIFY**
    `$ npm install vinyl-source-stream --save-dev`

  - **UGLIFY**
    `$ npm install gulp-uglify --save-dev`

  - **DELETE**
    `$ npm install del --save-dev`

  - **CONCAT**
    `$ npm install gulp-concat --save-dev`

  - **JsHint**
    ```
    $ npm install jshint --save-dev
    $ npm install gulp-jshint --save-dev
    ```
  - **BROWSERSYNC**
    `$ npm install browser-sync --save-dev`

### Gulp Gh-Pages Deployment
______________________________

`$ npm install --save-dev gulp-gh-pages `

*Add following to your gulpfile, you can get rid of all the comments*

` var deploy = require("gulp-gh-pages");`

```
var options = {
    remoteUrl: "https://github.com/5adiyah/UpdatedTemplate.git", //link to your repo
    branch: "gh-pages"};  //set this to gh-pages otherwise it will over write your master branch
gulp.task('deploy', function () {
    gulp.src(["dist/**/*.*", "index.html", "images/", "gulpfile.js", "package.json", "bower.json"]) //in here add any files or folders you want to deploy
        .pipe(deploy(options));
});
```