import faker from "faker";

class Helpers {
  genActiveUser() {
    const user = {
      fullName: faker.fake("{{name.firstName}} {{name.lastName}}"),
      avatar: faker.image.avatar(),
      location: faker.fake("{{address.state}}, {{address.countryCode}}"),
    };

    return user;
  }

  genFriendsList(max = 5){
    const users = [];

    for (let index = 0; index < max; index++) {
      users.push({
        id: faker.datatype.uuid(),
        fullName: faker.fake("{{name.firstName}}"),
        avatar: faker.image.avatar(),
      });
    }

    return users;
  }

  genAccountBalance(minAmount, maxAmount) {
    const amount = faker.finance.amount(minAmount, maxAmount);
    return Number(amount);
  }
}

export default new Helpers();
