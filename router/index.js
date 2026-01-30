const router = [
  {
    name: 'Home',
    path: '/',
    navigation: false,
    mobile: true
  },
  {
    name: 'About',
    path: '/about',
    navigation: true
  },
  {
    name: 'Treatments',
    path: '/treatments',
    navigation: true,
    children: [
      {
        name: 'Early Treatment',
        path: '#early-treatment'
      },
      {
        name: 'Adult Treatment',
        path: '#adult-treatment'
      },
      {
        name: 'Braces',
        path: '#braces'
      },
      {
        name: 'Invisalign',
        path: '#invisalign'
      },
      {
        name: 'Orthognathic Surgery',
        path: '#orthognathic-surgery'
      },
      {
        name: 'Retainers',
        path: '#retainers'
      },
      {
        name: 'Technology',
        path: '#technology'
      }
    ]
  },
  {
    name: 'Get Started',
    path: '/get-started',
    navigation: true
  },
  {
    name: 'Contact',
    path: '/contact',
    navigation: true
  },
  {
    name: 'Blog',
    path: '/blog',
    navigation: false
  }
]

export default router
