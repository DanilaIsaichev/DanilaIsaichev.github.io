---
title: "ISR_Theme_2"
weight: 4

task_code: "ISR_Theme_2"
task_title: "ИСР Тема 2. Проектирование приложения на основе фреймворка Symphony"
subject: "Серверные веб-техологии"
---

Приложение реализует API для выполнения арифметических операций.

Маршруты описаны в файле `routes.yaml`.

Контроллер реализован в файле `CalcController.php`.

Ответ сервера при выполнении запроса по маршруту `/calc/add/2/3`:

```json
{
  "result": 5
}
```

Ответ сервера при выполнении запроса по маршруту `/calc/substract/5/7`:

```json
{
  "result": -2
}
```

Ответ сервера при выполнении запроса по маршруту `/calc/multiply/7/5`:

```json
{
  "result": 35
}
```

Ответ сервера при выполнении запроса по маршруту `/calc/divide/5/7`:

```json
{
  "result": 0.7142857142857143
}
```

{{<buttons_column>}}
    {{<button text="Ссылка на репозиторий" link="https://github.com/DanilaIsaichev/SWTISR2">}}
{{</buttons_column>}}

