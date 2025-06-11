let fases = [
    {
        id: "01",
        fechaDeRegistro: new Date(),
        nombre: "SSMA"
    },
    {
        id: "02",
        fechaDeRegistro: new Date(),
        nombre: "OBRAS CIVILES"
    },
    {
        id: "03",
        fechaDeRegistro: new Date(),
        nombre: "DIRECCIÓN, CONTROL Y APOYO"
    },
]

let cargos = [
    {
        id: "01",
        fechaDeRegistro: new Date(),
        nombre: "INSPECTOR DE SSMA"
    },
    {
        id: "02",
        fechaDeRegistro: new Date(),
        nombre: "ASISTENTE DE CONTROL DE DOCUMENTOS"
    },
    {
        id: "03",
        fechaDeRegistro: new Date(),
        nombre: "PEÓN"
    },
    {
        id: "04",
        fechaDeRegistro: new Date(),
        nombre: "ENFERMERO OCUPACIONAL"
    },
]

let proyectos = [
    {
        id: "01",
        fechaDeRegistro: new Date(),
        nombre: "Compresion Mipaya"
    },
    {
        id: "02",
        fechaDeRegistro: new Date(),
        nombre: "Proyecto 2"
    },
    {
        id: "03",
        fechaDeRegistro: new Date(),
        nombre: "Proyecto 3"
    },
]

let certificados = [
    {
        id: "01",
        fechaDeRegistro: new Date(),
        nombre: "Curso CBS /PTEHS",
        duracionMeses: "12"
    },
    {
        id: "02",
        fechaDeRegistro: new Date(),
        nombre: "COT",
        duracionMeses: "6"
    },
    {
        id: "03",
        fechaDeRegistro: new Date(),
        nombre: "ESPACIOS CONFINADOS",
        duracionMeses: "24"
    },
    {
        id: "04",
        fechaDeRegistro: new Date(),
        nombre: "Trabajos en Altura",
        duracionMeses: "24"
    },
    {
        id: "05",
        fechaDeRegistro: new Date(),
        nombre: "Aislamiento de Energía Peligrosa",
        duracionMeses: "24"
    },
    {
        id: "06",
        fechaDeRegistro: new Date(),
        nombre: "Excavaciones y Zanjas",
        duracionMeses: "24"
    },
    {
        id: "07",
        fechaDeRegistro: new Date(),
        nombre: "Curso de Inducción Malvinas",
        duracionMeses: "24"
    },
    {
        id: "08",
        fechaDeRegistro: new Date(),
        nombre: "Inducción Asuntos Comunitarios",
        duracionMeses: "24"
    },
    {
        id: "09",
        fechaDeRegistro: new Date(),
        nombre: "TOP",
        duracionMeses: "24"
    },
    {
        id: "10",
        fechaDeRegistro: new Date(),
        nombre: "PLAN MANEJO INCIDENTE(PMI)",
        duracionMeses: "24"
    },
    {
        id: "11",
        fechaDeRegistro: new Date(),
        nombre: "MANEJO CONTROL EMERGENCIA (MCE) 2",
        duracionMeses: "24"
    },
]

let candidato = [
    {
        id: "01",
        fechaDeRegistro: new Date(),
        apellidosYNombres: "CHINERI URQUIA SANTIAGO",
        dni: "46030482",
        fechaDeNacimiento: "25/07/1989",
        edad: "35",
        exactian: "CESADO",
        telefono1: "971596133",
        telefono2: "",
        email: "tiagochineriurquia@gmail.com",
        departamentoResidencia: "SAN BARTOLO"
    },
]


// Fecha fin -> Se calcula en base a la fecha 
// de inicio y la duracion del certificado.
let candidatoCertificados = [
    {
        id: "01",
        fechaDeRegistro: new Date(),
        idCandidato: "01",
        idCertificado: "01",
        fechaDeInicio: "10/02/2025",
        fechaDeFin: "10/02/2026", 
        observacion: ""
    },
    {
        id: "02",
        fechaDeRegistro: new Date(),
        idCandidato: "01",
        idCertificado: "02",
        fechaDeInicio: "02/03/2024",
        fechaDeFin: "02/03/2025",
        observacion: ""
    }
]

let evaluacionMedica = [
    {
        id: "01",
        fechaDeRegistro: new Date(),
        nombre: "Examen médico"
    }
]

// Clinica viene de un selector
let candidatoEvaluacionMedica = [
    {
        id: "01",
        idCandidato: "01",
        idEvaluacionMedica: "01",
        fechaDeEvaluacion: "14/04/2025",
        clinica: "MEDEX",
        resultado: "APROBADO",
        observacion: "",
        paseMedico: "APTO"
    }
]

// Regimen viene de un selector
// Observacion = 0: no observado - 1: observado
let puesto = [
    {
        id: "01",
        fechaDeRegistro: new Date(),
        fechaDeRquerimiento: "21/04/2025",
        idProyecto: "01",
        numeroRequerimiento: "369",
        tipo: "INICIO DE ACTIVIDADES",
        idFase: "01",
        idCargo: "01",
        cantidad: "1",
        regimen: "COMÚN",
        fechaDeIngreso: "21/01/2025",
        fechaDeCese: "2/04/2025S",
        observado: "0",
        observacion: ""
    }
]