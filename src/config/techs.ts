import figma from "@/assets/icons/figma.svg";
import bootstrap from "@/assets/icons/bootstrap.svg";
import css from "@/assets/icons/css-3.svg";
import tailwind from "@/assets/icons/tailwindcss-icon.svg";
import html from "@/assets/icons/html-5.svg";
import js from "@/assets/icons/javascript.svg";
import react from "@/assets/icons/react.svg";
import vue from "@/assets/icons/vue.svg";
import angular from "@/assets/icons/angular-icon.svg";
import ts from "@/assets/icons/typescript-icon.svg";
import material from "@/assets/icons/material-ui.svg";
import daisy from "@/assets/icons/daisyUI.svg";
import headless from "@/assets/icons/headlessui-icon.svg";
import java from "@/assets/icons/java.svg";
import python from "@/assets/icons/python.svg";
import cs from "@/assets/icons/c-sharp.svg";
import redux from "@/assets/icons/redux.svg";
import reactQuery from "@/assets/icons/react-query-icon.svg";
import reactRouter from "@/assets/icons/react-router.svg";
import zod from "@/assets/icons/zod.svg";
import fastapi from "@/assets/icons/fastapi-icon.svg";
import hono from "@/assets/icons/hono.svg";
import nodejs from "@/assets/icons/nodejs-icon.svg";
import experss from "@/assets/icons/express.svg";
import nestjs from "@/assets/icons/nestjs.svg";
import primsa from "@/assets/icons/prisma.svg";
import mongo from "@/assets/icons/mongodb-icon.svg";
import pg from "@/assets/icons/postgresql.svg";
import dotnet from "@/assets/icons/dotnet.svg";
import sql from "@/assets/icons/mysql-icon.svg";
import docker from "@/assets/icons/docker-icon.svg";
import spring from "@/assets/icons/spring-icon.svg";
import gql from "@/assets/icons/graphql.svg";
import django from "@/assets/icons/django-icon.svg";
import next from "@/assets/icons/nextjs-icon.svg";
import stripe from "@/assets/icons/stripe.svg";
import websock from "@/assets/icons/websocket.svg";
import rabbitmq from "@/assets/icons/rabbitmq-icon.svg";
import redis from "@/assets/icons/redis.svg";
import flutter from "@/assets/icons/flutter.svg";
import electron from "@/assets/icons/electron.svg";
import flask from "@/assets/icons/flask.svg";
import postman from "@/assets/icons/postman-icon.svg";
import swagger from "@/assets/icons/swagger.svg";
import linux from "@/assets/icons/linux-tux.svg";
import ec2 from "@/assets/icons/aws-ec2.svg";
import git from "@/assets/icons/git-icon.svg";
import typeorm from "@/assets/icons/typeorm.svg";
import rxjs from "@/assets/icons/reactivex.svg";
import s3 from "@/assets/icons/aws-s3.svg";
import passport from "@/assets/icons/passport.svg";
import jwt from "@/assets/icons/jwt-icon.svg";
import gin from "@/assets/icons/gin.svg";
import axios from "@/assets/icons/axios.svg";
import nginx from "@/assets/icons/nginx.svg";
import jest from "@/assets/icons/jest.svg";
import { StaticImageData } from "next/image";

interface __Stack {
  id: number;
  name: string;
  designation: string;
  image: StaticImageData;
}

export const BackendStack: __Stack[] = [
  { id: 1, name: "Nodejs", image: nodejs, designation: "" },
  { id: 2, name: "JavaScript", image: js, designation: "" },
  { id: 3, name: "TypeScript", image: ts, designation: "" },
  { id: 4, name: "NestJs", image: nestjs, designation: "" },
  { id: 5, name: "PrismaORM", image: primsa, designation: "" },
  { id: 6, name: "TypeORM", image: typeorm, designation: "" },
  { id: 7, name: "PostgreSQL", image: pg, designation: "" },
  { id: 8, name: "Docker", image: docker, designation: "" },
  { id: 9, name: "GraphQL", image: gql, designation: "" },
  { id: 10, name: "MongoDB", image: mongo, designation: "" },
  { id: 11, name: "ExpressJs", image: experss, designation: "" },
  { id: 12, name: "MySQL", image: sql, designation: "" },
  { id: 13, name: "ReactiveX", image: rxjs, designation: "" },
  { id: 14, name: "AWS S3", image: s3, designation: "" },
  { id: 15, name: "Passport Js", image: passport, designation: "" },
  { id: 16, name: "JWT", image: jwt, designation: "" },
  { id: 17, name: "Hono", image: hono, designation: "" },
  { id: 18, name: "Python", image: python, designation: "" },
  { id: 19, name: "Redis", image: redis, designation: "" },
  { id: 20, name: "Django", image: django, designation: "" },
  { id: 21, name: "NextJs", image: next, designation: "" },
  { id: 22, name: "Websockets", image: websock, designation: "" },
  { id: 23, name: "RabbitMQ", image: rabbitmq, designation: "" },
  { id: 24, name: "Flask", image: flask, designation: "" },
  { id: 25, name: "FastAPI", image: fastapi, designation: "" },
  { id: 26, name: "C#", image: cs, designation: "" },
  { id: 27, name: ".NET", image: dotnet, designation: "" },
  { id: 28, name: "Java", image: java, designation: "" },
  { id: 29, name: "Spring", image: spring, designation: "" },
  { id: 30, name: "Gin", image: gin, designation: "" },
];

export const FrontendStack: __Stack[] = [
  { id: 1, name: "Nodejs", image: nodejs, designation: "" },
  { id: 2, name: "JavaScript", image: js, designation: "" },
  { id: 3, name: "TypeScript", image: ts, designation: "" },
  { id: 4, name: "Electron", image: electron, designation: "" },
  { id: 5, name: "ReactJs", image: react, designation: "" },
  { id: 6, name: "VueJs", image: vue, designation: "" },
  { id: 7, name: "AngularJs", image: angular, designation: "" },
  { id: 8, name: "React Router", image: reactRouter, designation: "" },
  { id: 9, name: "Redux Toolkit", image: redux, designation: "" },
  { id: 10, name: "React Query", image: reactQuery, designation: "" },
  { id: 11, name: "DaisyUI", image: daisy, designation: "" },
  { id: 12, name: "MaterialUI", image: material, designation: "" },
  { id: 13, name: "Zod", image: zod, designation: "" },
  { id: 14, name: "HeadlessUI", image: headless, designation: "" },
  { id: 15, name: "TailwindCSS", image: tailwind, designation: "" },
  { id: 16, name: "Bootstrap", image: bootstrap, designation: "" },
  { id: 17, name: "Axios", image: axios, designation: "" },
  { id: 18, name: "Flutter", image: flutter, designation: "" },
  { id: 19, name: "HTML", image: html, designation: "" },
  { id: 20, name: "CSS", image: css, designation: "" },
];

export const UtilitiesStack: __Stack[] = [
  { id: 1, name: "Git", image: git, designation: "" },
  { id: 2, name: "Docker", image: docker, designation: "" },
  { id: 3, name: "Figma", image: figma, designation: "" },
  { id: 4, name: "Postman", image: postman, designation: "" },
  { id: 5, name: "Swagger", image: swagger, designation: "" },
  { id: 6, name: "EC2", image: ec2, designation: "" },
  { id: 7, name: "Nginx", image: nginx, designation: "" },
  { id: 8, name: "Linux", image: linux, designation: "" },
  { id: 9, name: "Stripe", image: stripe, designation: "" },
  { id: 10, name: "Jest", image: jest, designation: "" },
];
