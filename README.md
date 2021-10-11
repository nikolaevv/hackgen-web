# HackGen

[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/nikolaevv/hackgen-web/blob/main/LICENSE)

React app for fast generating backend & frontend source code for project. 

Now app supports Python / Fast API for backend and React JS for frontend. It can be good instrument for programmer competitions (hackatons, cups, etc) and pet projects.
It uses [own API](https://github.com/nikolaevv/hackgen) for generating code.
It is planned to add support of Django, Flask, Vue and other modern frameworks.

Why it is required service:
- You don't have to waste time for writing thousands lines of similar code
- Using modern light & fast frameworks
- Generated code contains all needful instruments
- It's interface is fast & beautiful

## Install
- Clone repository using `git clone https://github.com/nikolaevv/hackgen-web`
- Move to this respository: `cd hackgen-web`
- Run `npm install` for installing required packages
- Run `npm start` and check that app is working

Then open http://127.0.0.1:3000/app/create/1

## What does it generate
- Backend
  - `models.py`
  - `schemas.py` (serialization for requests based on models)
  - `crud.py` (Create, read, update & delete operations for models)
  - `main.py` (API controllers based on CRUD operations)
  - `requirements.txt` (auto built dependencies)
- Frontend
  - components (arrow-functional components from list)
  - selectors (special functions for getting objects from redux store)
  - actions (actions of getting one or many objects of all models)
  - query-config (config with all requests, created in API)
