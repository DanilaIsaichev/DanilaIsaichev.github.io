---
title: "ISR4"
weight: 7

task_code: "ISR4"
task_title: "ИСР Тема 4. Настройка линтера и иных средств мониторинга корректности программного год"
subject: "Веб проектирование"
---

Настройка линтера eslint для Visual Studio Code:

1. Установка eslint

```bash
npm install -D eslint
```

2. Установка плагинов `eslint`

```bash
npm install -D eslint-config-airbnb-base eslint-plugin-import
```

3. Создание конфигурационного файла `.eslintrc.yml`

```yml
extends:
 - 'airbnb-base'
env:
 node: true
 browser: true
```

4. Установка плагина ESLint

![Установка плагина ESLint](/web/webp/isr/images/task-4-1.png)  

Исправление кода с учётом рекомендаций линтера:  

![Исправление кода с учётом рекомендаций линтера](/web/webp/isr/images/task-4-2.png)  

![Исправление кода с учётом рекомендаций линтера](/web/webp/isr/images/task-4-3.png)  
