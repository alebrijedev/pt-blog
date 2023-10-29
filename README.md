# PT Blog

[![License](https://img.shields.io/badge/MIT-license-green)][license]

Very basic blog site.

---

**Source Code**: [https://github.com/alebrijedev/pt-blog](https://github.com/alebrijedev/pt-blog)

---

## Features

- Add Entry Blog
- Filter Entries by title, author and content

## Requirements

- nodejs>=20.8.1 (see `pixi.toml` file)
- npm>=10.1.0
- @nestjs/cli>=10.2.0 (development only)

## Installation

You can install _pt-blog_ via `git` from [github](https://github.com/) and set environment variables

- DB_HOST
- DB_PORT
- DB_USERNAME
- DB_PASSWORD
- DB_NAME

Alternatively touch `.env` with your environment variables

``` console
git clone https://github.com/alebrijedev/pt-blog
cd pt-blog
cp .env.example .env # edit variables
# development environment
npm run dev
# production environment
npm run build
npm run start
```

## License

`pt-blog` is distributed under the terms of the [MIT](https://spdx.org/licenses/MIT.html) license.

<!-- github-only -->

[license]: https://github.com/alebrijedev/pt-blog/blob/main/LICENSE