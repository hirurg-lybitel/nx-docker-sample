# Nx-docker-sample

<p align="center" >
  <img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="200">
  <img src="https://user-images.githubusercontent.com/11502258/219870843-36aff684-e738-4c1a-b165-9733db928df3.png" width="400">
  <img src="https://user-images.githubusercontent.com/11502258/219869637-9733b7ed-2449-4d95-98ab-2a6456fe4195.png" width="130"> 
</p>




Example for dockering monorepo NX via multistage building.

## Starting

### For create and run images:
```bash
> docker-compose up
```
### For run in development mode without dockering:
- install dependencies:
```bash
> yarn
```
- start project:

```bash
> yarn start:all
```
## Description

There are 3 fronts and 1 server:

![image](https://user-images.githubusercontent.com/11502258/219869211-7b6502f1-fa2d-4ffe-a975-92a49e3af6fb.png)

Each container runs on its own port:
- `localhost:4201` for first React app 
- `localhost:4202` for second React app
- `localhost:4203` for first Angular app
- `localhost:4310` for nodejs server

For serve static files (fronts) uses [nginx](https://nginx.org/).

For serve server uses [pm2](https://pm2.keymetrics.io).
