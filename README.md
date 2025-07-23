# sf6-proxy

This proxy allows you to search CFN players using the Street Fighter 6 Buckler API, with your session cookie.

## Usage

Deploy to Vercel, and query:

```
https://your-vercel-url.vercel.app/api/relay?q=yoursearch
```

## Setup

Create a `.env` file at the root with:

```
SF6_COOKIE=buckler_id=...; buckler_r_id=...; buckler_praise_date=...
```
