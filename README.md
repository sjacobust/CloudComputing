# Cloud Computing

Repo for the class of Cloud Computing P2021

## Installation & Building

This repo will have various directories and they will have their own way of installing. However, we will be updating this with each directory and their way of installation.

### Practica5

Travel to the directory with the same name, once there, run the following command.

```bash
npm install
```



## Usage

### Practica5

Once in this Working Directory, there are several ways of running this app.

1. With Node:
If you have [nodemon](https://www.npmjs.com/package/nodemon) installed, then use this command to run as an app in localhost.

```bash
nodemon .
```

If you don't, you can just simply run

```bash
node .
```

or

```bash
npm start
```

2. With the Dockerfile:

Using the Dockerfile provided, you can use the following command:

```bash
docker build <username>/<name of the image> .
```

The Dockerfile exposes the port 3000, to run a container of the image built, use the following command:

```bash
docker run -d -p <PORT IN YOUR COMPUTER>:3000 --name <container name> <image name>
```

3. With Docker Hub:

The image of this app is located in this [dockerhub repo](https://hub.docker.com/repository/docker/overripewings4/docker-p5), just use
docker run like so:

```bash
docker run -d -p <PORT IN YOUR COMPUTER>:3000 --name <container name> overripewings4/docker-p5
```

