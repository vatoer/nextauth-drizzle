import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, varchar, datetime, text, foreignKey, unique, int } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const prismaMigrations = mysqlTable("_prisma_migrations", {
	id: varchar("id", { length: 36 }).notNull(),
	checksum: varchar("checksum", { length: 64 }).notNull(),
	finishedAt: datetime("finished_at", { mode: 'string', fsp: 3 }),
	migrationName: varchar("migration_name", { length: 255 }).notNull(),
	logs: text("logs"),
	rolledBackAt: datetime("rolled_back_at", { mode: 'string', fsp: 3 }),
	startedAt: datetime("started_at", { mode: 'string', fsp: 3 }).default(sql`CURRENT_TIMESTAMP(3)`).notNull(),
	appliedStepsCount: int("applied_steps_count", { unsigned: true }).default(0).notNull(),
},
(table) => {
	return {
		prismaMigrationsId: primaryKey({ columns: [table.id], name: "_prisma_migrations_id"}),
	}
});

export const account = mysqlTable("Account", {
	id: varchar("id", { length: 36 }).notNull(),
	userId: varchar("userId", { length: 191 }).notNull().references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" } ),
	type: varchar("type", { length: 191 }).notNull(),
	provider: varchar("provider", { length: 191 }).notNull(),
	providerAccountId: varchar("providerAccountId", { length: 191 }).notNull(),
	refreshToken: text("refresh_token"),
	accessToken: text("access_token"),
	expiresAt: int("expires_at"),
	tokenType: varchar("token_type", { length: 191 }),
	scope: varchar("scope", { length: 191 }),
	idToken: text("id_token"),
	sessionState: varchar("session_state", { length: 191 }),
},
(table) => {
	return {
		accountId: primaryKey({ columns: [table.id], name: "Account_id"}),
		accountProviderProviderAccountIdKey: unique("Account_provider_providerAccountId_key").on(table.provider, table.providerAccountId),
	}
});

export const session = mysqlTable("Session", {
	id: varchar("id", { length: 36 }).notNull(),
	sessionToken: varchar("sessionToken", { length: 191 }).notNull(),
	userId: varchar("userId", { length: 191 }).notNull().references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" } ),
	expires: datetime("expires", { mode: 'string', fsp: 3 }).notNull(),
},
(table) => {
	return {
		sessionId: primaryKey({ columns: [table.id], name: "Session_id"}),
		sessionSessionTokenKey: unique("Session_sessionToken_key").on(table.sessionToken),
	}
});

export const user = mysqlTable("User", {
	id: varchar("id", { length: 36 }).notNull(),
	name: varchar("name", { length: 191 }),
	email: varchar("email", { length: 191 }),
	emailVerified: datetime("emailVerified", { mode: 'string', fsp: 3 }),
	image: varchar("image", { length: 191 }),
	password: varchar("password", { length: 191 }),
	createdAt: datetime("createdAt", { mode: 'string', fsp: 3 }).default(sql`CURRENT_TIMESTAMP(3)`).notNull(),
	updatedAt: datetime("updatedAt", { mode: 'string', fsp: 3 }).default(sql`CURRENT_TIMESTAMP(3)`).notNull(),
},
(table) => {
	return {
		userId: primaryKey({ columns: [table.id], name: "User_id"}),
		userEmailKey: unique("User_email_key").on(table.email),
	}
});

export const verificationToken = mysqlTable("VerificationToken", {
	identifier: varchar("identifier", { length: 191 }).notNull(),
	token: varchar("token", { length: 191 }).notNull(),
	expires: datetime("expires", { mode: 'string', fsp: 3 }).notNull(),
},
(table) => {
	return {
		verificationTokenIdentifierTokenKey: unique("VerificationToken_identifier_token_key").on(table.identifier, table.token),
		verificationTokenTokenKey: unique("VerificationToken_token_key").on(table.token),
	}
});