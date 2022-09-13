# Dentist Office API

This project was developed as a technical challenge, the only goal here is to show my knowledge and of course to have
some fun while doing it. < Érica is a ficticional dentist! > <br>
This API was developed to feed the front end APP [Dentist Office APP](https://github.com/VitorCorrea18/softeo-frontend)

Clone the project
```bash
git clone git@github.com:VitorCorrea18/softeo-backend.git
```
**The database used is MySQL with [Sequelize](https://sequelize.org/), you can run it localy or with Docker**

<details>
  <summary><strong>Running DB localy 👉</strong></summary><br />
  
  ## Running DB locally
  
  In the project's folder install the dependencies
  ```bash
  npm install
  ```
  
  Create a **.env** file in the app's root directory with the variables for your MySQL server connection. EX:
  ```bash
  DB_HOST=127.0.0.1
  DB_USER=root
  DB_PASSWORD=123456
  DB_PORT=3002
  ```
  Start the application with
  ```bash
  npm start
  ```
  It will automatically create the DB, tables and also insert some data to test the API.
</details>

<details>
  <summary><strong>Running DB with Docker 👉</strong></summary><br />
  
  ## Docker
  
  Run the docker-compose script at the projects root folder
  ```bash
  docker-compose up -d
  ```
* The above command will create a container running the MySQL 8.0.21 with user "root" and password "123456" <br>

  Install the dependencies
    ```bash
    npm install
    ```
   
  Create a **.env** file in the app's root directory with the variables for your Mysql server connection. EX:
  ```bash
  MYSQL_HOST = 127.0.0.1 || localhost
  MYSQL_USER = root
  MYSQL_PASSWORD = 123456
  ```
   Start the application with
  ```bash
  npm start
  ```
  It will automatically create the DB, tables and also insert some data to test the API.

</details>

# Endpoints:

## GET`/patients`
- The endpoint queries the database;
- Returns status 200 and all patients with info about treatment and payment;

## POST `/patients`
- The endpoint registers a new patient and number of payment installments;
- The endpoint must receive the following structure:

```json
{
	"patient": {
		"name": "Siqueira Junior",
		"treatmentId": 4
	},
	"installments": 6
}
```
- If the data is incorrect, the API returns status 400 and an error message;
- If the registration is successful, the API returns status 201 and patient data;


## GET `/treatment`.
- The endpoint queries the database;
- The route returns status 200 and the orders and all treatment with price and id.

## PUT `/installment`
- The route receives the installment ID and update the status to "Pago" [Paid];
- The endpoint must receive the following structure:
```json
{
"installmentId": 296
}
```
- If the data is incorrect, the API returns status 400 and an error message;


