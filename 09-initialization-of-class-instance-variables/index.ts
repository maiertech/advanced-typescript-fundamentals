class User {
  username: string;

  constructor(username: string) {
    this.username = username;
  }

  setUsername(username: string) {
    this.username = username;
  }
}

const user = new User('maiertech');

const username = user.username.toLowerCase();
console.log(`Username: ${username}`);
