import { PostInterface } from '../components/Post/Post.interface'

const DUMMY_DATA = {
  posts: [
    {
      id: 'QPichBrG9QGBu3RAc7ipx',
      title: 'This has been updated by the front end',
      topics: ['fake post', 'other stuff', 'copying'],
      body: 'Working out issues',
      createdBy: '0',
      createdAt: 1659975619664,
      votes: {
        up: 5,
        down: 28,
      },
      lastUpdated: 1661552589326,
    },
    {
      title: 'new post',
      body: 'new posts rule!\nEditing posts is even better!',
      createdBy: '2',
      id: '2ADUhRNespgqzbN5bNXmI',
      topics: ['from redux thunk'],
      createdAt: 1661439390747,
      votes: {
        up: 0,
        down: 0,
      },
      lastUpdated: 1661552476680,
    },
    {
      title: 'Long Post',
      body: 'Beef chicken pork bacon chuck shortloin sirloin shank dolore nulla, commodo venison porkbelly tenderloin cupidatat  occaecat doner ut tail, prosciutto veniam tempor cornedbeef consectetur laborum porkchop ut. Bacon balltip shankle pork qui leberkas groundround laborum shortloin ut non aute hamburger, occaecat brisket duis ad kevin fugiat ex tempor proident flank t-bone, porkchop minim porkloin capicola adipisicing turducken veniam drumstick cillum  aliqua. Meatball fugiat nulla porchetta cow beefribs turkey minim hamhock do, occaecat balltip exercitation aute ribeye consequat laborum sint duis cupidatat, filetmignon landjaeger in pork deserunt ut ham porkloin. Capicola salami non tenderloin velit pig et pancetta, aliqua porkloin frankfurter t-bone hamburger drumstick chicken, dolore enim ullamco magna ut chuck. Ribeye kevin salami brisket in irure nostrud culpa occaecat porkbelly sunt, voluptate venison ad pork tempor et andouille t-bone anim ex aute, stripsteak fugiat filetmignon porchetta shankle fatback excepteur capicola magna. Cow consectetur salami porkbelly cupidatat landjaeger tenderloin porkloin capicola ex magna, t-bone leberkas fugiat consequat cillum sunt laborum porkchop officia, non minim shortloin turducken kielbasa in nulla jowl pork. Ut beefribs sint in ad elit turducken pariatur fugiat kevin, filetmignon prosciutto nulla beef cillum meatball porkbelly magna, dolore anim commodo bacon consectetur exercitation voluptate aliqua. Cupidatat nisi esse quis ullamco pork flank venison in labore boudin, cillum cow filetmignon jowl porkchop frankfurter nostrud andouille , consequat beefribs spareribs porkloin kielbasa sirloin irure qui cornedbeef.\n',
      createdBy: '0',
      id: 'zdSWydunzOoHfQTC4zqwE',
      topics: ['from redux thunk'],
      createdAt: 1661536515056,
      lastUpdated: 1661562405022,
      votes: {
        up: 0,
        down: 0,
      },
    },
    {
      title: 'Relative Date?',
      body: 'This is here to test if we have some issues with the relative date component',
      createdBy: '1',
      id: 'zONROYNnwD9ugQ83U8whT',
      topics: ['from redux thunk'],
      createdAt: 1661556251178,
      lastUpdated: 1661556251178,
      votes: {
        up: 0,
        down: 0,
      },
    },
  ],
}

export function getAllPosts(): PostInterface[] {
  return DUMMY_DATA.posts
}

export function getPostById(id: string) {
  return DUMMY_DATA.posts.filter((post) => post.id === id)
}
