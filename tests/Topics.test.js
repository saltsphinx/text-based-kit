const Topics = require('../src/Topics');

it('Adds a new publisher to publishers', () => {
  Topics.addPublisher('test', () => {});

  expect(Topics.publishers).toHaveProperty('test');
});