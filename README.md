Предоставляемый функционал:

- Бронирование в реальном времени с уведомлением хозяина вишлиста
- Ссылка,название,фото(с редактированием),цена
- Индивидуальная ссылка на пользователя с листами и на листы
- Список с подарками,которые забронировали вы

Фичи:

- Бесплатная стилизация профиля
- Возможность добавить фото для листа
- Стилизация листа(фон листа,фон для карточки подарка)
- Создать например специальные шаблоны под одежду,книги и т.п.

Структура:

- Профиль{

  - Личные данные{
    фото
    Имя
    ДР
    Почта
    Коммент
    }
  - Уведомления{
    Мои события
    Бронирование подарка из вишлиста
    Удаление забронированного тобой подарка
    Заявки в друзья
    Принятие заявки в друзья
    Отклонение заявки в друзья
    Обновления друзей
    День рождения друга
    Друг создал новый вишлист
    Друг добавил подарок в вишлист
    }
  - Безопасность{
    Соцсети(гугл вк и прочее)
    Изменение пароля
    Удаление аккаунта
    }
    Выход из профиля
    Поделиться
    Редактировать
    Вывод плашками - ДР,кол-во подарков во всех листах,кол-во друзей
    }

- Друзья{
  Текущие друзья/заявки дружбы
  Приглос по ссылке
  Удаление из друзей/переход в профиль друга
  }

- Лист{
  - Создание{
    Название
    Коммент
    Видимость брони с именами/без
    Видимость листа для (я/друзья/все с ссылкой на лист/на профиль)
    }
  - Созданный{
    Редактирование(как и создание)
    Добавить подарок
    Удалить
    Поделиться
    - Стилизовать{
      Главный фон
      Фон карточек
      }
      }
  - Подарок{
    - Создание{
      Название
      Ссылка где купить
      Цена + выбор валюты
      Изображение подарка(с возможностью обрезания и приближения)(мб с возможностью вставки из буфера)
      Комментарий
      Степень желанности
      }
    - Карточка(для хоста){
      Редактировать
      Перенести в другой лист
      Отметить исполнено
      }
    - Карточка(для посетителя){
      Забронировать
      Ссылка на купить
      }
      }
      }
