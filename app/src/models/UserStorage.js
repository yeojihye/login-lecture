"use strict";

class UserStorage {
    static #users = {
        id: ["jihye", "나개발", "김팀장"],
        psword: ["0199" ,"1234", "123456"],
        name: ["지혜", "나개발", "김팀장"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers; 
    };
};

module.exports = UserStorage;