<<<<<<< HEAD
Install runtime environment
1.  get node.js
    https://nodejs.org/en/ 
    follow instruction and install node.js

2.  download project
    place the project folder wherever you want

3.  setup runtime environment   
    3.1 open a terminal
    3.2 navigate to testpimp folder
    3.3 enter at command prompt:
        npm install

    **** if errors show up and say something about bower
    **** run this at command prompt
    **** git config --global url."https://".insteadOf git://
    **** then try 3.3 again

4.  launch project
    4.1 from terminal navigate to testpimp folder
    4.2 at command prompt, run this
        npm start
    4.3 open browser window and go to 
        http://localhost:8080/app
        you will see the app

5.  all further changes to the project will be limited to testpimp/app folder

*6.	folder structure and what’s-in-it will follow over the weekend (9/11)

***********
you can change the project folder name from "testpimp" to whatever you want
***********
=======
# angular-seed — the seed for AngularJS apps

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

The seed contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

The seed app doesn't do much, just shows how to wire two controllers and views together.


## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-seed

Clone the angular-seed repository using [git][git]:

```
git clone https://github.com/angular/angular-seed.git
cd angular-seed
```

If you just want to start a new project without the angular-seed commit history then you can do:

```bash
git clone --depth=1 https://github.com/angular/angular-seed.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

>>>>>>> origin/master
