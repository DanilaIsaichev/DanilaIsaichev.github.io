---
title: "ISR1"
weight: 4

task_code: "ISR1"
task_title: "ИСР Тема 1. Создание рабочего пространства, регистрация репозитория Git в качество портфолио, анализ, обоснование выбора и настройка выбранных для работы аппаратно-программных комплексов, современных инструментальных средств удалённого доступа и веб-технологий"
subject: "Веб проектирование"
---

Рабочее пространство разработчика может состоять из следующих компонентов:

* Браузер Google Chrome, Chromium, в т.ч. нестабильные версии для разработчиков ( https://www.google.com/intl/ru_ru/chrome/, https://www.chromium.org/ )
* Браузеры Firefox, Edge, в т.ч. нестабильные версии для разработчиков
* Node.js (LTS и Current версии)
* Локальный веб-сервер XAMMP или аналогичный
* Система контроля версий Git (https://git-scm.com/)
* Редактор кода Visual Studio Code (https://code.visualstudio.com/)
* Утилита cURL
* Клиент telnet (для Windows - можно использовать PuTTY или стандартный клиент)
* SSH-клиент (для Windows - можно использовать PuTTY или PowerShell)

#### Настройка

Git: необходимо указать имя и адрес электронной почты:

```bash
git config --global user.email “mail@example.com”
git config --global user.name “username”
```

Node.js: версия выбирается с помощью nvm use или n.
