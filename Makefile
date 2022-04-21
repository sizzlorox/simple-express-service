#!make

SHELL := /bin/sh
GITROOT := $(shell git rev-parse --show-toplevel)

include $(GITROOT)/.env
export

infra/start:
	docker-compose --env-file=$(GITROOT)/.env -f $(GITROOT)/deployment/docker-compose.yml up -d

infra/stop:
	docker-compose -f $(GITROOT)/deployment/docker-compose.yml down

# MIGRATIONS
db/migrate/make:
	ifndef $(NAME)
		$(error NAME not set)
	else
		npx knex migrate:make $(NAME)
	endif

db/migrate/latest:
	npx knex migrate:latest

db/migrate/up:
	npx knex migrate:up

db/migrate/down:
	npx knex migrate:down

db/migrate/rollback:
	npx knex migrate:rollback

db/migrate/list:
	npx knex migrate:list

# SEEDS
db/seed/make:
	npx knex seed:make $(NAME)

db/seed/up:
	npx knex seed:run