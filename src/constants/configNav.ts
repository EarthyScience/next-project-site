// main navigation
export const navigation = [
    { text: 'Home', link: '/' },
    { 
      text: 'Project',
      items: [
        { text: 'About', link: '/project/about' },
        { text: 'Team', link: '/project/team' },
      ]
    },
    {
        text: 'Resources',
        items: [
          { text: 'Publications', link: '/resources/publications' },
          { text: 'Data & Tools', link: '/resources/tools-data' },
        ]
      },
    { text: 'Events', link: '/events' },
    { text: 'News', link: '/news' },
    { text: 'Contact', link: '/contact' },
  ];
  
// footer links
 export const navFooter = [
    { text: 'Imprint', link: '/terms/imprint' },
    { text: 'Privacy Policy', link: '/terms/privacy' },
  ]