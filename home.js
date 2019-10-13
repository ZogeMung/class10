var $$ = mdui.JQ;
$$('#ClassSong').on('opened.mdui.dialog', function () {
  $$('#ClassSongmp3')[0].play();
});
$$('#ClassSong').on('close.mdui.dialog', function () {
  $$('#ClassSongmp3')[0].pause();
});
