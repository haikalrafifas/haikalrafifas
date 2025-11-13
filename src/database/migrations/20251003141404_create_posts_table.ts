import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('posts', table => {
    table.bigIncrements('id');
    table.string('slug', 255).notNullable().unique();
    table.string('title', 255);
    table.integer('duration');
    table.string('image', 255);
    table.string('snippet', 255);
    table.text('content');

    table.timestamps(true, true);
    table.timestamp('deleted_at');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('posts');
}
