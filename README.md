<h1 align="center">Poll Generator 🔖</h1>

<p align="left">🔥 A backend application that provides API routes to manage polls.

<br />

The application consists of providing with the aim of adjusting API routes, where we can create a poll/Poll, vote in a poll and fetch a created poll. The project was developed with Node, Fastify, Prisma, Docker and WebSckets Redis technologies.

</p>

<br />

## 🎡 Features

- Create polls with questions and answer options

- Vote in existing polls using an identification cookie

- Access information about the polls created, including voting results

- Cookies used to ensure that only one person per cookie ID can vote in a poll

- Allows customers to receive real-time updates on voting

<br />

## 🔧 Resources used

This project was developed with the following resources and technologies:

-   [Node.js](https://nodejs.org/en)
-   [Fastify](https://fastify.dev/docs/latest/Guides/Getting-Started/)
-   [Prisma](https://www.prisma.io/studio)
-   [Docker](https://hub.docker.com/)
-   [Redis](https://redis.io/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Zod](https://zod.dev/)

<br />

## 🏍️ Project routes

-   */polls* Route where you can create a new poll/Poll, just needing to pass title and options data:
```json
{
	"title": "Qual é o melhor celular?",
	"options": ["Motorola", "Samsung", "Iphone", "Xiomei"]
}
```

<br />

-   */polls/:pollId* Route where you can see a specific poll/Poll, just needing to pass the poll id on the link:
```json
{
	http://localhost:3333/polls/0573f5c2-4040-4573-8494-73f255abe71d
}
```

<br />

-   */polls/:pollId/votes* Route where you can vote for an option in a specific poll/Poll, just needing to pass the id of a poll in the link:
```json
{
  http://localhost:3333/polls/0573f5c2-4040-4573-8494-73f255abe71d/votes
}
```

And pass the id of the desired option:

```json
{
	"pollOptionId": "7de106b9-7b7e-47d4-bec6-8c10f914944c"
}
```

<br />

-   */polls/:pollId/results* Route where you can follow the results of a specific poll/Poll in real time, just needing to pass the poll id on the link and connect with the WebSocket route:
```json
{
  ws://localhost:3333/polls/0573f5c2-4040-4573-8494-73f255abe71d/results
}
```

<br />

## 🚀 How to execute the project

1. Clone the repository to your local machine.

```bash
$ git clone https://github.com/maarcusvinicius/PollGenerator
```

2. Navigate to the project directory and install the dependencies.

```bash
$ cd PollGenerator
$ npm install
$ npm run docker:up
```

3. Start the development server.

```bash
$ npm run dev
```

4. Open your test environment and access the documentation routes to view the application results.

<br />

## Licença

<p>

This project is licensed under the [MIT License](https://opensource.org/license/mit/). Please feel free to use, modify, and distribute it as needed.

</p>


<br />
<br />
<br />
<h4 align="center"> 
	🚧  Poll Generator 🔖 FINISHED  🚧
</h4>
<br />
<br />
<br />
<br />
<br />

Made with ❤️ by Marcus Vinicius 👋🏽 Get in touch!

//feito readme marcus











### 𝐇𝐞𝐥𝐥𝐨 𝐭𝐡𝐞𝐫𝐞, 𝐟𝐞𝐥𝐥𝐨𝐰 <𝚌𝚘𝚍𝚎𝚛𝚜/>! <img width="40" src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif">

I'm a Web Developer, a programmer looking to make <br /> a difference in the digital world. [**Personal Site**](https://marcus-dev.vercel.app/) 🚀

#### My current tools

📲 Front-end Mobile with React Native  
💻 Front-end Web with Reactjs  
📡 Back-end with Nodejs  
🔣 Typescript  
🧰 And more...

#### 💬 Find me elsewhere

[![Linkedin Badge](https://img.shields.io/badge/-Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/marcus-vinicius-507718228/)](https://www.linkedin.com/in/marcus-vinicius-507718228/)
[![Gmail Badge](https://img.shields.io/badge/-marcus.editor77@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:marcus.editor77@gmail.com)](marcus.editor77@gmail.com)
