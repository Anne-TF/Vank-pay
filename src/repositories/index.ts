import TestRepository from 'src/repositories/test';

export enum REPOSITORIES {
    ITestRepository = '$ITestRepository '
}

export const repositories = {
    [REPOSITORIES.ITestRepository ]: new TestRepository()
};
