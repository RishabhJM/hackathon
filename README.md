# ClientNode

This project was generated using [Nx](https://nx.dev).

## Development server

Install Node following below link if not installed.

https://kinsta.com/blog/how-to-install-node-js/#how-to-install-nodejs-on-windows

https://kinsta.com/blog/how-to-install-node-js/#how-to-install-nodejs-on-macos


Open project.

Run `npm install`

Run `npm run start` for a dev server. Navigate to http://localhost:3333/. The app will automatically reload if you change any of the source files.

Start working on solution, by editing the code in simulatorNode.ts OnStep function.


To Change port number, Go to main.ts and update variable named "port".
```
const port = process.env.PORT || 3333;
```
PLEASE DO NOT EDIT app.controller.ts, app.module.ts apart from port number. It is used to run the simulator.

put url http://localhost:3333/ in executable exe to run it.
