export interface ScheduleItem {
	id?: string; // Optional unique identifier
	date?: Date | string; // Optional date of the event
	isAllDay?: boolean,
	startTime? : string; //in HH:MM f 24HR
	endTime? : string; //in HH:MM f 24HR
	reccurring?: string; // Optional recurring weekday (e.g., "Monday", "Wednesday")
	group?: string;
	color?:string;
	isRecurring?:boolean,
	reminders?: [],
	location?: string,
	title: string; // Title of the event
	description: string; // Description of the event
  }