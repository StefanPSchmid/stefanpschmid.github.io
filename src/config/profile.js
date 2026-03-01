export const profile = {
	name: 'Stefan P. Schmid',
	role: 'PhD Researcher',
	affiliation: 'ETH Zurich',
	portrait: '/cv-photo.jpg',
	about: [
		`I am a PhD researcher in digital chemistry, focused on AI for chemistry to accelerate catalyst discovery and reaction optimization to identify more sustainable processes to mitigate climate change. Specifically, I am developing molecular- and reaction-property predictive models, as well as algorithms for experimental design, which are used in multiple collaborations across manual and automated labs.`,
		`On this website, you can find more information about me and my research. Please reach out if you have questions, are interested in a collaboration or working together.`
	],
};

export const socialLinks = [
	{
		name: 'GitHub',
		url: 'https://github.com/StefanPSchmid',
		icon: 'github',
		newTab: true,
	},
	{
		name: 'Google Scholar',
		url: 'https://scholar.google.com/citations?user=0e9UZ9kAAAAJ&hl=de',
		icon: 'scholar',
		newTab: true,
	},
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/stefan-philipp-schmid/',
		icon: 'linkedin',
		newTab: true,
	},
];

export const contactLinks = [
	...socialLinks,
	{
		name: 'E-Mail',
		url: 'mailto:schmiste@ethz.ch',
		icon: 'email',
		newTab: false,
	},
];
