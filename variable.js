const myName = "Al-Amin Biswas";
let profession = 'Jobless';

const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    },
    friends: ['Abdullah', 'Faizul', 'Raihan', 'Mukut'],
    schools: [
        {id: 1, name: 'KhokaMoni school', place: 'Khulna'},
        {id: 2, name: 'Pre-Cadet school', place: 'Khulna'},
        {id: 3, name: 'Saint Joseph school', place: 'Khulna'}
    ]
  };

const myBio = `My name is ${myName}.
I am ${profession} now.
This is another person from an object and his name is ${user['name']}.
He lived in ${user.address.city}.
`;

console.log(myBio);