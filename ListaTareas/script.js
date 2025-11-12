const tarea = document.getElementById("tarea")
const fecha = document.getElementById("fecha")
const tareas = document.getElementById("lista_tareas")

    

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
            const nueva_tarea = document.createElement("li")
            nueva_tarea.textContent = txt_tarea + " - " + txt_fecha
            tareas.appendChild(nueva_tarea)
            tarea.value = ""
            fecha.value = ""
        }
    }

    

}