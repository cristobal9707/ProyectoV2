new Vue({
    el: '#app',

    data: () => {
        return {

            drawer: null,
            valid: true,
            nombre: '',
            apellido: '',
            correo: '',
            ciudad: '',
            calle: '',
            edad: '',
            sexo: '',
            cesfam: '',
            area: '',
            fonasaisapre: '',
            fecha: '',
            hora: '',


            //Futuros iconos           
            icons: [
                'A',//fab fa-facebook
                'B',//fab fa-twitter
                'C',//fab fa-google-plus
                'D',//fab fa-linkedin
                'E'//fab fa-instagram
            ],

            //Carrusel Inicio
            carruseles: [
                { src: 'img/img2.jpg' },
                { src: 'img/img1.jpg' },
                { src: 'img/img3.jpg' }

            ],

            //Datos Cesfam
            cesfams: [
                { nombre: 'Cesfam Amanecer', direccion: 'Garibaldi N°1280 ', fono: '+56 45 2557300', imagen: 'https://image.shutterstock.com/image-vector/medical-concept-hospital-building-doctor-260nw-588196298.jpg' },
                { nombre: 'Cesfam Pueblo Nuevo', direccion: 'Nahuelbuta N°2015', fono: '+56 45 2220038', imagen: 'https://image.shutterstock.com/image-vector/medical-concept-hospital-building-doctor-260nw-588196298.jpg' },
                { nombre: 'Cesfam Labranza', direccion: '1 Oriente N°0411', fono: '+56 45 2376675', imagen: 'https://image.shutterstock.com/image-vector/medical-concept-hospital-building-doctor-260nw-588196298.jpg' },
                { nombre: 'Cesfam Pedro De Valdivia', direccion: 'Chivilcan N°0910', fono: '+56 45 2732836', imagen: 'https://image.shutterstock.com/image-vector/medical-concept-hospital-building-doctor-260nw-588196298.jpg' },
                { nombre: 'Cesfam Santa Rosa', direccion: 'Pircunche N°0316', fono: '+56 45 2220194', imagen: 'https://image.shutterstock.com/image-vector/medical-concept-hospital-building-doctor-260nw-588196298.jpg' },
                { nombre: 'Cesfam Villa Alegre', direccion: 'Av. Argentina N°0820', fono: '+56 45 2365196', imagen: 'https://image.shutterstock.com/image-vector/medical-concept-hospital-building-doctor-260nw-588196298.jpg' },
                { nombre: 'Cesfam El Carmen', direccion: 'Los Compositores #0110', fono: '+56 45 2643500', imagen: 'https://image.shutterstock.com/image-vector/medical-concept-hospital-building-doctor-260nw-588196298.jpg' },
                { nombre: 'Ceda Monseñor Valech', direccion: 'Camino Chol-Chol Km 10', fono: '+56 45 2251398', imagen: 'https://image.shutterstock.com/image-vector/medical-concept-hospital-building-doctor-260nw-588196298.jpg' },
                { nombre: 'Cecosf El Salar', direccion: 'Huasquinta N°01180', fono: '+56 45 2558090', imagen: 'https://image.shutterstock.com/image-vector/medical-concept-hospital-building-doctor-260nw-588196298.jpg' },
                { nombre: 'Cecosf Arquenco', direccion: 'Arcalafquen N°0855', fono: '+56 45 2558082', imagen: 'https://image.shutterstock.com/image-vector/medical-concept-hospital-building-doctor-260nw-588196298.jpg' },
                { nombre: 'Cecosf Las Quilas', direccion: 'Los Copihues N° 1486', fono: '+56 45 2212017', imagen: 'https://image.shutterstock.com/image-vector/medical-concept-hospital-building-doctor-260nw-588196298.jpg' }
            ],

            //Datos Area
            areas: [
                { nombre: 'Sala IRA', descripcion: 'Se encarga de infecciones respiratorias agudas, realizan también actividades de promoción y prevención en establecimientos educacionales, con la finalidad de disminuir la contaminación intradomiciliaria y la prevención de enfermedades respiratorias agudas.' },
                { nombre: 'Sala ERA', descripcion: 'Se encarga de enfermedades Respiratorias del Adulto y del Adulto Mayor.' },
                { nombre: 'Farmacia', descripcion: 'Se encargan de dispensar todos los medicamentos indicados por los diversos profesionales del establecimiento.' },
                { nombre: 'Bodega de leche', descripcion: 'Los productos entregados corresponden a las necesidades de los beneficiarios según su edad. Es así como para los niños hay leche especial para prematuro, lactante mayor; y alimento para el desnutrido. La embarazada también recibe leche y  el adulto mayor un producto lácteo y  crema de los años dorados.' },
                { nombre: 'Rehabilitacion', descripcion: 'Se encarga de facilitar la integración de las personas con discapacidades y sus familias en el proceso de rehabilitación junto con los aspectos de prevención y promoción de la salud, adecuados a la realidad local y fortalecida por apoyos extranjeros y nacionales.' },
                { nombre: 'Vacunatorio', descripcion: 'Aplica las vacunas correspondientes al programa ampliado de inmunizaciones, así  también las vacunas correspondientes a las diversas campañas del Ministerio de Salud. Los beneficiarios son FONASA, ISAPRE y PARTICULARES.' },
                { nombre: 'Administrativo', descripcion: 'Aquí se recibe por primera vez para inscripción y elaboración de ficha clínicaTambién atiende el calificador de derecho en caso de problemas previsionales.' },
                { nombre: 'Equipo Dental', descripcion: 'Son los encargados de prevenir, diagnosticar y tratar enfermedades y trastornos dentales y bucales, realizando procedimientos de rutina y de emergencia a los fines de mejorar la salud de sus pacientes en este particular.' },
                { nombre: 'Apoyo', descripcion: 'inyecciones, curaciones y toma de muestras.' }
            ],
            headers: [
                { text: 'Fecha', value: 'fecha' },
                { text: 'Hora', value: 'hora' },
                { text: 'Cesfam', value: 'cesfam' },
                { text: 'Area', value: 'area' },
                { text: 'Fonasa/Isapre', value: 'fonasaisapre' }
            ],
            desserts: [
                { fecha: '29/05/2019', hora: '09:00', cesfam: 'Cesfam Amanecer', area: 'Dentista', fonasaisapre: 'fonasa' },
                { fecha: '06/06/2019', hora: '15:00', cesfam: 'Cesfam Pueblo Nuevo', area: 'Vacunatorio', fonasaisapre: 'fonasa' },
                { fecha: '12/06/2019', hora: '10:30', cesfam: 'Cesfam Labranza', area: 'Dentista', fonasaisapre: 'fonasa' },
            ]
        }
    },
    methods: {
        validate() {
            this.desserts.push({
                nombre: this.nombre,
                apellido: this.apellido,
                correo: this.correo,
                ciudad: this.ciudad,
                calle: this.calle,
                edad: this.edad,
                sexo: this.sexo,
                fecha: this.fecha,
                hora: this.hora,
                cesfam: this.cesfam,
                area: this.area,
                fonasaisapre: this.fonasaisapre
            });
        }
    },
})
