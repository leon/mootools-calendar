window.addEvent('domready', function(){
	Locale.use('sv-SE');
	var calendar = new Calendar(document.id('calendar'), {
		onDayclick: function(date){
			console.log('Day Click', date);
		}
	});
	calendar.addCalendarEvent(new Date(2010, 11, 16), 'event', 'hello');
	calendar.addCalendarEvent(new Date(2010, 11, 27), 'event', 'darling');
	calendar.addCalendarEvent(new Date(2010, 11, 27), 'event');
	calendar.render();
	Cal = calendar;
});