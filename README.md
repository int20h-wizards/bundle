# Інструкція щодо установки
На даний момент тут є 2 папки кожна з яких містить код кожної із сторін.

## frontend
Для того, щоб запустити демо фронтенду, треба скачати папку `fronetend-only `. Відкрити її у vsCode і запустити через live server (розширення в VScode). Можливі також інші варіанти запуску на локальному сервері. Як вам зручно. Єдине що ми тоді не несемо відповідальності за роботу з cors policy і т д. Ми перевіряли лише на цьому розширенні.
<br>
*_ фронтенд посилає запит на отримання даних із github серверів. Туди дані потрапляють завдяки git push. Тобто вони переносяться туди як копії локальних файлів які створюються завдяки парсеру.

## backend
Для того, щоб запустити в роботу бекенд логіку, власне логіку самого парсера, треба відкрити папку `backend-only`, скачати заархівований файл. Вбудувати його в eclipse версії luna (допустимі також інше середовище розробки яке підтримує java й інша версія eclipse. але ми перевіряли саме в цьому) і запустити як java application.

Логiка Back-end розмiщена за такою адресою: https://github.com/int20h-wizards/backend-only/tree/master/backend-only-master/backend-only-master/CropScraping
