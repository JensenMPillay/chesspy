<p align="center">
  <a href="https://chess.com">
    <img src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/php2z9LbY.png" height="96">
    <h3 align="center">Chesspy</h3>
  </a>
</p>

<p align="center">Welcome to Chesspy, a chess statistics engine search using Chess.com API, Next.js and Python.</p>

<br/>

## Introduction

This is a hybrid Next.js + Python app that uses Next.js as the frontend and Flask as the API backend.

## How It Works

The Python/Flask server is mapped into to Next.js app under `/api/`.

This is implemented using [`next.config.js` rewrites](https://github.com/vercel/examples/blob/main/python/nextjs-flask/next.config.js) to map any request to `/api/:path*` to the Flask API, which is hosted in the `/api` folder.

In production, the Flask server is hosted as [Python serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python) on Vercel.
