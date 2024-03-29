---
title: "VSR3"
weight: 10

task_code: "VSR3"
task_title: "ВСР Тема 3. Проектирование сценария для подбора цветового оформления веб-документа"
subject: "Веб проектирование"
---

{{< rawhtml >}}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
<style>
    * {
        font-family: 'Roboto';
    }
    button {
        display: block;
        margin-bottom: 8px;
    }
    input {
        margin-bottom: 8px;
    }
    #palette {
        width: 100%;
        height: 64px;
        display: flex;
        margin-bottom: 8px;
    }
    #palette div {
        width: 100%;
        height: 64px;
    }
    #color-str {
        border: 1px solid #686868;
        padding: 8px;
    }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/chroma-js/2.1.0/chroma.min.js" integrity="sha512-yocoLferfPbcwpCMr8v/B0AB4SWpJlouBwgE0D3ZHaiP1nuu5djZclFEIj9znuqghaZ3tdCMRrreLoM8km+jIQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<h1>Подбор палитры</h1>
<button id="random-colors">Выбрать другие цвета</button>
<label for="colors">Количество цветов:</label>
<input type="number" id="colors" min="2" max="15" value="6">
<div id="palette"></div>
<div id="color-str"></div>
<script>
    let color1 = chroma.random();
    let color2 = chroma.random();

    document.querySelector('#random-colors').onclick = () => {
        [color1, color2] = [chroma.random(), chroma.random()];
        createPalette();
    }

    function createPalette() {
        let palette = document.querySelector('#palette');
        palette.innerHTML = '';
        let colors = document.querySelector('#colors').value;
        let scale = chroma.scale([color1, color2]).colors(colors);
        scale.forEach(color => {
            let color_block = document.createElement('div');
            color_block.style.background = color;
            palette.appendChild(color_block);
        });
        document.querySelector('#color-str').textContent = scale.join(', ');
    }

    document.querySelector('#colors').oninput = createPalette;

    createPalette();
</script>
{{</ rawhtml >}}

Сценарий реализован с использованием библиотеки `chroma.js`.
Шкала показывается от двух случайно выбранных цветов, которые генерируются с помощью метода `chroma.random()`. Для создания шкалы используется метод `chroma.scale(colors)`.
