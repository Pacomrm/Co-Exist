# Co Exist

One of the main intentions of this development is to keep adding value to our planet by supporting those ones in action. If you want to get involved please reach out, I'll be happy to chat and make connections. Bringing sustainability to many people can ensure that we all have common understandings to co-exist more peacefully, trying to avoid fights. This will help all of us as humans to access materials that will guide us from basic questions such as how to classify our waste, to more complex subjects as human rights.

## Concept
This platform aims to share, involve and empower ambassadors worldwide to keep planting seeds in humanity. There are still many gaps we are not covering that can be dangerous for the next generations.

## Documentation
> This is in development, I am organizing information and making progress in all areas of the project as I go along. If you want to collaborate, please participate.
> Detailed description at the end of this readme.

1. Project management
I am using Asana as the main repository for tasks, user stories, and task delegation.

2. Design thinking
This goes through different iterations, I like to spend time getting what's in my head out. And move forward with other areas of the project like creating documentation and code structure. Then I go back and iterate to get a clearer expression of what I hope to see for the user. Then I move on to other areas of the project. This can continue as many times as necessary. Of course, each round must be supported by budget and scope.

3. Prototyping
[Figma:] https://www.figma.com/file/rokr9nLkQuJ2lEihFOhkkb/CO-EXIST?node-id=0%3A1&t=nImrz5aeo4WGxIUA-1
I have 13 years of using Adobe tools, mainly Illustrator, Photoshop, After Effects, and Premier Pro. I was always using Illustrator and Photoshop for flyers, infographics, web design and so. Today, I'm deep into Figma. I'm excited every time I open Figma, it's like my mind has more tools to express itself.

4. Requirements
I like to start with some popular methods, 
- Brainstorming with the team
- Fish bone method
- Fibonacci cards
- Planning poker
After an analysis stage and the completion of requirements gathering, I move on to user stories, and diagrams using BPMN.

## Technologies
My intention with this project is to update myself on the latest front-end development trends. In parallel I'm developing another platform with Apollo and GraphQL. My aim is to measure performance, speed of development, and debugging.

## Stages
1. MVP
2. Connecting organizations
3. Creating courses
4. Launch

## Architecture

* FrontEnd :
- React: 18.2
- React-dom: 18.2
- React-redux: 8.0.5
- Redux-middleware
- Redux-thunks

* BackEnd :
-Express
-Node

* Data :
- Mongo
- GraphQL

### Configuration

#### CI/CD
1. CircleCI
--- config.yml
2. Heroku for deployment

#### Client
--src
---configci
---assets
---components
---services
---store
----rootReducer.js
----store.js
---utils
---views

#### Server
-src
-db

#### Json Server
json-server --watch data.json

#### Alias
Easy access getting ready for production, webpack.config
'@': path.resolve(__dirname, '../../../src'),
'@assets' : path.resolve(__dirname, '../../../src/components'),
'@components' : path.resolve(__dirname, '../../../src/components'),
'@services' : path.resolve(__dirname, '../../../src/services'),
'@store' : path.resolve(__dirname, '../../../src/store'),
'@utils' : path.resolve(__dirname, '../../../src/utils'),
'@views' : path.resolve(__dirname, '../../../src/views'),

#### References
In order to refresh my procedures as a fullstack developer I'm sharing my favorite tools. Feedback is welcome.
1. Asana
![Main board]
()
2. Figma
![Exploration + Mockups + Designs]
()
3. Coogle
![Mapping of all areas]
()
