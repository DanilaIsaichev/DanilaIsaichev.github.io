---
title: "ISR_Theme_4"
weight: 6

task_code: "ISR_Theme_4"
task_title: "ИСР Тема 4. Подготовка виртуального сервера или деплой-платформы для публикации веб-ресурса на основе Ghost.js"
subject: "Серверные веб-техологии"
---

Ghost.js можно установить с помощью Docker-контейнера.

Для установки контейнера необходимо выполнить команду:

```
docker pull ghost
```

Для запуска Ghost необходимо выполнить команду:

```
docker run -d --name some-ghost -e url=http://localhost:3001 -p 3001:2368 ghost
```

После этого Ghost будет доступен по адресу `server_ip:3001`.

![ИСР тема 4 задание 1](./isr-4-screenshots/4-1.png)

![ИСР тема 4 задание 2](./isr-4-screenshots/4-2.png)
