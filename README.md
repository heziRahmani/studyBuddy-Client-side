
# Study Buddy

Simple app to help me organize all the data and resources that I accumulated in word files since I started to code.

## Tech Stack

**Client:** React, custom hooks,react router,context

**Server:** Firebase


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

configur the .env file

```bash
  in the .env file put your firebase credentials.
  NOTE: You can find A list of the .env variables in the Environment Variables section below
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file,
you can get the Environment Variables values from your firebase firestore credentials

  'REACT_APP_apiKey'= "String"

  'REACT_APP_authDomain' ="String"

  'REACT_APP_projectId' ="String"

  'REACT_APP_storageBucket' ="String"

  'REACT_APP_messagingSenderId' ="String"

  'REACT_APP_appId' ="String"


  NOTE: you can find the database configuration below


  




## Database Structure




| Name of the collection | fields | Data type |
| :---: | :---: | :---: | 
| htmlAttributes | Description | String | 
|  | Name| String  | 
|  | Tags| Array  | 
|  | valueType| Array  | 
| htmlTags | Attributes| Array  |
|  | Description| String  |
|  | exampleRef| String  |
|  | name| String  |
|  | tags| Array  |
| regexCheatSheet | Category| String  |
|  | Explanation| String  |
|  | symbol| String  |
| JsOneLiners | Tags| String  |
|  | Name| String  |
|  | Code| String  |
|  | Explanation| String  |
| To-do | titel| String  |
|  | toDo| String  |
|  | isDoneStatus| boolean  |
|  | priority| Arrey of map  {color code <string>,priority <string>}  |
|  | status| String  |
|  | tag| Array  |
| Arreys | definition| String  |
|  | functions| Array  |
|  | description| String  |
|  | name| String  |
|  | output| Array   |
|  | tags| Array  |

*All the Arrey are <string>


## Roadmap


- Add links section
