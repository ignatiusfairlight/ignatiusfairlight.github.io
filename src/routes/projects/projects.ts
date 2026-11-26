/*
  Project entries are managed here.
*/

export type Project = {
  id: number,
  title: string,
  desc: string,
  link: string,
};


export const Projects: Project[] = [
	{
		id: 1,
		title: 'Generic Event Scheduler',
    desc: 'A glorified spreadsheet for managing events',
		link: "https://github.com/ignatiusfairlight/generic-event-scheduler",
  },
];
