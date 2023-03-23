start_command =
    .description = Авторизация в системе
language_command =
    .description = Сменить язык
admin_command =
    .description = Сделать пользователя админом
stats_command =
    .description = Статистика
setcommands_command =
    .description = Обновить команды бота

welcome = Добро пожаловать, <b>{$name}</b> 👋

language =
    .select = Выберите свой язык
    .changed = Язык успешно изменен!
admin =
    .user-not-found = Пользователь не найден

    .select-user = Выберите пользователя для изменения роли
    .select-user-btn = Выбрать пользователя
    .your-role-changed = Теперь ты {$role ->
        *[USER] не администратор
        [ADMIN] администратор
    }.
    .user-role-changed = Пользователь с ID {$id} теперь {$role ->
        *[USER] имеет стандартные права
        [ADMIN] является администратором
    }.

    .commands-updated = Команды обновлены

unhandled = Unrecognized command. Try /start

main =
    .video-btn = ⚡ Новое видео
    .liked-videos-btn = 😍 Понравившиеся видео
    .update = Клавиатура обновлена

marks =
    .list = Список видео
    .empty = Вы не лайкнули ни одного видео

video =
    .description = Описание видео
    .empty = Не удалось подобрать видео
