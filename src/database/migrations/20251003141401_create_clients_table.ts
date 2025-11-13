import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('clients', table => {
    table.bigIncrements('id');
    table.string('slug', 255).notNullable().unique();
    table.string('name', 255).notNullable();
    table.string('image', 255).notNullable();

    table.timestamps(true, true);
    table.timestamp('deleted_at');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('clients');
}
