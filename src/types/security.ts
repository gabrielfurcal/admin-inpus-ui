export type RefreshToken = {
    id: string;
    tokenHash: string;
    createdAt: string;
    expiresAt?: string;
    revokedAt?: string;
    replacedByTokenId?: string;
    deviceInfo?: string;
    ipAddress?: string;
    user?: User;
}

export type Group = {
    id: string;
    name: string;
    description?: string;
}

export type Role = {
    id: string;
    name: string;
    description?: string;
}

export type Permission = {
    id: string;
    name: string;
    description?: string;
}

export type UserGroup = {
    id: string;
    user?: User;
    role: Group;
}

export type UserRole = {
    id: string;
    user?: User;
    role: Role;
}

export type UserPermission = {
    id: string;
    user?: User;
    permission: Permission;
}

export type User = {
    id: string;
    email: string;
    createdAt: string;
    updatedAt?: string;
    refreshTokens?: RefreshToken[];
    userGroups?: UserGroup[];
    userRoles?: UserRole[];
    userPermission?: UserPermission[];
}