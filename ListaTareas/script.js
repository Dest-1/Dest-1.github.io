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
            // fecha_tarea.Date.toLocaleDateString(undefined, options)
            // console.log(fecha_tarea)
            const nueva_tarea = document.createElement("li")

            nueva_tarea.innerHTML = `<li>
                                    <i class="far fa-circle co" data="realizado" id="0"></i>
                                    <p>${fecha_tarea}: ${txt_tarea}</p>
                                    <i class="fas fa-trash de" data="eliminado" id="0"></i>
                                </li>`
            tareas.appendChild(nueva_tarea)
            tarea.value = ""
            fecha.value = ""
        }
    }
    

}