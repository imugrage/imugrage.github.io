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
  name: 'Master Isaiah',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good Morning!',
  greetingAfternoon: 'Good Afternoon,',
  greetingEvening: 'Good Evening,',
  greetingNight: 'Go to Sleep!',

  // Layout
  bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

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
      icon: 'glasses',
      link: 'https://drive.google.com/',
    },
    {
      id: '2',
      name: 'Gmail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'Investopedia',
      icon: 'trello',
      link: 'https://www.investopedia.com/',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://ccadebate.org/debate',
    },
    {
      id: '5',
      name: 'IMSDB',
      icon: 'glasses',
      link: 'https://imsdb.com/',
    },
    {
      id: '6',
      name: 'Ethos',
      icon: 'calendar',
      link: 'https://www.ethosdebate.com/blog/',
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

  // First Links Container
  firstlistsContainer: [
    {
      icon: 'rss',
      id: '1',
      links: [
        {
          name: 'Playlists',
          link: 'https://open.spotify.com/collection/playlists',
        },
        {
          name: 'BGMC',
          link: 'https://www.youtube.com/user/cafemusicbgmchannel',
        },
        {
          name: 'Italian Chill',
          link: 'https://music.youtube.com/watch?v=_26BhViw28s&list=RDAMVM_26BhViw28s',
        },
        {
          name: 'Japanese',
          link: 'https://www.youtube.com/watch?v=TA9LVzuC7z4',
        },
      ],
    },
    {
      icon: 'cpu',
      id: '2',
      links: [
        {
          name: 'Blender Manual',
          link: 'https://docs.blender.org/manual/en/latest/',
        },
        {
          name: 'Blender Stack Exchange',
          link: 'https://blender.stackexchange.com/',
        },
        {
          name: 'Blender Artists',
          link: 'https://blenderartists.org/',
        },
        {
          name: 'Thingverse',
          link: 'https://www.thingiverse.com/',
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: 'compass',
      id: '1',
      links: [
        {
          name: 'RSS Reader',
          link: 'https://www.ethosdebate.com/blog/',
        },
        {
          name: 'Github',
          link: 'https://imugrage.github.io/',
        },
        {
          name: 'Pi Page',
          link: 'https://nmugrage.github.io/pipage/index.htm',
        },
        {
          name: 'DDG Advanced',
          link: 'file:///C:/Users/imugrage/Documents/Code/DuckDuckGo%20Advanced%20Search/DDG%20V1.html',
        },
      ],
    },
    {
      icon: 'clipboard-list',
      id: '2',
      links: [
        {
          name: 'Google Drive',
          link: 'https://drive.google.com',
        },
        {
          name: 'Gmail',
          link: 'https://mail.google.com',
        },
        {
          name: 'Jet Pens',
          link: 'https://www.jetpens.com/',
        },
        {
          name: 'Notion',
          link: 'https://www.notion.so/Constructives-e900f3fdbd8e45e880fa13f0c55e05a1',
        },
      ],
    },
  ],
};
