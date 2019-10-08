import Api from 'utils/api';
import createUser from '../createUser';

describe('createUser', () => {
  it('creates a user if a full name and email are passed', async () => {
    const actual = await createUser('Ji Wang', 'ji.wang@grainger.com');

    return expect(actual).toEqual({
      fullName: 'Ji Wang',
      email: 'ji.wang@grainger.com',
    });
  });
  it('should return an error if either input is blank', async () => {
    try {
      await createUser();
      expect(true).toBe(false);
    } catch (e) {
      expect(e.name).toEqual('Error');
      expect(e.message).toEqual('One or both of the inputs was bad');
    }
  });
});
