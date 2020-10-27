    // start with strings, numbers and booleans
    let age = 100;
    let ageTwo = age;
    console.log(age, ageTwo);
    age = 200;
    console.log(age, ageTwo);

    let name = 'Rupert';
    let nameTwo = name;
    console.log(name, nameTwo);

    // Let's say we have an array
    const players = ['Yoel', 'Rupert', 'Peter', 'Jaber'];

    // and we want to make a copy of it.
    const team = players;

    console.log(players, team);

    // You might think we can just do something like this:
    team[3] = 'Cinnamun';

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    const teamTwo = players.slice();
    // one way

    // or create a new array and concat the old one in
    const teamThree = [].concat(players);

    // or use the new ES6 Spread
    const teamFour = [...players];
    teamFour[3] = 'Yummy'
    console.log(teamFour);

    const teamFive = Array.from(players);

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Gandalf',
      age: 999
    };

    // and think we make a copy:
    const captain = person;
    captain.number = 21;

    // how do we take a copy instead?
    const captainTwo = Object.assign({}, person, { number: 21, age: 18 });
    console.log(captainTwo);
    // We will hopefully soon see the object ...spread
    // const captainThree = {...person};
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

    const Yoyo = {
      name: 'Yoyo',
      age: 120,
      social: {
        twitter: '@yoyo',
        facebook: 'yoyo.developer'
      }
    };

    console.clear();
    console.log(Yoyo)

    const dev = Object.assign({}, Yoyo);
    // The Poor Mans Clone (not recommended but hey lol)
    const devTwo = JSON.parse(JSON.stringify(Yoyo));