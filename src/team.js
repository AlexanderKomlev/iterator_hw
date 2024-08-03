export default class Team {
  constructor() {
    this.members = [];
  }

  [Symbol.iterator]() {
    return this.members[Symbol.iterator]();
  }

  // [Symbol.iterator]() {
  //     let index = 0;

  //     return {
  //         next: () => {
  //             if (index < this.members.length) {
  //                 return { value: this.members[index++], done: false };
  //             } else {
  //                 return { value: undefined, done: true };
  //             }
  //         }
  //     }
  // }
}
