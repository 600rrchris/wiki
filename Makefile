up:
	docker-compose up -d redis postgres s3
	npm install --pure-lockfile
	npm run sequelize db:migrate
	npm run dev

build:
	docker-compose build --pull outline

test:
	docker-compose up -d redis postgres s3
	npm run sequelize db:drop --env=test
	npm run sequelize db:create --env=test
	npm run sequelize db:migrate --env=test
	npm run test

watch:
	docker-compose up -d redis postgres s3
	npm run sequelize db:drop --env=test
	npm run sequelize db:create --env=test
	npm run sequelize db:migrate --env=test
	npm run test:watch

destroy:
	docker-compose stop
	docker-compose rm -f

.PHONY: up build destroy test watch # let's go to reserve rules names
