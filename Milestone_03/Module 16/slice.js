const address = 'andorkilla';
const part = address.slice(2,5);
console.log(part);

const sentence = 'I am a good and hardworking person';
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));// a diye vag hoye jabe

const friendsStr = 'Rahim, Kahim, Dahim, Lahim, Fahim, Sahim'
const friends = friendsStr.split(',');
console.log(friends);

const realFriend = [ 'Rahim', ' Kahim', ' Dahim', ' Lahim', ' Fahim', ' Sahim'];
console.log(realFriend);
console.log(realFriend.join());
// console.log(realFriend.join('|'));
// console.log(realFriend.join('-'));