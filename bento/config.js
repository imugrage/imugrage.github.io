// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: '',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: '"What do you want to make today?"',
  greetingAfternoon: '"Wait and Hope"',
  greetingEvening: '"Even darkness must pass"',
  greetingNight: 'Go to Sleep!',

  // Layout
  bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: '469c36f0b0eeb2b09439c9ec144fd4a2', // Write here your API Key
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // Autochange
  autoChangeTheme: true,

  // Autochabge by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',




  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: '1',
      name: 'Drive',
      icon: 'folder',
      link: 'https://drive.google.com/drive/my-drive',
    },
    {
      id: '2',
      name: 'Gmail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'Blender',
      icon: 'box',
      link: 'https://www.blender.org/',
    },
    {
      id: '4',
      name: 'RSS Reader',
      icon: 'rss',
      link: 'http://192.168.33.100/freshrss/i/',
    },
    {
      id: '5',
      name: 'YT',
      icon: 'youtube',
      link: 'https://www.youtube.com/feed/library',
    },
    {
      id: '6',
      name: 'Tune My Music',
      icon: 'list-music',
      link: 'https://app.tunemymusic.com/transfer',
    },
  ],

  secondButtonsContainer: [
    {
      id: '1',
      name: 'Music',
      icon: 'headphones',
      link: 'https://open.spotify.com',
    },
    {
      id: '2',
      name: 'twitter',
      icon: 'twitter',
      link: 'https://twitter.com/',
    },
    {
      id: '3',
      name: 'bot',
      icon: 'bot',
      link: 'https://discord.com/app',
    },
    {
      id: '4',
      name: 'Amazon',
      icon: 'shopping-bag',
      link: 'https://amazon.com/',
    },
    {
      id: '5',
      name: 'Hashnode',
      icon: 'pen-tool',
      link: 'https://hashnode.com/',
    },
    {
      id: '6',
      name: 'Figma',
      icon: 'figma',
      link: 'https://iconarchive.com/show/google-play-icons-by-marcus-roberto/Google-Drive-icon.html',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container: Blogs
  firstlistsContainer: [
    {
      icon: 'graduation-cap',
      id: '1',
      links: [
        {
          name: 'CU Gmail',
          link: 'https://mail.google.com/mail/u/1/#inbox',
        },
        {
          name: 'CU Drive',
          link: 'https://drive.google.com/drive/u/1/folders/1ZgxxfS_P-PART8ryxRdj_gLtXYMHCS_r',
        },
        {
          name: 'Canvas Dashboard',
          link: 'https://cedarville.instructure.com/?login_success=1',
        },
        {
          name: 'My CU',
          link: 'https://mycu.cedarville.edu/',
        },      
      ],
    },

  // 3D design for the win!
    {
      icon: 'pen-tool',
      id: '2',
      links: [
        {
          name: 'Sometimes Gibbs',
          link: 'https://sometimesgibbs.com/',
        },
        {
          name: 'Ethos Debate',
          link: 'https://www.ethosdebate.com/blog/',
        },
        {
          name: 'Omnivore',
          link: 'https://omnivore.app/',
        },
        {
          name: 'S.D. Smith Dope Quotes',
          link: 'https://sdsmith.com/dopequotes/',
        },
      ],
    },
  ],

  // Second Links Container: Media and Productivity
  secondListsContainer: [
    {
      icon: 'compass',
      id: '1',
      links: [
        {
          name: 'RSS Reader',
          link: 'https://mail.google.com/mail/u/2/',
        },
        {
          name: 'Omnivore',
          link: 'https://omnivore.app/home',
        },
        {
          name: 'TuneMyMusic',
          link: 'https://app.tunemymusic.com/transfer',
        },
       
        {
          name: 'YouTube',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
    },

  // Essentials - Communication
    {
      icon: 'clipboard-list',
      id: '2',
      links: [
        {
          name: 'Google Drive',
          link: 'https://drive.google.com/drive/my-drive',
        },
        {
          name: 'Gmail',
          link: 'https://mail.google.com',
        },
       {
          name: 'Discord',
          link: 'https://discord.com/channels/@me',
        },
        {
          name: 'Band',
          link: 'https://band.us/home',
        }, 
  
      ],
    },
  ],
};
