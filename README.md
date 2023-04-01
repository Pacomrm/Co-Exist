### Co-Exist
Sustainability Platform

#Architecture
FrontEnd
-React: 18.2
-React-dom: 18.2
-React-redux: 8.0.5
-Redux-middleware
-Redux-thunks

BackEnd
-Express
-Node

DB
-Mongo
-GraphQL

#Configuration
Folder structure:
-Client
--src
---assets
---components
---services
---store
----rootReducer.js
----store.js
---utils
---views

-Server

##Alias
Easy access getting ready for production
'@': path.resolve(__dirname, '../../../src'),
'@assets' : path.resolve(__dirname, '../../../src/components'),
'@components' : path.resolve(__dirname, '../../../src/components'),
'@services' : path.resolve(__dirname, '../../../src/services'),
'@store' : path.resolve(__dirname, '../../../src/store'),
'@utils' : path.resolve(__dirname, '../../../src/utils'),
'@views' : path.resolve(__dirname, '../../../src/views'),
