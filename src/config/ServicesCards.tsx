import { IconType } from 'react-icons';
import { FaReact } from 'react-icons/fa';
import { LiaFigma } from 'react-icons/lia';
import { MdOutlineArchitecture } from 'react-icons/md';
import {
  BadgeDollarSign,
  PaintbrushVertical,
  ShoppingCart
} from 'lucide-react';
import { CiMobile3 } from 'react-icons/ci';
import { TbHttpGet } from 'react-icons/tb';
import { LiaTerminalSolid } from 'react-icons/lia';
import figma from '@/assets/icons/figma.svg';
import adobexd from '@/assets/icons/adobe-xd.svg';
import sketch from '@/assets/icons/sketch.svg';
import invision from '@/assets/icons/invision-icon.svg';
import bootstrap from '@/assets/icons/bootstrap.svg';
import css from '@/assets/icons/css-3.svg';
import tailwind from '@/assets/icons/tailwindcss-icon.svg';
import html from '@/assets/icons/html-5.svg';
import js from '@/assets/icons/javascript.svg';
import react from '@/assets/icons/react.svg';
import vue from '@/assets/icons/vue.svg';
import angular from '@/assets/icons/angular-icon.svg';
import ts from '@/assets/icons/typescript-icon.svg';
import material from '@/assets/icons/material-ui.svg';
import daisy from '@/assets/icons/daisyUI.svg';
import headless from '@/assets/icons/headlessui-icon.svg';
import java from '@/assets/icons/java.svg';
import python from '@/assets/icons/python.svg';
import cs from '@/assets/icons/c-sharp.svg';
import redux from '@/assets/icons/redux.svg';
import reactQuery from '@/assets/icons/react-query-icon.svg';
import reactRouter from '@/assets/icons/react-router.svg';
import fastapi from '@/assets/icons/fastapi-icon.svg';
import hono from '@/assets/icons/hono.svg';
import nodejs from '@/assets/icons/nodejs-icon.svg';
import experss from '@/assets/icons/express.svg';
import nestjs from '@/assets/icons/nestjs.svg';
import primsa from '@/assets/icons/prisma.svg';
import mongo from '@/assets/icons/mongodb-icon.svg';
import pg from '@/assets/icons/postgresql.svg';
import dotnet from '@/assets/icons/dotnet.svg';
import sql from '@/assets/icons/mysql-icon.svg';
import docker from '@/assets/icons/docker-icon.svg';
import spring from '@/assets/icons/spring-icon.svg';
import gql from '@/assets/icons/graphql.svg';
import django from '@/assets/icons/django-icon.svg';
import next from '@/assets/icons/nextjs-icon.svg';
import paypal from '@/assets/icons/paypal.svg';
import stripe from '@/assets/icons/stripe.svg';
import websock from '@/assets/icons/websocket.svg';
import rabbitmq from '@/assets/icons/rabbitmq-icon.svg';
import redis from '@/assets/icons/redis.svg';
import shopify from '@/assets/icons/shopify.svg';
import woo from '@/assets/icons/woocommerce-icon.svg';
import reactNative from '@/assets/icons/create-react-app.svg';
import flutter from '@/assets/icons/flutter.svg';
import dart from '@/assets/icons/dart.svg';
import swift from '@/assets/icons/swift.svg';
import android from '@/assets/icons/android-icon.svg';
import kotlin from '@/assets/icons/kotlin-icon.svg';
import electron from '@/assets/icons/electron.svg';
import xamarin from '@/assets/icons/xamarin.svg';
import googleads from '@/assets/icons/google-ads.svg';
import linkedin from '@/assets/icons/linkedin-icon.svg';
import facebook from '@/assets/icons/facebook.svg';
import twitter from '@/assets/icons/twitter.svg';
import gmarketing from '@/assets/icons/google-marketing-platform.svg';
import youtube from '@/assets/icons/youtube-icon.svg';
import premiere from '@/assets/icons/adobe-premiere.svg';
import aftereffects from '@/assets/icons/adobe-after-effects.svg';
import illustrator from '@/assets/icons/adobe-illustrator.svg';
import lightroom from '@/assets/icons/adobe-lightroom.svg';
import photoshop from '@/assets/icons/adobe-photoshop.svg';
import flask from '@/assets/icons/flask.svg';
import postman from '@/assets/icons/postman-icon.svg';
import swagger from '@/assets/icons/swagger.svg';
import linux from '@/assets/icons/linux-tux.svg';
import bash from '@/assets/icons/bash-icon.svg';
import cmd from '@/assets/icons/terminal.svg';
import ubuntu from '@/assets/icons/ubuntu.svg';
import cpp from '@/assets/icons/c-plusplus.svg';
import aws from '@/assets/icons/aws.svg';
import awsamplify from '@/assets/icons/aws-amplify.svg';
import awslambda from '@/assets/icons/aws-lambda.svg';
import awsdynamo from '@/assets/icons/aws-dynamodb.svg';
import ec2 from '@/assets/icons/aws-ec2.svg';
import git from '@/assets/icons/git-icon.svg';
import azure from '@/assets/icons/microsoft-azure.svg';
import microsoft from '@/assets/icons/microsoft-icon.svg';

export interface Card {
  icon: IconType | any;
  icons: any[];
}
export const assets: Card[] = [
  {
    icon: MdOutlineArchitecture,
    icons: [
      aws,
      awsamplify,
      awslambda,
      awsdynamo,
      ec2,
      git,
      azure,
      cs,
      python,
      linux,
      microsoft,
      swagger
    ]
  },
  {
    icon: LiaFigma,
    icons: [
      figma,
      adobexd,
      sketch,
      invision,
      bootstrap,
      css,
      tailwind,
      html,
      js,
      react,
      vue,
      angular,
      ts,
      material,
      daisy,
      headless
    ]
  },
  {
    icon: FaReact,
    icons: [
      nodejs,
      nestjs,
      pg,
      mongo,
      primsa,
      ts,
      js,
      python,
      cs,
      react,
      angular,
      vue,
      redux,
      reactQuery,
      reactRouter,
      fastapi,
      dotnet,
      sql,
      docker,
      java,
      spring,
      gql,
      django,
      next
    ]
  },
  {
    icon: ShoppingCart,
    icons: [
      nodejs,
      ts,
      stripe,
      paypal,
      mongo,
      pg,
      websock,
      rabbitmq,
      redis,
      shopify,
      woo,
      nestjs
    ]
  },
  {
    icon: CiMobile3,
    icons: [
      nodejs,
      ts,
      reactNative,
      flutter,
      dart,
      swift,
      android,
      java,
      kotlin,
      electron,
      material,
      xamarin
    ]
  },
  {
    icon: BadgeDollarSign,
    icons: [googleads, linkedin, facebook, twitter, gmarketing, youtube]
  },
  {
    icon: PaintbrushVertical,
    icons: [
      invision,
      adobexd,
      figma,
      premiere,
      aftereffects,
      illustrator,
      lightroom,
      photoshop,
      sketch
    ]
  },
  {
    icon: TbHttpGet,
    icons: [
      experss,
      nestjs,
      hono,
      fastapi,
      django,
      flask,
      gql,
      websock,
      spring,
      dotnet,
      swagger,
      postman
    ]
  },
  {
    icon: LiaTerminalSolid,
    icons: [linux, bash, cmd, python, ubuntu, js, cpp, cs]
  }
];
