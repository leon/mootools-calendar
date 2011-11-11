var Calendar = new Class({
	
	Implements: [Options, Events],
	
	options: {
		yearFormat: '%Y',
		monthFormat: '%B',
		previousMonth: '&laquo;',
		nextMonth: '&raquo;',
		firstDayOfWeek: 1,
		showWeeks: true
	},
	
	events: {},
	
	initialize: function(container, options){
		this.setOptions(options);
		this.container = document.id(container);
		this.container.addEvent('click:relay(th.previous)', this.previous.bind(this));
		this.container.addEvent('click:relay(th.next)', this.next.bind(this));
		this.container.addEvent('click:relay(td:not(.week))', this.click.bind(this));
	},

	setDate: function(date){
		this.date = date.clearTime();
		this.render(this.date);
	},

	addCalendarEvent: function(date, klass, data){
		if(date == null)
			return;

		date.clearTime();
		var k = 'date' + date.getTime();
		if(this.events[k] == undefined)
			this.events[k] = [];

		this.events[k].push({
			'class': klass || 'event',
			data: data
		});
	},

	/*
		Privates
	*/
	getCalendarEvents: function(date){
		return this.events['date' + date.getTime()] || [];
	},

	previous: function(event, th){
		this.date.decrement('month', 1);
		this.fireEvent('change', this.date.clone());
		this.render(this.date);
	},

	next: function(event, th){
		this.date.increment('month', 1);
		this.fireEvent('change', this.date.clone());
		this.render(this.date);
	},
	
	click: function(event, td){
		var date = td.retrieve('date').clone(),
			data = this.getCalendarEvents(date);
		this.fireEvent('dayclick', {
			date: date,
			data: data
		});
	},

	render: function(date){
		this.date = date || new Date().clearTime();
		this.container.empty();
		var options = this.options,
			date = this.date.clearTime().clone(),
			today = new Date().clearTime(),
			dayNamesContainer,
			dayContainer;

		new Element('table', {'border-spacing': 0}).adopt(
			new Element('thead').adopt(
				new Element('tr').adopt(
					new Element('th', {colspan: 8, text: date.format(options.yearFormat)})
				),
				new Element('tr.month').adopt(
					new Element('th.previous', {html: options.previousMonth}),
					new Element('th', {colspan: 6, text: date.format(options.monthFormat)}),
					new Element('th.next', {html: options.nextMonth})
				),
				dayNamesContainer = new Element('tr')
			),
			dayContainer = new Element('tbody')
		).inject(this.container);
		
		dayNamesContainer.adopt(new Element('th.week', {text:Locale.get('Date.week')}));

		// Day Headers
		var days = Locale.get('Date.days_abbr');
		for (i = options.firstDayOfWeek; i < (options.firstDayOfWeek + 7); i++){
			var day = new Element('th', {text: days[(i % 7)]}).inject(dayNamesContainer);
			if(i == 0 || i > 5)
				day.addClass('weekend');
		}

		// Set date to first monday before 1st
		date.setDate(1);
		while(date.getDay() != options.firstDayOfWeek){
			date.decrement('day', 1);
		}
		var weekContainer,
			first = 1;
		for(i = 0; i < 42; i++){

			if(date.getDate() == 1)
				first -= 1;

			// Create New Week
			if(i % 7 == 0){
				if(first < 0)
					break;

				weekContainer = new Element('tr').adopt(
					new Element('td.week.week' + Math.floor(i / 7), {text: date.getWeek()})
				).inject(dayContainer);
			}

			var day = new Element('td', {text: date.getDate()}).store('date', date.clone()).inject(weekContainer);

			if(date.getTime() == today.getTime())
				day.addClass('today');

			if(date.get('day') == 0 || date.get('day') > 5)
				day.addClass('weekend');

			if(date.getMonth() != this.date.getMonth())
				day.addClass('inactive');

			this.getCalendarEvents(date).each(function(data){
				var klass = data['class'];
				if(day.hasClass(klass))
					day.addClass('multi-' + klass);
				day.addClass(klass);
			});

			date.increment('day', 1);
		}
	}
});

Locale.define('en-US', 'Date', 'week', 'Week');
Locale.define('sv-SE', 'Date', 'week', 'vecka');