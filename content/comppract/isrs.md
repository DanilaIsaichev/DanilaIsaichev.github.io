---
title: "isrs"
weight: 9

task_code: "isrs"
task_title: "Инвариантные самостоятельные работы"
subject: "Компьютерный практикум"
---

### Тема 2. Отправка HTTP-запроса серверу методом GET и POST с помощью приложения cURL с записью скринкаста совершаемых действий

{{<rawhtml>}}
    <video autoplay="true" loop="true" src="https://github.com/DanilaIsaichev/CPISR2/blob/main/isr2.mp4">
{{</rawhtml>}}

### Тема 3. Проектирование веб-базы данных и разработка приложения на основе фреймворка Express с реализацией маршрутизации и операций CRUD над простой БД с обработкой запросов REST
Для разработки базы данных на MongoDB можно использовать MongoDB Cloud.

MongoDB не требует определения схемы документа, что позволяет вносить изменения в структуру документа при добавлении или редактировании данных.

Схема может иметь следующий вид:
```
{
    name: String,
    type: String,
    amount: {
        number: Number,
        unit: String
    }
}
```
![ИСР тема 3 задание 3](/comppract/cp/isr/t3/task-3.png)
Реализован REST API для выполнения операций CRUD в базе данных MongoDB.

Приложение реализовано с использованием Express, bodyParser, Mongoose.

Реализованы следующие операции:

`GET /products` - получение списка продуктов

`POST /products/new` - добавление нового продукта

`POST /products/update/:id` - обновление информации о продукте по ID

`POST /products/delete/:id` - удаление информации о продукте по ID

При отправке запросов для добавления и обновления продукта информация о нём передаётся в теле POST-запроса.

Сервер возвращает ответ - статус выполнения операции в формате JSON. Пример ответа сервера (добавление данных):
```
{
    "status": "success"
}
```

Пример ответа сервера на GET-запрос:
```
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
