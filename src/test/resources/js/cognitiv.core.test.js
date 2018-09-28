import { core } from '../../../resources/js/cognitiv.core';

const constantDate = new Date('Wed Sep 26 2018 16:44:32');

test('Adds days to current date for auth expiration', () => {
    expect(core.addAuthExpiration(constantDate,7)).toEqual(1538610272000);
});