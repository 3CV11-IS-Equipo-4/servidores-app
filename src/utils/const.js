module.exports = {
    logins:{
        loginEMView: [{
            label:'Email: ',
            type:'email',
            placeholder:'correoele@domino.com',
            required: true,
            name: 'email',
        },
        {
            label:'Contraseña: ',
            type:'password',
            placeholder:'',
            required: true,
            name: 'password',
        },],
        loginCIView: [{
            label:'Email: ',
            type:'email',
            placeholder:'correoele@domino.com',
            required: true,
            name: 'city',
        },
        {
            label:'Contraseña: ',
            type:'password',
            placeholder:'',
            required: true,
            name: 'password',
        }],
    },
    tables: {
        estadoSolicitud: [
            {
              Header: 'Folio de la solicitud',
              accessor: 'folio', // accessor is the "key" in the data
            },
            {
              Header: 'Tipo de trámite',
              accessor: 'modalidad',
            },
            {
                Header: 'Tipo de solicitud',
                accessor: 'tipo_de_servicio',
            },
            {
                Header: 'Estado de la solicitud',
                accessor: 'estado',
            },
          ],
        oficialiaPartes: [
            {
              Header: 'Folio de la solicitud',
              accessor: 'folio', // accessor is the "key" in the data
            },
            {
              Header: 'Tipo de trámite',
              accessor: 'modalidad',
            },
            {
                Header: 'Tipo de solicitud',
                accessor: 'tipo_de_servicio',
            },
            {
                Header: 'Estado de la solicitud',
                accessor: 'estado',
            },
            {
                Header: 'Colonia',
                accessor: 'colonia_arbol',
            },
            {
                Header: 'Alcaldia',
                accessor: 'alcaldia_arbol',
            },
            {
                Header: 'Editar',
                accessor: 'ver_sol',
            },
            {
                Header: 'Aceptar',
                accessor: 'edi_sol',
            },
            {
                Header: 'Denegar',
                accessor: 'den_sol',
            }
        ],
        ejemploOficialia: [
            {
                '_id': 'jdjdjdjdjjdjd',
                modalidad: ' Vía publico',
                'tipo_de_servicio': 'Poda',
                estado: 'Recibida',
                colonia: 'colonia',
                codigo_postal: '11320'
            }
        ],
        jefeArea: [
            {
              Header: 'Folio de la solicitud',
              accessor: 'folio', // accessor is the "key" in the data
            },
            {
              Header: 'Tipo de trámite',
              accessor: 'modalidad',
            },
            {
                Header: 'Tipo de solicitud',
                accessor: 'tipo_de_servicio',
            },
            {
                Header: 'Estado de la solicitud',
                accessor: 'estado',
            },
            {
                Header: 'Colonia',
                accessor: 'colonia_arbol',
            },
            {
                Header: 'Alcaldía',
                accessor: 'alcaldia_arbol',
            },
            {
                Header: 'Consulta',
                accessor: 'ver_sol',
            },
            {
                Header: 'Aceptar',
                accessor: 'edi_sol',
            },
            {
                Header: 'Denegar',
                accessor: 'den_sol',
            }
        ],
        ejemploJA: [
            {
                '_id': 'jdjdjdjdjjdjd',
                modalidad: ' Vía publico',
                'tipo_de_servicio': 'Poda',
                estado: 'Recibida',
                colonia: 'colonia',
                codigo_postal: '11320',
                consulta: '<Aquí iria un boton>'
            }
        ],
        dictaminador: [
            {
              Header: 'Folio de la solicitud',
              accessor: 'folio', // accessor is the "key" in the data
            },
            {
              Header: 'Tipo de trámite',
              accessor: 'modalidad',
            },
            {
                Header: 'Tipo de solicitud',
                accessor: 'tipo_de_servicio',
            },
            {
                Header: 'Estado de la solicitud',
                accessor: 'estado',
            },
            {
                Header: 'Colonia',
                accessor: 'colonia_arbol',
            },
            {
                Header: 'Alcaldía',
                accessor: 'alcaldia_arbol',
            },
            {
                Header: 'Consulta',
                accessor: 'ver_sol',
            },
            {
                Header: 'Aceptar',
                accessor: 'edi_sol',
            },
            {
                Header: 'Denegar',
                accessor: 'den_sol',
            }
        ],
        ejemploDI: [
            {
                '_id': 'jdjdjdjdjjdjd',
                modalidad: ' Vía publico',
                'tipo_de_servicio': 'Poda',
                estado: 'Recibida',
                colonia: 'colonia',
                codigo_postal: '11320',
                consulta: '<Aquí iria un boton>'
            }
        ],
        Admin: [
            {
              Header: 'Rol',
              accessor: 'rol', // accessor is the "key" in the data
            },
            {
              Header: 'Nombre',
              accessor: 'nombres',
            },
            {
                Header: 'Apellido Paterno',
                accessor: 'apellido_paterno',
            },
            {
                Header: 'Apellido Materno',
                accessor: 'apellido_materno',
            },
            {
                Header: 'Alcaldía',
                accessor: 'alcaldia',
            },
            {
                Header: 'Correo eléctronico',
                accessor: 'email',
            },
            {
                Header: 'Admin',
                accessor: 'permiso_administrador',
            },
            {
                Header: 'Ver',
                accessor: 'ver_user',
            },
            {
                Header: 'Activo',
                accessor: 'usuario_activo',
            },
        ],
        ejemploAdmin: [
            {   
                _id:'23e1ed431rf43543',
                'rol': 'JA',
                nombres: 'Gumercindo',
                apellido_paterno: 'Perez',
                apellido_materno: 'Juarez',
                alcaldia: 'Alcaldia',
                email: 'correo@dominio.com',
                permiso_administrador: 'Nel'
            },
            {
                _id:'23e1ed431rf4eff3',
                'rol': 'JA',
                nombres: 'Gumercindo',
                apellido_paterno: 'Perez',
                apellido_materno: 'Juarez',
                alcaldia: 'Alcaldia',
                email: 'correo@dominio.com',
                permiso_administrador: 'Nel'
            }
        ],
        mockData: [{    
            estado:'Enviada',
            '_id':'sj34344cdfg43nh4bdcs23243',
            'tipo_de_servicio':'Derribo',
            modalidad:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'si34344cdfg43nh4bdcs23243',
            'tipo_de_servicio':'Derribo',
            modalidad:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'sh34344cdfg43nh4bdcs23243',
            'tipo_de_servicio':'Poda',
            modalidad:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'sg34344cdfg43nh4bdcs23243',
            'tipo_de_servicio':'Derribo',
            modalidad:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'sf34344cdfg43nh4bdcs23243',
            'tipo_de_servicio':'Poda',
            modalidad:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'se34344cdfg43nh4bdcs23243',
            'tipo_de_servicio':'Derribo',
            modalidad:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'sd34344cdfg43nh4bdcs23243',
            'tipo_de_servicio':'Poda',
            modalidad:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'sc34344cdfg43nh4bdcs23243',
            'tipo_de_servicio':'Derribo',
            modalidad:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'sb34344cdfg43nh4bdcs23243',
            'tipo_de_servicio':'Derribo',
            modalidad:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'sa34344cdfg43nh4bdcs23243',
            'tipo_de_servicio':'Derribo',
            modalidad:'Vía pública'
        }],
        
    },
    consultaSolicitud: {
        _id:"id",
        folio:"folio",
        estado:"estado",
        nombres:"Nombres",
        apellido_paterno:"Apellido paterno",
        apellido_materno:"Apellido materno",
        email:"correo@electronico.com",
        numero_telefono:"nuemro de telefono",
        calle:"calle del ciudadno",
        numero_exterior:"numero exterior",
        numero_interior:"numero interior",
        codigo_postal:"codigo postal",
        colonia:"colonia",
        alcaldia:"alcaldia",
        documento_de_identificacion_oficial :"url de identificacion oficial",
        tipo_de_servicio:" tipo de servicio",
        calle_arbol:"calle del arbol",
        colonia_arbol:"colonia del arbol",
        alcaldia_arbol:"alcaldia del arbol",
        calle_adyacente_1:"calle adyacente 1",
        calle_adyacente_2:"calle adyacente 2",
        referencias:"Referencias",
        motivos:"Motivos",
        fotos:["url 1","url 2","url 3","url 4","url 5",],
        modalidad:"via-publica",
        privada : {
            tipo_privada			:"construccion",
            comprobante_domicilio	:"url comprobante de domicilio",
            comprobante_propiedad	:"url comprobante de propiedad",
            construccion:{
                documento_registro :"url documento de registro",
                documento_planos	:"url documento de los planos",
                documento_declaratoria	:"documento declaratorios",
            },        
            riesgo : {
                documento_dictamen_riesgo :"url dictamenten de riesgo",
            },
        },
    },
};