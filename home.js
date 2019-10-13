var $$ = mdui.JQ;
$$('body').on('loaded', function () {
  mdui.snackbar('这里是高三10班');
});
$$('#ClassSong').on('opened.mdui.dialog', function () {
  $$('#ClassSongmp3')[0].play();
});
$$('#ClassSong').on('close.mdui.dialog', function () {
  $$('#ClassSongmp3')[0].pause();
});
