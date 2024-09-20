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

- clone the project on local 
- Execute 'npm install' on the same path as of your local directory of the downloaded project. 
- Create a `.env` file in the root directory and add the following environment variable 
    `PORT = 3000`
- Inside the `src/config` folder, create a new file `config.json` and then add the following piece of json 
    ```
    {
      "development": {
        "username": "root",
        "password": null,
        "database": "database_development",
        "host": "127.0.0.1",
        "dialect": "mysql"
      },
      "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
      },
      "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }
    ```

    - Once you've added your db config as listed above, go to the src folder from your terminal and execute `npm sequelize db:create`
