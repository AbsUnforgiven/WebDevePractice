var player = videojs('my-video', {
	preload: 'auto',
	controls: true,
	width: '500%',
	aspectRatio: '4:3',
	playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3],
	loop: true,
	poster: "https://i.ytimg.com/vi/iAiQ6lvF4m4/maxresdefault.jpg",
	plugins: {
		hotkeys: {
			enableModifiersForNumbers: false,
			seekStep: 20
		}
	}
	
});