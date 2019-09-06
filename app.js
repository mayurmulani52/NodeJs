console.log('Welcome to Create Server App..!')

const express = require('express')

const app=express()

const port= 4000

app.get('/',(req,res) => res.send('Create Server Application'))

app.listen(port, () => console.log('Server is listening on ${port}'))