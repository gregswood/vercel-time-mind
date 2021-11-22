# Time Mind
This project builds a time tracking app for the browser, allowing a user to start and stop timers throughout the day.

## Setup
- Fork this repository to your own github account
- Run `npm run setup`
- Create a new branch to work on
- Start the environment with `npm run dev`
    - If you want to use a different host, pass on the host argument: 
    `npm run dev -- --host example.dev`
    - If you want to use a self signed certificate, you can pass on --cert and --key: 
    `npm run dev -- --host example.dev --cert mycert.crt --key mykey.key`
    - To set the port forward on the "port" argument:
    `npm run dev -- --port 9000`
- Visit http://<domain>:<port> to develop your application. Live reload will work automatically.
- As you work through the tasks, make sure to create commits
- Push your branch to the origin remote when you are finished.

Check [confluence](https://space48.atlassian.net/wiki/spaces/GRADS/pages/2686353519/Time+Mind) for project instructions
