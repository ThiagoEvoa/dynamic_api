
# Dynamically API

Just an API to dynamically store a JSON and return it as a HTTP response.


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
  curl  -X POST \
  'http://192.168.1.133:8080/api/' \
  --header 'Accept: */*' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "phrase": "hello world"
}'
```

Retrieve JSON

```bash
  curl  -X GET \
  'http://192.168.1.133:8080/api/' \
  --header 'Accept: */*' \
  --header 'Content-Type: application/json'
```
