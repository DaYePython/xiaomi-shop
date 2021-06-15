module.exports = {
  // setupFilesAfterEnv: ['./scripts/setupJestEnv.js'],
  transform: {
    //  用 `vue-jest`@next 处理 `*.vue` 文件
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.jsx?$': 'babel-jest', // Adding this line solved the issue
    '^.+\\.tsx?$': 'ts-jest',
  },
  // support alias
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@comp/(.*)$': '<rootDir>/src/components/$1',
  },
  testMatch: ['**/tests/unit/**/*.[jt]s?(x)', '**/?(*.)+(test).[jt]s?(x)'],
}
