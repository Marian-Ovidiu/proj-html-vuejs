var app = new Vue({
  el : '#root',
  data: {
    navbar: [
      {option: 'HOME', link: '#home'},
      {option: 'SERVICE', link: '#service'},
      {option: 'ABOUT', link: '#about'},
      {option: 'PROJECTS', link: '#projects'},
      {option: 'RESULTS', link: '#results'},
      {option: 'GET IN TOUCH', link: '#get'},
    ],
    service: [
      {image: '../images/', title: 'Audit & Assurance', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {image: '../images/', title: 'Financial Advisory', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {image: '../images/', title: 'Analitycts and M&A', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {image: '../images/', title: 'Middle Marketing', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {image: '../images/', title: 'Legal Consulting', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {image: '../images/', title: 'Regulatory Risk', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
    ],
    about: [
      {title: 'Tradition', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', image: 'award'},
      {title: 'Security', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', image: 'lock'},
      {title: 'Certificate', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', image: 'stamp'},
      {title: 'Expertise', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', image: 'graduation'}
    ],
    filter: [
      {option: 'ALL', id: 0},
      {option: 'ISTITUTIONAL', id: 0},
      {option: 'SOCIAL', id: 0},
      {option: 'EVENTS', id: 0},
      {option: 'INNOVATION', id: 0},
      {option: 'ENVIRONMENT', id: 0},
      {option: 'TECHNOLOGY', id: 0}
    ],
    projects: [
      {img: 'images/project-1.jpg', text: 'Accademic professional program in social media', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {img: 'images/project-2.jpg', text: 'President\'s speech at the annual meeting', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {img: 'images/project-3.jpg', text: 'International business trip in Shanghai', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {img: 'images/project-4.jpg', text: 'Technology workshop with education theme', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {img: 'images/project-5.jpg', text: 'Donations of clothes and food to the partner NGO', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {img: 'images/project-6.jpg', text: 'Confraternization of the  procurement team', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    ],
    results: [
      {area: 'Certifications', result: '128'},
      {area: 'Employees', result: '230'},
      {area: 'Customers', result: '517'},
      {area: 'Countries Served', result: '94'},
    ],
    techology: [
      {link: 'images/logo-4.png'},
      {link: 'images/logo-5.png'},
      {link: 'images/logo-1.png'},
      {link: 'images/logo-2.png'},
      {link: 'images/logo-3.png'},
      {link: 'images/logo-4.png'}
    ],
    footer: [
      {name: 'About', content: ['The Company', 'Institutional', 'Social Events', 'Innovation', 'Environment', 'Technology']},
      {name: 'Services', content: ['Audit & Assurance', 'Financial Advisory', 'Analytics M&A', 'Middle Marketing', 'Legal Consulting', 'Regulatory Risk']},
      {name: 'Support', content: ['Responsibility', 'Terms of Use', 'About Cookies', 'Privacy Policy', 'Accessibility', 'Information']}
    ]
  },
  methods: {

  }
})
