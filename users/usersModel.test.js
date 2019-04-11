const db = require('../data/dbConfig.js');
const Users = require('./usersModel.js')

describe("users model", () => {
    // This function will clear out the table each time we run tests
    beforeEach(async () => {
        await db('users').truncate();
    })

    describe("insert()", () => {
      it("should insert the provided users", async () => {
        await Users.insert({ name: 'jim' });
        await Users.insert({ name: 'jam' });
        await Users.insert({ name: 'jom' });

        const users = await db('users');
        expect(users).toHaveLength(3);
      });

      it("should insert the provided user", async () => {
        let user = await Users.insert({ name: 'jem' });
        expect(user.name).toBe('jem');

        user = await Users.insert({ name: 'jum' });
        expect(user.name).toBe('jum');
      });

    });

    describe("remove()", () => {
        it("should remove the provided users", async () => {
            // Add three users...
            await Users.insert({ name: 'jim' });
            await Users.insert({ name: 'jam' });
            await Users.insert({ name: 'jom' });
            const users = await db('users');
            expect(users).toHaveLength(3);

            // Remove three users...
            await Users.remove(1);
            await Users.remove(2);
            await Users.remove(3);
            const delUsers = await db('users');
            expect(delUsers).toHaveLength(0);
        });
  
        it("should remove the provided user", async () => {
            await Users.insert({ name: 'jem' });
            const users = await db('users');
            expect(users).toHaveLength(1);
  
            await Users.remove(1);
            const delUsers = await db('users');
            expect(delUsers).toHaveLength(0);
        });
  
      });
  });
  