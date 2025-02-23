// main navigation
export const navigation = [
    { text: 'Home', link: '/' },
    { 
      text: 'Project',
      items: [
        { text: 'Goals', link: '/goals' },
        { text: 'Team', link: '/team' },
      ]
    },
    { text: 'News', link: '/news' },
    {
        text: 'Resources',
        items: [
          { text: 'Publications', link: '/publications' },
          { text: 'Data & Tools', link: '/data_tools' },
        ]
      },

    { text: 'Contact', link: '/contact' },
  ];
  
// footer links
 export const navFooter = [
    { text: 'Imprint', link: '/imprint' },
    { text: 'Privacy Policy', link: '/privacy' },
  ]