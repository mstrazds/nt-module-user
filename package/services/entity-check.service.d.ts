import { EntityManager } from 'typeorm';
export declare class EntityCheckService {
    private entityManager;
    constructor(entityManager: EntityManager);
    checkNameExist(entityClass: any, name: string): Promise<void>;
}
