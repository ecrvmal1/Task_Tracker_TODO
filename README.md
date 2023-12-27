# Task Tracker "ToDo" 
### Проект разработан на стажировке в компании "Докт24 - телемедицина, диагностика, консилиум"

Функциональность:
Users : Register / Login  
Projects : Create/List/Detailed_view/Delete  
Notes for project by author : Create/List/Detailed_view/Delete  


## Stack

- Python > 3.7
    - isort, black, autoflake
    - Django < 3.3
    - SQLite 3
    - VSCode

- Frontend: 
  - REACT, JS
    - react-dom
    - axios
    - bootstrap

## Licence

MIT

user2...user9 : admin
admin : admin

## Deployment to production
When make deployment to server, change ip addresses:
in file /frontend/src/App.js  from "127.0.0.1" to "real server IP address"
in file /todolist/TodoList/settings.py add "real server IP address" to "ALLOWED_HOSTS"

## Server runs at  http://194.58.109.159/
