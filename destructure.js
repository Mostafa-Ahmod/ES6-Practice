//destructure
// for searching destructuring

const person = {name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', friends: ['Tom hancks','Mostafa', 'Jubayer']}

const {name, job } = person;

const complexObject = {
    name: 'abc',
    info:{
        address: 'kolabagan',
        leader: 'Tiger Leader'
    }
}
const {leader} = complexObject.info;
console.log(leader);

// const gfName = person.gfName;
// const age = person.age;
console.log(name , job);

const friends = ['Mostafa','Sajid','Himal','Rafi','Jubayer','Sajon'];
const [chotoFriend, nextFriend,...goodFriends] = friends;
console.log(goodFriends);
