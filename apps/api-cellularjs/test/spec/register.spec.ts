describe('OAuth:UserRegisterCmd', () => {
  test('Request validation', async () => {
    await testAgent
      .post('/api/user')
      .expect(422);
  });
});
