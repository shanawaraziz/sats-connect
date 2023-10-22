module.exports = {
    require: 'ts-node/register',
    extension: 'ts', // Look for .ts files
    spec: 'tests/**/*.ts', // Define the pattern for test files
    reporter: 'spec', // Use the 'spec' reporter (you can change this to another reporter if preferred)
  };
  