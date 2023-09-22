# 1. Prisma

## 1.1 What is Prisma & Why use it?

- A modern database toolkit / `ORM` for web developers that simplifies database interactions
- Provides type safety & catches data-related errors
- Support for various databases ( `Postgres, MySQL, SQLite, Mongo, etc` )
- Automatically generates code based on your database schema

---

## 1.2 Three Parts Of Prisma

### 1.2.1 Prisma Client

- Auto-generated and type-safe query builder

### 1.2.2 Prisma Migrate

- Declarative data modeling & migration system

### 1.2.3 Prisma Studio

- `GUI` to view and edit your data

---

## 1.3 What is Data Modeling?

**Data Modeling** is the process of defining the data requirements and structures of a system.

Usually involves describing the `database schema` , including `tables` , `fields` , `data types` and `relationships`

---

# 2. Getting Started

## 2.1 Branch Tree
```markdown
├── main
│   ├── initial-setup-sqlite
│   │   └── sqlite-add-models
│   ├── initial-setup-postgres ( todo )
```

## 2.2 How to Run
```bash
npm install
```

### 2.2.1 Setting Commands History
```bash
npm init -y
npm i typescript ts-node @types/node -D
npx tsc --init
npm i prisma
npx prisma init --datasource-provider
npx prisma init --datasource-provider sqlite
```

## 2.3 How to migrate
```bash
npx prisma migrate dev --name init
```

# 3. Todo
1. create branch and try to setting `PostgresSQL` 