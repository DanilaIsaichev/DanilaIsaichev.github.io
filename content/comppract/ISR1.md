---
title: "isr1"
weight: 9

task_code: "isr1"
task_title: "ИСР Тема 1. Транспиляция и сборка проекта с использованием директив импорта и экспорта в код с модульностью CommonJS"
subject: "Компьютерный практикум"
---

### Создание проекта

```bash
yarn init -y
```

### Добавление зависимостей

```bash
yarn add -D babel-cli babel-preset-env
```

### Настройка Babel (файл .babelrc)

```
{"presets": ["env"]}
```

### Добавление библиотеки moment

```bash
yarn add moment
```

### Команда транспиляции

```bash
babel-node ./src/index.js
```

### Сборка проекта

```bash
babel ./src -d ./lib
```

Файлы main.js и name.js находятся в отношении нативной модульности.

Исходные файлы расположены в директории src, транспилированные - в директории res.

{{<buttons_column>}}
    {{<button text="Ссылка на репозиторий" link="https://github.com/DanilaIsaichev/CPISR1">}}
{{</buttons_column>}}
