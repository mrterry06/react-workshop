class Api {
  addUserToDatabase(fullName, email) {
    return new Promise((resolve, reject) => {
      if (shouldCreateUser(fullName, email)) {
        console.log('Creating user!');
        console.log(`Full name: ${fullName}`);
        console.log(`Email: ${email}`);

        return resolve({ fullName, email });
      }

      return reject(new Error('One or both of the inputs was bad'));
    });
  }
}

export default new Api();

function shouldCreateUser(fullName, email) {
  return fullName && email;
}
