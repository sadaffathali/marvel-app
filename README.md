
## Description 
This is a Nuxt3 app that displays a list of Marvel characters. The app is built using the [Marvel API](https://developer.marvel.com/)

# 

To use this application, simply run the following commands:

## Usage

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```


## Features 
- List of Marvel characters
- Ability to filter characters by name
- Ability to view character details
- Dynamic Pagination
- Uses lazy loading for country images [Document](https://web.dev/browser-level-image-lazy-loading/) and uses Nuxt-img module
- Uses TailwindCss
- Includes a Dockerfile for easy deployment
- 



## Deployment
To deploy this application using Docker, you can use the included Dockerfile. Simply run the following commands:
```bash
$ docker build -t alibaba-task .
$ docker run -p 3000:3000 alibaba-task
```

