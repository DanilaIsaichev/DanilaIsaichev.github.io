---
title: "lab1"
weight: 3

task_code: "lab1"
task_title: "ЛР Тема 1. Языковые средства веб-технологий на основе XML и CSS и развёртывание среды разработки компонентов аппаратно-программных комплексов"
subject: "Веб проектирование"
---

1. Представьте свои текущие знания в области HTML в виде набора тегов (правильно сформированного XML-документа)

2. Осуществите рефакторинг DTD для данного документа, уменьшив количество повторяющихся инструкций

{{<buttons_row>}}
    {{<button text="XML-документ" link="https://github.com/DanilaIsaichev/WEBLab1/blob/main/competencies.xml">}}
    {{<button text="DTD" link="https://github.com/DanilaIsaichev/WEBLab1/blob/main/competencies.dtd">}}
{{</buttons_row>}}

3. Рассмотрите документ Статистика посещений страницы (https://kodaktor.ru/g/08092017_stats). Основываясь на нём, разработайте язык для описания посещений некоторого URL, т.е. создайте DTD и валидный документ

{{<buttons_row>}}
    {{<button text="XML-документ" link="https://github.com/DanilaIsaichev/WEBLab1/blob/main/stats.xml">}}
    {{<button text="DTD" link="https://github.com/DanilaIsaichev/WEBLab1/blob/main/stats.dtd">}}
{{</buttons_row>}}

4. Разработайте или сгенерируйте схему (XML Schema) для документа и осуществите её валидацию с помощью инструмента типа [xmlvalidation.com](https://xmlvalidation.com)

{{<buttons_row>}}
    {{<button text="XML-документ" link="https://github.com/DanilaIsaichev/WEBLab1/blob/main/students.xml">}}
    {{<button text="DTD" link="https://github.com/DanilaIsaichev/WEBLab1/blob/main/students.dtd">}}
{{</buttons_row>}}

Валидация документа:

![Результаты валидации](./lab-1-screenshots/validation.png)
