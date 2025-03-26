export enum UserRole {
    User = 'client',
    Owner = 'owner',
}

export enum DocumentType {
    CC = 'CC',
    DI = 'DI',
    PASS = 'PASS',
}

export interface User {
    id: string;
    username: string;
    name: string;
    surname: string;
    birthday: Date;
    document_type: DocumentType;
    document_value: string;
    role: UserRole;
    created_at?: Date;
    updated_at?: Date;
}

