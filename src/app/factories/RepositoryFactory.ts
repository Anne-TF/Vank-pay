import { REPOSITORIES, repositories } from '../../repositories';
import { IBootRepositories } from '../../repositories/interfaces';

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
