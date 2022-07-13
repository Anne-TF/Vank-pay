import { REPOSITORIES, repositories } from 'src/repositories';
import { IBootRepositories } from 'src/repositories/interfaces';

export class RepositoryFactory
{
    private static readonly repositories: IBootRepositories = {
        ...repositories
    };

    public static get<T = any>(repository: REPOSITORIES): T
    {
        return <any> this.repositories[repository];
    }

    public static boot(): IBootRepositories
    {
        return this.repositories;
    }
}
