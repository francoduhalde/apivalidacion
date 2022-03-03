//utilizar express
/* import express from 'express'; */
const express= require('express');
const app= express();
//middleware son funciones que realizan una tarea especifica en nuestro servidor
app.use(express.json());



app.get('/',(req,res)=>{
    res.send('listooo');
});
app.get('/productos',(req,res)=>{
    res.send('productoos');
});
/* app.get('/formulario',(req,res)=>{
    res.send('formulariooo');
}) */
// put = post: para enviar datos
app.post('/formulario',(req,res)=>{
    console.log(req.body.nombre);
    console.log(req.body.usuario);
    let nombre=req.body.nombre;
    let usuario=req.body.usuario;
    console.log('el nombre y el usuario ingresado es:'+nombre+' '+usuario)
    res.send(`bienvenido usuario ${nombre} cuyo usuario es ${usuario}`)
});
app.on('error', (error)=>{
    console.log('tenemos un error en el servidor: '+ error);
});
