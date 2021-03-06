# [Pula Software Quality Control Challenge]()
## Technologies
### Back-end
The data is served on *Heroku* using *Hasura* (*GraphQL*) on *PostgreSQL* [here](https://farmer-data.herokuapp.com/).
An extra API layer is built on *NextJS* that refers to the GraphQL endpoint provided by Hasura using *Apollo*.
To start the Next server locally, go to the root of the cloned project and run `npm install`, then `npm run dev` from a terminal.
### Front-end (Testing)
Testing is carried out on *Postman* and the API collection is provided on the root folder of this project &mdash; **Pula Data.postman_collection.json**.

## Part One
- The database stores area data, farmer data and harvest data. 
- The scenarios are defined in the Postman collection.

## Part Two
- JSON payload example:
  ```json
    POST /api/area HTTP/1.1
    Host: localhost:3000
    Content-Type: application/json

    {
        "average_rainfall":178,
        "average_temperature":32,
        "average_historical_yield":0.12648281866129452,
        "prior_yield":0.5603589464253178,
        "zone":"71dj37vilga"
    }
  ```
- Performance tests in Postman collection. Metrics used is the response time.

## Part Three
- Clearing data is the last request in the Postman collection. The SQL query is the request body.