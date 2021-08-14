# Installation

Outline requires the following dependencies:

- [Node.js and NPM](https://nodejs.org/) >= 12
- [Postgres](https://www.postgresql.org/download/) >=9.5
- [Redis](https://redis.io/) >= 4
- AWS S3 bucket or compatible API for file storage
- Slack or Google developer application for authentication


## Self-Hosted Production

### Docker

For a manual self-hosted production installation these are the recommended steps:

1. First setup Redis and Postgres servers, this is outside the scope of the guide.
1. Download the latest official Docker image, new releases are available around the middle of every month:

   `docker pull outlinewiki/outline`
1. Using the [.env.sample](.env.sample) as a reference, set the required variables in your production environment. You can export the environment variables directly, or create a `.env` file and pass it to the docker image like so:

   `docker run --env-file=.env outlinewiki/outline`
1. Setup the database with `npm run db:migrate`. Production assumes an SSL connection to the database by default, if
Postgres is on the same machine and is not SSL you can migrate with `npm run db:migrate --env=production-ssl-disabled`, for example:

   `docker run --rm outlinewiki/outline npm run db:migrate`
1. Start the container:

   `docker run outlinewiki/outline`
1. Visit http://you_server_ip:3000 and you should be able to see Outline page

   > Port number can be changed using the `PORT` environment variable

1. (Optional) You can add an `nginx` or other reverse proxy to serve your instance of Outline for a clean URL without the port number, support SSL, etc.

### Terraform

Alternatively a community member maintains a script to deploy Outline on Google Cloud Platform with [Terraform & Ansible](https://github.com/rjsgn/outline-terraform-ansible).

### Upgrading

#### Docker

If you're running Outline with Docker you'll need to run migrations within the docker container after updating the image. The command will be something like:

```shell
docker run --rm outlinewiki/outline:latest npm run db:migrate
```

#### Git

If you're running Outline by cloning this repository, run the following command to upgrade:

```shell
npm run upgrade
```


## Local Development

For contributing features and fixes you can quickly get an environment running using Docker by following these steps:

1. Install these dependencies if you don't already have them
    1. [Docker for Desktop](https://www.docker.com)
    1. [Node.js and NPM](https://nodejs.org/) (v12 LTS preferred)
2. Clone this repo
3. Register a Slack app at https://api.slack.com/apps
4. Copy the file `.env.sample` to `.env`
5. Fill out the following fields:
    1. `SECRET_KEY` (follow instructions in the comments at the top of `.env`)
    2. `SLACK_KEY` (this is called "Client ID" in Slack admin)
    3. `SLACK_SECRET` (this is called "Client Secret" in Slack admin)
6. Configure your Slack app's Oauth & Permissions settings
    1. Slack recently prevented the use of `http` protocol for localhost. For local development, you can use a tool like [ngrok](https://ngrok.com) or a package like `mkcert`. ([How to use HTTPS for local development](https://web.dev/how-to-use-local-https/))
    2. Add `https://my_ngrok_address/auth/slack.callback` as an Oauth redirect URL
    3. Ensure that the bot token scope contains at least `users:read`
7. Run `make up`. This will download dependencies, build and launch a development version of Outline


# Contributing

Outline is built and maintained by a small team – we'd love your help to fix bugs and add features!

Before submitting a pull request please let the core team know by creating or commenting in an issue on [GitHub](https://www.github.com/outline/outline/issues), and we'd also love to hear from you in the [Discussions](https://www.github.com/outline/outline/discussions). This way we can ensure that an approach is agreed on before code is written. This will result in a much higher liklihood of code being accepted.

If you’re looking for ways to get started, here's a list of ways to help us improve Outline:

* [Translation](TRANSLATION.md) into other languages
* Issues with [`good first issue`](https://github.com/outline/outline/labels/good%20first%20issue) label
* Performance improvements, both on server and frontend
* Developer happiness and documentation
* Bugs and other issues listed on GitHub


## Architecture

If you're interested in contributing or learning more about the Outline codebase
please refer to the [architecture document](ARCHITECTURE.md) first for a high level overview of how the application is put together.


## Debugging

Outline uses [debug](https://www.npmjs.com/package/debug). To enable debugging output, the following categories are available:

```
DEBUG=sql,cache,presenters,events,importer,exporter,emails,mailer
```

## Tests

We aim to have sufficient test coverage for critical parts of the application and aren't aiming for 100% unit test coverage. All API endpoints and anything authentication related should be thoroughly tested.

To add new tests, write your tests with [Jest](https://facebook.github.io/jest/) and add a file with `.test.js` extension next to the tested code.

```shell
# To run all tests
make test

# To run backend tests in watch mode
make watch
```

Once the test database is created with  `make test` you may individually run
frontend and backend tests directly.

```shell
# To run backend tests
npm run test:server

# To run frontend tests
npm run test:app
```

## Migrations

Sequelize is used to create and run migrations, for example:

```
npm run sequelize migration:generate --name my-migration
npm run sequelize db:migrate
```

Or to run migrations on test database:

```
npm run sequelize db:migrate --env test
```

## License

Outline is [BSL 1.1 licensed](LICENSE).
