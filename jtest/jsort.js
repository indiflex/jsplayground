const arr = [
  {
    id: 1,
    name: '사무실',
    avatar: '/static/img/avatars/logo.svg',
    time: '12:00',
    hasNew: true,
    contents: '마치시면 연락주세요.',
  },
  {
    id: 2,
    name: '드라이버',
    time: '11:00',
    // hasNew: true,
    contents: '5분 내로 도착합니다.',
  },
  {
    id: 3,
    name: '김일수고객',
    avatar: '/static/img/avatars/avatar-2.jpg',
    time: '13:00',
    hasNew: false,
    contents: '방문 전 초인종 눌러주세요.',
  },
  {
    id: 4,
    name: '김이수고객',
    avatar: '/static/img/avatars/avatar-2.jpg',
    hasNew: true,
    time: '15:00',
    contents: '방문 전 초인종 눌러주세요.',
  },
  {
    id: 5,
    name: '김삼수고객',
    avatar: '/static/img/avatars/avatar-2.jpg',
    time: '14:00',
    hasNew: false,
    contents: '방문 전 초인종 눌러주세요.',
  },
];

arr.sort((a, b) => (a.time < b.time ? -1 : 1));
arr.sort((a, b) => b.hasNew - a.hasNew);

// console.log(arr.map(a => a.id + a.name));
// console.log(arr.map(a => a.time));
console.log(arr.map(a => a.time + a.hasNew));
