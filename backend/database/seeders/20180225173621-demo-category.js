'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'Categories',
      [
        {
          id: '83fa7718-3fbf-43a2-95bb-90e4ef515da5',
          title: 'Office Hours',
          points: 5
        },
        {
          id: '88a5e10a-731e-4e5e-b779-e83d443bf924',
          title: 'Tutored student',
          points: 3
        },
        {
          id: '61f6ae42-f0d9-4e66-b9e7-6ec2b6ddf962',
          title: 'Did extra credit',
          points: 1
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
