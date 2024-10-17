# Employee Tracker

![Inquirer](https://img.shields.io/badge/Inquirer-v12-blue.svg?logo=npm) ![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue.svg?logo=typescript) ![SQL](https://img.shields.io/badge/SQL-queries-success.svg?logo=postgresql) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v8-blue.svg?logo=postgresql)

# Description

Lets you track and update employee info using a Postgres database.

## 📁 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Tests](#tests)
- [Credits](#credits)
- [Contributing](#contributing)
- [License](#license)

## Installation

- step 1

```shell
# Step 1: clone this repo
git clone https://github.com/Dan-Swarts/Employee-Tracker.git

# Step 2: connect to a postgres database. To install postgres locally, follow these instructions:
# https://coding-boot-camp.github.io/full-stack/postgresql/postgresql-installation-guide

# Connect to your local postgres database from the repo directory:
psql -U postgres
Password for user postgres: # enter your password here

# Step 3: create the database:
postgres=# \i db/schema.sql
postgres=# \i db/seeds.sql

# Disconnect from postgres:
postgres=# \q

# Step 4: Create a .env file, following the example:
# DB_USER = postgres
# DB_PASSWORD = your password
# DB_HOST = localhost
# DB_NAME = very_serious_business_db
# DB_PORT = 5432

# Step 5: this app requires Node.js to run. Use this command to check if Node.js is locally:
node -v
# Example output: v20.17.0

# If Node.js isn't installed, follow instructions found here:
# https://nodejs.org/en/learn/getting-started/how-to-install-nodejs

# Step 6: install dependencies:
npm i

# Step 7: build the program:
npm run build

# Run the program:
npm run start
```

## Usage

- step 1

![Add a screenshot](./relative/path/to/img.jpg?raw=true)

- step 2

![Add a screenshot](./relative/path/to/img.jpg?raw=true)

- step 3

![Add a screenshot](./relative/path/to/img.jpg?raw=true)

## Questions

If you have any questions, contact me at danstraws@gmail.com.

Check out my other projects at [github.com](https://github.com/Dan-Swarts?tab=repositories).

## Contributing

> [!IMPORTANT]
> Whether you have feedback on features, have encountered any bugs, or have suggestions for enhancements, we're eager to hear from you. Your insights help us make the Vehicle Management System library more robust and user-friendly.

We appreciate your support and look forward to making our product even better with your help!

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
