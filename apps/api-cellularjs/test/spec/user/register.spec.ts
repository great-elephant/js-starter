import { UserRegisterData } from '@sdks/types-admin';

describe('OAuth:UserRegisterCmd', () => {
  test('Register', async () => {
    const res = await testAgent
      .post('/api/user')
      .send({
        firstName: 'foo',
        lastName: 'bar',
        email: 'foobar@gmail.com',
        password: '*********',
      })
      .expect(200);

    const data: UserRegisterData = res.body.data;

    expect(data.sid).toBeDefined();
  });
});
