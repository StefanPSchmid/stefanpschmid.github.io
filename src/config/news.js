export const newsTagOptions = ['paper', 'awards', 'outreach', 'miscellaneous'];

export const newsEntries = [
		{
		slug: 'new-ai4science-club-founded',
		title: 'We founded a new AI4Science club to connect researchers in Zurich',
		publishDate: '2026-03-01',
		tags: ['outreach'],
		image: '/ai4science_club.png',
		summary:
			'Together with Malte Franke and Shaun O´Hare, I am one of the co-founders of the new AI4Science club Zurich.',
		body: [
			'Together, we identified the need for a more connected community in the field of AI for science in Zurich',
			'Our goal is to make Zurich the place to be for amazing AI4Science research by connecting researchers, creating visions and ideas.',
			'We are planning hosting a series of events: talks, workshops, hackathons, you name it.',
		],
		readMoreUrl: 'https://www.ai4science.ch/',
		readMoreLabel: 'Stay tuned and get in touch here',
	},
	{
		slug: 'invited-talk-rowansci',
		title: 'Invited talk at Rowan Scientific',
		publishDate: '2026-02-24',
		tags: ['outreach'],
		summary: 'I gave an invited talk at Rowan Scientific in Boston.',
		body: [
			'I was invited by Rowan as part of their Rowan seminar series to talk about my research on accelerating catalyst development in silico and in the wet-lab.',
			'I shared our recent advances on transition state conformer generation methods and experimental design algorithms, including accessible platforms for chemists.',
		],
	},
	{
		slug: 'new-paper-computational-catalysis',
		title: 'New perspective paper published on computational catalysis',
		publishDate: '2026-02-20',
		tags: ['paper'],
		summary:
			'Our new perspective paper on computational catalysis has been published in the Journal of the American Chemical Society.',
		image: '/computational_catalysis.jpeg',
		paperUrl: 'https://doi.org/10.1021/jacs.5c17786',
		body: [
			'In the paper, we discuss the current state and challenges of computational catalysis, including future opportunities.',
			'Specifically, we highlight emerging AI methodologies, molecular and materials representations, datasets and more!',
		],	
	},
	{
		slug: 'new-paper-transition-state-conformers',
		title: 'New paper published on rapid transition-state conformer generation',
		publishDate: '2026-02-12',
		tags: ['paper'],
		summary:
			'Our new work on racerTS, a method for rapid transition state conformer generation has been published in the Journal of Chemical Information and Modeling.',
		image: '/racerTS.svg',
		paperUrl: 'https://doi.org/10.1021/acs.jcim.5c02794',
		codeUrl: 'https://github.com/digital-chemistry-laboratory/racerts',
		body: [
			'Our paper proposes racerTS, which generates transition state conformers via a constrained distance geometry approach, a modified approach from RDKit conformer generation.',
			'We describe the algorithm and compare it with CREST and GOAT as benchmarks, showing that we (out)perform state-of-the-art in terms of accuracy, exhaustiveness and validity, at a order of magnitude acceleration.',
			'The method can be used to accelerate high-throughput catalyst screening and generate transition-state datasets for machine learning applications, enabling broader ML adoption in catalysis research.',
		],
	},
	{
		slug: 'new-award-catalysis-talent',
		title: 'Recipient of the Talent Program in Catalysis and Sustainable Chemistry',
		publishDate: '2025-09-23',
		tags: ['awards'],
		summary:
			'I was selected as a fellow of the Talent Program in Catalysis and Sustainable Chemistry, a fellowship for early-career researchers at ETH Zurich in catalysis and sustainable chemistry.',
		image: '/catalysis_talent.jpeg',
		readMoreUrl: 'https://chab.ethz.ch/en/doctoral-studies/scholarships/talent-program-in-catalysis-and-sustainable-chemistry.html',
		readMoreLabel: 'Learn more about the program here',
		body: [
			'I am very honored to announce that I have been selected as a fellow of the Catalysis Talent Program',
			'The program supports selected early-career researchers that advance the field of catalysis and sustainable chemistry through their doctoral research. My research accelerating catalyst development by employing AI in autonomous catalysis laboratories.',
			'I am thankful for Clariant for sponsoring this award and the trust placed in my research.',
		],
	},
	{
		slug: 'scs-poster-award',
		title: 'Poster award at the Swiss Chemical Society Fall Meeting',
		publishDate: '2025-09-04',
		tags: ['awards'],
		summary:
			'I received a poster award at the Swiss Chemical Society Fall Meeting for my work on Bayesian Optimization for general reaction conditions.',
		image: '/SCS_award.jpeg',
		body: [
			'I was awarded the best poster award of the computational chemistry section at the Swiss Chemical Society Fall Meeting for my work on CurryBO, my Bayesian Optimization framework to optimize for general reaction conditions.',
		],
	},
];
