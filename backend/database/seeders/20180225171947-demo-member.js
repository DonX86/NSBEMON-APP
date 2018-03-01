'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'Members',
      [
        {
          id: 'e7a4a082-509a-42a1-b931-1bfc9f068b2a',
          username: 'User1',
          encryptedPassword: 'User1',
          profileId: '242ce959-baa9-45f3-8235-4f462d702c8f'
        },
        {
          id: '7834dcc8-c9a9-4285-bfc1-5c6bd6b7f070',
          isLeader: true,
          username: 'User2',
          encryptedPassword: 'User2',
          profileId: '3c37903c-29f9-46fb-82f2-ecb5334d9f83'
        },
        {
          id: 'f1dffe81-32d4-4d7c-b68a-a633fbaabb43',
          username: 'User3',
          encryptedPassword: 'User3',
          profileId: 'a0245b5b-54d4-4991-9d3d-5205f5148571'
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Members', null, {});
  }
};
