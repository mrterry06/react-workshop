export default function createUser(name, email) {
  return Promise.resolve({ name, email });
}
