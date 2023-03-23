start_command =
    .description = Start the bot
language_command =
    .description = Change language
admin_command =
    .description = Make user an administrator
stats_command =
    .description = Stats
setcommands_command =
    .description = Set bot commands

welcome = Welcome, <b>{$name}</b> 👋

language =
    .select = Please, select your language
    .changed = Language successfully changed!
admin =
    .user-not-found = User not found

    .select-user = Please, select a user to change role
    .select-user-btn = Select user
    .your-role-changed = You're {$role ->
        *[USER] a regular user
        [ADMIN] an administrator
    } now.
    .user-role-changed = User with ID {$id} is now {$role ->
        *[USER] a regular user
        [ADMIN] an administrator
    }.

    .commands-updated = Commands updated

unhandled = Unrecognized command. Try /start

main =
    .video-btn = ⚡ New video
    .liked-videos-btn = 😍 Liked videos
    .update = Keyboard updated

marks =
    .list = Video list
    .empty = You haven't liked a single video

video =
    .description = Video description
    .empty = Couldn't pick up a video
