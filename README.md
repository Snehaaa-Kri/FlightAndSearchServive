 <!-- - folder structure
        - src
            index.js  //server
            models /
            constrollers/
            middlewares/
            services/
            utils/  -- anything which is common to all the files, or some helper functions will be kept here(utilities files).
            config/        -- contains database configurations
            repository/
        - tests /[later] -->


# Welcome to Flights Service

## Project SetUp

- clone the project on local system
- Execute `npm install` on the same path as of your root directory of the downloaded project. 
- Create a `.env` file in the root directory and add the following environment variable 
    - `PORT = 3000`
- Inside the `src/config` folder, create a new file `config.json` and then add the following piece of json 
    ```
    {
      "development": {
        "username": <Your db login name>,
        "password": <Your db password>,
        "database": "database_name",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }
    ```

    - Once you've added your db config as listed above, go to the `src` folder from your terminal and execute `npm sequelize db:create`


## Flights Table/ DB Desig
    - Airplanes Table
    - Cities Table
    - Airports Table
    - Flights Table

    > Relationships:
    - One flight belongs to one airplane but one airplane can be used in multiple flights.
    - A airport will be in a city but one city can have multiple airports.
    - A flight have only one airplane but one airplane can have multiple flights.


