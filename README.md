# mini-wp

------

## API Documentation:

#### List of Basic routes:

| Route                                              | HTTP   | Description              |
| -------------------------------------------------- | ------ | ------------------------ |
| <span style="color:#FF69B4">/users</span>          | GET    | Get all the users info   |
| <span style="color:#FF69B4">/users/find</span>     | GET    | Find a user with id      |
| <span style="color:#FF69B4">/users/login</span>    | POST   | Login a user             |
| <span style="color:#FF69B4">/users/register</span> | POST   | Register a user          |
| <span style="color:#FF69B4">/articles</span>       | GET    | Get all the articles     |
| <span style="color:#FF69B4">/articles/one</span>   | GET    | Fine one article with id |
| <span style="color:#FF69B4">/articles</span>       | POST   | Create an article        |
| <span style="color:#FF69B4">/articles</span>       | PUT    | Update an article        |
| <span style="color:#FF69B4">/articles</span>       | DELETE | Delete an article        |

## Usage

Make sure you have Node.js and npm installed in your computer, and then run these commands:

```
$npm install
$nodemon app.js
$live-server --host=localhost
```

Access the Server side via http://localhost:3000/.

Access the Client side via http://localhost:8080/.