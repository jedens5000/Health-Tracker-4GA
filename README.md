## Mindset Mental Health Tracker Project.

<p align="center">
<a href="https://www.jonedens.com" target="_blank"><img src="https://www.jonedens.com/images/mindset/mindset-logo.png" /></a>
</p>

This was my final project for school that I built alongside my classmate, <a href="https://github.com/Chadmichaelg" target="_blank">Chad Grubbs</a>. We built it with React using Router, Flux, and Context API. The backend uses Python Flask with SQLAlchemy.

The general purpose of the app is to provide the user with a data visualization of how frequently they are affected by their health issues. It's geared at tracking mental health issues, however it could be used to track many other things, like chronic pain, headaches, asthma, or anything else that might be a recurring problem for the user.

When the user signs up, they can enter up to three issues that they'd like to track. Then they log in once a day and rate how each issue is affecting them that day. The rating system was designed to make it as easy as possible for the user to quickly submit an update. They simply click on the smiley face icon that represents how good or bad that issue is making them feel that day. Each 5 available icons has a numerical value that is stored to disply in the data visualization. A really sad faced icon has a value of 5, while the happiest icon has a value of 1. This allows the charts to show the highest levels for days that the user was affected the most by their issues. If it's not affecting them, the charts will show the lowest level. Users can change the range and the types of the data visualization charts that they want to view.

<!-- <p align="center">
This project has been deployed with Vercel, so you can view it live at:<br />
	<a href="https://star-wars-4ga.vercel.app" target="_blank">https://star-wars-4ga.vercel.app</a>
</p> -->
<p align="center">
This project has not been deployed yet, but you can see it in the screenshots below.<br /> You can view my other projects at:<br />
	<a href="https://www.jonedens.com" target="_blank">www.jonedens.com</a>
</p>
<br />

<p align="center">
<a href="https://www.jonedens.com" target="_blank"><img src="https://www.jonedens.com/images/mindset/mindset_0.png" /></a>
<a href="https://www.jonedens.com" target="_blank"><img src="https://www.jonedens.com/images/mindset/mindset_1.png" /></a>
<a href="https://www.jonedens.com" target="_blank"><img src="https://www.jonedens.com/images/mindset/mindset_2.png" /></a>
<a href="https://www.jonedens.com" target="_blank"><img src="https://www.jonedens.com/images/mindset/mindset_3.png" /></a>
<a href="https://www.jonedens.com" target="_blank"><img src="https://www.jonedens.com/images/mindset/mindset_4.png" /></a>
<a href="https://www.jonedens.com" target="_blank"><img src="https://www.jonedens.com/images/mindset/mindset_5.png" /></a>
<a href="https://www.jonedens.com" target="_blank"><img src="https://www.jonedens.com/images/mindset/mindset_7.png" /></a>
</p>

<!-- # WebApp boilerplate with React JS and Flask API

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-flask-hello.git)

<p align="center">
<a href="https://www.loom.com/share/f37c6838b3f1496c95111e515e83dd9b"><img src="https://github.com/4GeeksAcademy/flask-rest-hello/blob/main/docs/assets/how-to.png?raw=true?raw=true" /></a>
</p>

### Styles

You can update the `styles/index.scss` or create new `.scss` files inside `styles/` and import them into your current scss or js files depending on your needs.

### Components

Add more files into your `./src/js/components` or styles folder as you need them and import them into your current files as needed.

💡Note: There is an example using the Context API inside `views/demo.js`;

### Views (Components)

Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context

This boilerplate comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)
BreathCode Lesson [view](https://content.breatheco.de/lesson/react-hooks-explained)

The `Provider` is already set. You can consume from any component using the useContext hook to get the `store` and `actions` from the Context. Check `/views/demo.js` to see a demo.

```jsx
import { Context } from "../store/appContext";
const MyComponentSuper = () => {
    //here you use useContext to get store and actions
    const { store, actions } = useContext(Context);
    return <div>{/* you can use your actions or store inside the html */}</div>;
};
```

### Back-End Manual Installation:

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure yo replace the valudes with your database information:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`

### Backend Populate Table Users

To insert test users in the database execute the following command:

```sh
$ flask insert-test-users 5
```

And you will see the following message:

```
  Creating test users
  test_user1@test.com created.
  test_user2@test.com created.
  test_user3@test.com created.
  test_user4@test.com created.
  test_user5@test.com created.
  Users created successfully!
```

To update with all yours tables you can edit the file app.py and go to the line 80 to insert the code to populate others tables

### Front-End Manual Installation:

-   Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`

## Publish your website!

This boilerplate it's 100% integrated with Herkou, just by pushing your changes to the heroku repository it will deploy: `$ git push heroku main`

    	// "prettier-webpack-plugin": "^1.2.0",

"dotenv-webpack": "^1.7.0",
"friendly-errors-webpack-plugin": "^1.7.0", -->
