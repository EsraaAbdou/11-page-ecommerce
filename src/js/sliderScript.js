var slider = document.getElementById('slider');
var dollarPrefixFormat = wNumb({prefix: '$', decimals: 0});
noUiSlider.create(slider, {
	start: [150, 890],
	connect: true,
	range: {
		'min': 0,
		'max': 1000
	},
  tooltips: [dollarPrefixFormat, dollarPrefixFormat]
});
