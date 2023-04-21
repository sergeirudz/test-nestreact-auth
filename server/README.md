# Start

- Create Postgres database with Docker https://dev.to/andre347/how-to-easily-create-a-postgres-database-in-docker-4moj
- - docker build -t my-postgres-db ./
- - docker run -d --name my-postgresdb-container -p 5432:5432 my-postgres-db

# Send email

- install: brew install mailhog
- start: mailhog
- - http://0.0.0.0:8025/
