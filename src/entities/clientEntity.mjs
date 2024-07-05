import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Client",
  tableName: "client",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    userName: {
      type: "varchar",
    },
    email: {
      type: "varchar",
    },
    password: {
      type: "varchar",
      nullable: true,
    },
    createdAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    updatedAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
      onUpdate: "CURRENT_TIMESTAMP",
    },
  },
});
