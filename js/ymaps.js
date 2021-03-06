ymaps.ready(init);
var myMap, 
myPlacemark;
function init(){ 
myMap = new ymaps.Map("map", {
center: [50.520240, 30.800922],
zoom: 16
});
myMap.behaviors.disable('scrollZoom');
myMap.behaviors.disable('drag');

myMap.events.add('click', function (e) {
		var coords = e.get('coords');
       	if (myPlacemark) {
            myPlacemark.geometry.setCoordinates(coords);
        }

        else {
            myPlacemark = createPlacemark(coords);
            myMap.geoObjects.add(myPlacemark);

            myPlacemark.events.add('dragend', function () {
                getAddress(myPlacemark.geometry.getCoordinates());
            });
        }
        getAddress(coords);
    });


iconYellow = new ymaps.GeoObjectCollection({}, {
preset: 'islands#yellowIcon', 
draggable: false 
});
iconRed = new ymaps.GeoObjectCollection({}, {
preset: 'islands#redIcon', 
draggable: false 
});


iconYellow.add(new ymaps.Placemark([50.521223, 30.802297], { balloonContentBody: [
            '<address style="font-size: 11px;">',
            '<strong>Абон. відділ</strong>',
            '<br/>',
            'Адрес: Бровари, вул. Симона Петлюри,',
            '<br/>',
            'буд. 13, (вхід з двору)',
            '<br/>',
            'Робочі години: 9:00-13:00, 15:00-18:00',
            '<br/>',
            '<a href="tel:+380459473221" style="color: blue">Телефон: 7-32-21</a>',
            '</address>'
        ].join('')}));

iconRed.add(new ymaps.Placemark([50.519230, 30.802144], { 	
	balloonContentBody: [
            '<address style="font-size: 11px;">',
            '<strong>Центральний Офіс</strong>',
            '<br/>',
            'Адрес: Бровари, бул. Незалежності,',
             '<br/>',
            'буд. 17, 3-а секція, 2-й поверх',
            '<br/>',
            'Робочі години: 9:00-13:00, 15:00-18:00',
            '<br/>',
            '<a href="tel:+3804594372907" style="color: blue">Телефон: 7-29-07</a>',
            '<br/>',
            '<a href="tel:+380443917287" style="color: blue">Факс: (044)391-72-87</a>',
            '</address>'
        ].join('')}));

myMap.geoObjects.add(iconYellow);
myMap.geoObjects.add(iconRed);
}