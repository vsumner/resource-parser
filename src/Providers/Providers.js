var providers = [

  {
    'name':'YouTube',
		'website':'http://www.youtube.com',
		'url-match':[
			'https?://youtu\.be/([0-9a-z-_]{11})',
			'https?://(?:video\.google\.(?:com|com\.au|co\.uk|de|es|fr|it|nl|pl|ca|cn)/(?:[^"]*?))?(?:(?:m|www|au|br|ca|es|fr|de|hk|ie|in|il|it|jp|kr|mx|nl|nz|pl|ru|tw|uk)\.)?youtube\.com(?:[^"]*?)?(?:&|&amp;|/|\?|;|\%3F|\%2F)(?:video_id=|v(?:/|=|\%3D|\%2F)|embed(?:/|=|\%3D|\%2F))([0-9a-z-_]{11})'
    ],
		'embed-src':'https://www.youtube.com/v/$2&rel=0&fs=1',
		'embed-width':'480',
		'embed-height':'295',
		'image-src':'https://img.youtube.com/vi/$2/0.jpg',
		'iframe-player':'https://www.youtube.com/embed/$2'
  },
  {
    'name':'Vimeo',
		'website':'http://www.vimeo.com',
		'url-match':'^https?://(?:www\.)?vimeo\.com/(?:[0-9a-z_-]+/)?(?:[0-9a-z_-]+/)?([0-9]{1,})$',
		'embed-src':'http://vimeo.com/moogaloop.swf?clip_id=$2&server=vimeo.com&fullscreen=1&show_title=1&show_byline=1&show_portrait=0&color=01AAEA',
		'embed-width':'400',
		'embed-height':'302',
		'iframe-player':'http://player.vimeo.com/video/$2'
  },
  {
    'name': 'Howcast',
		'website': 'http://www.howcast.com',
		'url-match': 'http://(?:www\.)?howcast\.com/videos/([0-9]{1,8})',
		'embed-src': 'http://www.howcast.com/flash/howcast_player.swf?file=$2&theme=black',
		'embed-width': '432',
		'embed-height': '276'
  },
  { 
    'name': 'Screencast',
		'website': 'http://www.screencast.com',
		'url-match': 'http://(?:www\.)?screencast\.com/t/([0-9a-zA-Z]+)',
		'fetch-match': 'http://www\.screencast\.com/users/CamtasiaTraining/folders/Camtasia/media/([a-z0-9-]+)/embed',
		'embed-src': 'http://content.screencast.com/users/CamtasiaTraining/folders/Camtasia/media/1d44810a-01f4-4c60-a862-6d114bed50c7/tscplayer.swf',
		'embed-width': '425',
		'embed-height': '344',
		'iframe-player': 'http://www.screencast.com/users/CamtasiaTraining/folders/Camtasia/media/$2/embed'
  },
  {
    'name': 'Ted.com',
		'website': 'http://www.ted.com',
		'url-match': 'http://(?:www\.)?ted\.com/(index.php/)?talks/[a-z0-9\-_]*.html',
		'fetch-match': 'hs:"talks\/dynamic\/([a-z0-9-_]*)-high\.flv',
		'embed-src': 'http://video.ted.com/assets/player/swf/EmbedPlayer.swf',
		'embed-width': '446',
		'embed-height': '326',
		'flashvars': 'vu=http://video.ted.com/talks/dynamic/$2-medium.flv&su=http://images.ted.com/images/ted/tedindex/embed-posters/$2.embed_thumbnail.jpg&vw=432&vh=240'
  }

];



module.exports = providers;
