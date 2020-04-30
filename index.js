const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let user = {
    nombre: '',
    apellido: ''
};

app.get('/', function(req, res){
    respuesta = {
        error: 'true',
        codigo: 200,
        mensaje: 'Bienvenido a ProfePlus'
    };

    res.send(respuesta);
});

app.get('/user', function(req, res){
    respuesta = {
        error: 'false',
        codigo: 200,
        mensaje: ''
    };

    if(user.nombre === ''|| user.apellido === ''){
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: 'El usuario no ha sido creado'
        };
    } else {
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'El usuario ha sido creado correctamente',
            respuesta: user
        };
    };

    res.send(respuesta);
});

app.post('/user', function(req, res){
    if(!req.body.nombre || !req.body.apellido){
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'Se necesitan ambos datos para poder registrar al usuario'
        };
    } else {
        if(user.nombre !== ''|| user.apellido !== ''){
            respuesta = {
                error: true,
                codigo: 503,
                mensaje: 'El usuario ya ha sido creado'
            };
        } else {
            user = {
                nombre: req.body.nombre,
                apellido: req.body.apellido
            };

            respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'Usuario creado correctamente',
                respuesta: user
            };
        }
    }

    res.send(respuesta);
});

app.put('/user', function(req, res){
    if(!req.body.nombre|| !req.body.apellido){
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'Los campos son requeridos'
        };
    } else {
        if(usuario.nombre === '' || usuario.apellido === '') {
            respuesta = {
                error: true,
                codigo: 501,
                mensaje: 'El usuario no ha sido creado'
            };
        } else {
            user = {
                nombre: nombre.req.body,
                apellido: apellido.req.body
            };
    
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'El usuario ha sido actualizado correctamente',
                respuesta: user
            };
        }
    }

    res.send(respuesta);
});

app.delete('/user', function(req, res){
    if(user.nombre === '' || user.apellido === ''){
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: 'El usuario no ha sido creado'
        };
    } else {
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'Usuario eliminado'
        };

        user = {
            nombre: '',
            apellido: ''
        }
    }

    res.send(respuesta);
});


app.use(function(req, res, next){
    respuesta = {
        error: true,
        codigo: 404,
        mensaje: 'URL no encontrada'
    }

    res.sendStatus(respuesta);
});

app.listen(3000, ()=> {
    console.log('El servidor está inicializado en el puerto 3000');
});