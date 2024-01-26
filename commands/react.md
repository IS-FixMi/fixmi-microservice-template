# Setup React

Install react with typescript, It will take some time.
```bash 
npx create-react-app client --template typescript
```

Remove the git folder that Reacts installs by default.
```bash
cd client 
rm -rf .git
```

Now I have to find a way to compile everything nicely.
The first thing to do is to exclude `client/` from tsc transcription 
since reacs uses jsx.
I added the following line to the tsconfig.json adter `"compilerOptions": {}`
```json
  "exclude": [
    "client/*"
  ],
```

At this point we can run `npm run lint` to analyze the code, `npm run start` to start the backend, and inside `client/` we can run `npm start` 

React automatically refreshes the browser every time we make a change to the frontend, we want to achieve something similar to the backand

## Nodemon

```bash 
npm install nodemon 
```

And we can change the script inside `package.json` like so:
```json 
"start": "tsc && nodemon dist/app.js",
```

This will update the browser each time we change the javascript, but we are only working with typescript. We need to install `ts-node` and give the typescript file to nodemon
```json 
"start": "tsc && nodemon src/app.ts",
```
