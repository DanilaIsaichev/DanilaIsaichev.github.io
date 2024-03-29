---
title: "ISR_Theme_1"
weight: 3

task_code: "ISR_Theme_1"
task_title: "ИСР Тема 1. Проектирование CRUD для серверного веб-приложения"
subject: "Серверные веб-техологии"
---

Реализован REST API для выполнения операций CRUD в базе данных MongoDB.

Приложение реализовано с использованием Express, bodyParser, Mongoose.

Реализованы следующие операции:

`GET /products` - получение списка продуктов

`POST /products/new` - добавление нового продукта

`POST /products/update/:id` - обновление информации о продукте по ID

`POST /products/delete/:id` - удаление информации о продукте по ID

При отправке запросов для добавления и обновления продукта информация о нём передаётся в теле POST-запроса.

Сервер возвращает ответ - статус выполнения операции в формате JSON. Пример ответа сервера (добавление данных):

```json
{
  "status": "success"
}
```

Пример ответа сервера на GET-запрос:

```json
[
  {
    "amount": {
      "number": 32,
      "unit": "kg"
    },
    "_id": "60e4268f46a5bd73485414f0",
    "name": "Apples",
    "type": "Fruits"
  },
  {
    "amount": {
      "number": 16.25,
      "unit": "kg"
    },
    "_id": "60e42ad546a5bd73485414f1",
    "name": "Bananas",
    "type": "Fruits"
  },
  {
    "amount": {
      "number": 24.5,
      "unit": "kg"
    },
    "_id": "60e42b1046a5bd73485414f2",
    "name": "Strawberries",
    "type": "Berries"
  }
]
```

{{<buttons_column>}}
    {{<button text="Ссылка на репозиторий" link="https://github.com/DanilaIsaichev/SWTISR1">}}
{{</buttons_column>}}
