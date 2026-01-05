
# Dynamic API

Just an API to dynamically store a JSON and return it as a HTTP/HTTPS response.


## Run Locally

Clone the project

```bash
  git clone https://github.com/ThiagoEvoa/dynamic_api.git
```

Go to the project directory

```bash
  cd dynamic_api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node app.js
```

## Running Tests

Store JSON

```bash
curl --location 'https://localhost:9011/api' \
--header 'Content-Type: application/json' \
--data '{}'
```

Retrieve JSON

```bash
curl --location 'https://localhost:9011/api/'
```
