## Project_15 backend Mesto


### Функциональность

    POST /signup — регистрация пользователя с переданными в теле запроса:    
    name, about, avatar, email, password
    POST /signin — авторизация пользователя по email и password 
    GET /users — возвращает всех пользователей из базы
    GET /users/:userId - возвращает пользователя по _id
    GET /cards — возвращает все карточки из базы
    POST /cards — создаёт карточку с переданными в теле запроса name и link
    DELETE /cards/:cardId — удаляет карточку по _id
    PATCH /users/me — обновляет профиль
    PATCH /users/me/avatar — обновляет аватар
    PUT /cards/:cardId/likes — поставить лайк карточке
    DELETE /cards/:cardId/likes — убрать лайк с карточки

### Фронтенд 
    Зум картинок
    Редактирование информации о пользователе
    Загрузка новых фотографий с описанием 
    Простановка лайка и снятие его
    Удаление фотографии

### Стек
    `HTML`    
    `CSS`    
    `JavaScript`     
    `Node.js`  
    `Express.js`  
    `MongoDB`   
    `ESlint`

### Сервер
+ IP адрес: 
+ Фронтенд:
+ Бэкенд: 

### Развертывание проекта
1. Установить `Node.js`
2. Клонировать репозиторий 
3. Установить зависимости `npm i`
4. `npm run start` запускает сервер на `localhost:3000`
5. `npm run dev` запускает сервер на `localhost:3000` с хот релоудом