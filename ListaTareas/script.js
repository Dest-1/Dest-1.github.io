const tarea = document.getElementById("tarea")
const fecha = document.getElementById("fecha")
const tareas = document.getElementById("lista_tareas")
let lista_tareas = []

if(localStorage.getItem("lista_tareas")){
    lista_tareas = JSON.parse(localStorage.getItem("lista_tareas"))
}

function mostrar_fecha(fecha){

    //Generar fecha
    const fecha_titulo = new Date(Date.parse(fecha))

    const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    };

    fecha_mostrar = fecha_titulo.toLocaleDateString(undefined, options);
    return fecha_mostrar

}
    

function guardar_tarea(){
    
    
    let txt_tarea = tarea.value
    let txt_fecha = fecha.value

    let fecha_actual = new Date()
    fecha_actual.getDate()
    let fecha_tarea = Date.parse(txt_fecha)


    if(txt_tarea == "" || txt_fecha == null || txt_fecha == ""){
        alert("La tarea esta vacia o no tiene una fecha asignada")
        return
    }else{
        if (fecha_tarea < fecha_actual){
        alert("No se pueden crear tareas para fechas pasadas")
        
        }else{

            //Crear objeto en localstorage
            let objeto_tarea = {"fecha": txt_fecha, "tarea": txt_tarea}
            lista_tareas.push(objeto_tarea)
            localStorage.setItem("lista_tareas", JSON.stringify(lista_tareas))

            //Mostrar elementos en pantalla
            const nueva_tarea = document.createElement("li")

            nueva_tarea.innerHTML = `<li>
                                    <i class="far fa-circle co" data="realizado" id="0"></i>
                                    <p>${mostrar_fecha(txt_fecha)}: ${txt_tarea}</p>
                                    <i class="fas fa-trash de" data="eliminado" id="0"></i>
                                </li>`
            tareas.appendChild(nueva_tarea)
            tarea.value = ""
            fecha.value = ""
        }
    }
    

}

function cargar_tareas(){
 

    for(let mi_tarea of lista_tareas){
        const nueva_tarea = document.createElement("li")

            nueva_tarea.innerHTML = `<li>
                                    <i class="far fa-circle co" data="realizado" id="0"></i>
                                    <p>${mostrar_fecha(mi_tarea.fecha)}: ${mi_tarea.tarea}</p>
                                    <i class="fas fa-trash de" data="eliminado" id="0"></i>
                                </li>`
            tareas.appendChild(nueva_tarea)
            console.log(lista_tareas)
    }
}