---
title: "lab78"
weight: 4

task_code: "lab78"
task_title: "Лабораторные работы 7 и 8"
subject: "Компьютерный практикум"
---

## Цель:

Научиться создавать изображения с помощью JavaScript Canvas API и:

1. Создать страницу с логотипом, повёрнутым на 90
   градусов против часовой стрелки, состоящим из:
   инициалов, записанных в стиле написания
   почтового индекса, и кривой Безье под ними.

2. Создать страницу, на которой полученный
   логотип будет использован, как фоновый узор.

## Функция, отвечающая за создание Canvas'а:

![Canvas creation](./lab7-8-screenshots/canvas-creation-function.png)

## Фрагмент кода, отвечающий за:

* создание нового Canvas’а;

* добавления его к body;

* установки цвета линий;

* поворот на 90 градусов.

Для страницы с логотипом.

![code for logo page](./lab7-8-screenshots/canvas-body-color-turn-logo.png)

## Фрагмент кода, отвечающий за:

* создание нового Canvas’а;
* добавления его к body;
* установки цвета линий;
* поворот на 90 градусов. 

Для страницы, на которой логотип – фоновый узор.

![code for background page](./lab7-8-screenshots/canvas-body-color-turn-background.png)

## Фрагмент кода, отвечающий за написание буквы I:

![main.js after Babel](./lab7-8-screenshots/letter-I.png)

## Фрагмент кода, отвечающий за написание буквы D:

![code for D](./lab7-8-screenshots/letter-D.png)

## Фрагмент кода, отвечающий за написание точек около инициалов:

![code for dots](./lab7-8-screenshots/dots.png)

## Фрагмент кода, отвечающий за рисование кривой Безье:

![code for curve](lab7-8-screenshots/curve.png)

## Фрагмент кода, отвечающий за установку логотипа в качестве фонового узора:

![code for background image](./lab7-8-screenshots/background-code.png)

## Результаты:

{{< rawhtml >}}
  <div id="lab78-logo"></div>
  <script>{
        function makeCanvas(x, y) {
          const canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d');
          canvas.setAttribute('width', x);
          canvas.setAttribute('height', y);
          return { canvas, ctx };
        }
  
        const { canvas, ctx } = makeCanvas(200, 200);
        document.getElementById('lab78-logo').appendChild(canvas);
        ctx.strokeStyle = 'blue';
        ctx.setTransform(0, -1, 1, 0, 20, 188);
        
        //I
        ctx.beginPath();
        ctx.moveTo(20, 20);
        ctx.lineTo(70, 20);
        ctx.moveTo(45, 20);
        ctx.lineTo(45, 100);
        ctx.moveTo(20, 100);
        ctx.lineTo(70, 100);
        ctx.stroke();
  
        //D
        ctx.beginPath();
        ctx.moveTo(100, 20);
        ctx.lineTo(100, 100);
        ctx.moveTo(100, 90);
        ctx.lineTo(150, 100);
        ctx.lineTo(150, 20);
        ctx.lineTo(100, 20);
        ctx.stroke();
  
        //.
        ctx.beginPath();
        ctx.strokeRect(85, 100, 2, 2);
        ctx.strokeRect(165, 100, 2, 2);
  
        //Besie
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.moveTo(20, 105);
        ctx.quadraticCurveTo(85, 150, 168, 105);
        ctx.stroke();
    }</script>
{{< /rawhtml >}}

{{< rawhtml >}}
  <div id="lab78-background" style="height: 200px;"></div>
  <script>{
        function makeCanvas(x, y) {
          const canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d');
          canvas.setAttribute('width', x);
          canvas.setAttribute('height', y);
          return { canvas, ctx };
        }
  
        const { canvas, ctx } = makeCanvas(200, 200);
        ctx.strokeStyle = 'blue';
        ctx.setTransform(0, -1, 1, 0, 20, 188);
        
        //I
        ctx.beginPath();
        ctx.moveTo(20, 20);
        ctx.lineTo(70, 20);
        ctx.moveTo(45, 20);
        ctx.lineTo(45, 100);
        ctx.moveTo(20, 100);
        ctx.lineTo(70, 100);
        ctx.stroke();
  
        //D
        ctx.beginPath();
        ctx.moveTo(100, 20);
        ctx.lineTo(100, 100);
        ctx.moveTo(100, 90);
        ctx.lineTo(150, 100);
        ctx.lineTo(150, 20);
        ctx.lineTo(100, 20);
        ctx.stroke();
  
        //.
        ctx.beginPath();
        ctx.strokeRect(85, 100, 2, 2);
        ctx.strokeRect(165, 100, 2, 2);
  
        //Besie
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.moveTo(20, 105);
        ctx.quadraticCurveTo(85, 150, 168, 105)
        ctx.stroke();
        
        document.getElementById('lab78-background').style.backgroundImage = `url(${canvas.toDataURL()}`;
    }</script>
{{< /rawhtml >}}

## Вывод:

В ходе выполнения лабораторной работы были получены навыки работы с JavaScript Canvas API, был создан логотип, были созданы две страницы:

* на одной из них был расположен созданный логотип;
* на другой этот логотип использовался, как фоновый узор.

## Использованные ресурсы:

- https://learn.javascript.ru/url
- https://scriptdev.ru/webapi/canvas/todataurl/
- https://msiter.ru/references/html5-canvas/settransform

## Ссылки на репозитории:
{{<buttons_column>}}
    {{<button text="Отчёт о выполнении лабораторных работ 7-8" link="/comppract/Lab7/Labs7-8.pdf">}}
    {{<button text="Лабораторная работа 7А (Поворот логотипа но 90 градусов)" link="/comppract/Lab7/Lab7A1">}}
    {{<button text="Лабораторная работа 7А (Логотип, как фон)" link="/comppract/Lab7/Lab7A2">}}
{{</buttons_column>}}
