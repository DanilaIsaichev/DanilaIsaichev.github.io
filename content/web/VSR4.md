---
title: "VSR4"
weight: 11

task_code: "VSR4"
task_title: "ВСР Тема 4. Подготовка материалов для выступления по настройке линтера кода"
subject: "Веб проектирование"
---

ESLint - это статический анализатор кода, который может находить синтаксические ошибки, баги и неточности форматирования.

Для работы ESLint необходимо установить Node.js и npm.

Настройка линтера eslint для Visual Studio Code:

1. Установка `eslint`
   
   ```
   npm install -D eslint
   ```

2. Установка плагинов `eslint`
   
   ```
   npm install -D eslint-config-airbnb-base eslint-plugin-import
   ```

3. Создание конфигурационного файла `.eslintrc.yml`
   
   ```
   extends:
    - 'airbnb-base'
   env:
    node: true
    browser: true
   ```

4. Установка плагина ESLint  
   ![Установка плагина ESLint](/web/webp/vsr/images/task-4-1.png)  
   Исправление кода с учётом рекомендаций линтера:  
   ![Исправление кода с учётом рекомендаций линтера](/web/webp/vsr/images/task-4-2.png)  
   ![Исправление кода с учётом рекомендаций линтера](/web/webp/vsr/images/task-4-3.png)  