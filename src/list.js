export const list = [
    {task:'Guardar sus pertenencias',
    done:false},
    {task:'Lavar la ropa',
    done:false},
    {task:'Doblar y guardar la ropa limpia',
    done:false},
    {task:'Pasar la aspiradora, barrer, quitar el polvo',
    done:false},
    {task: 'Limpiar el lavabo, el inodoro, la tina del baño, la ducha',
    done:false},
    {task:'Hacer el jardín',
    done:false},
    {task:'Limpiar los platos',
    done:false},
    {task:'Poner la mesa',
    done:false},
    {task:'Recoger la mesa',
    done:false},
    {task:'Estudiar',
    done:false}

]

export const listwithId = [...list].map(elem=>{
    return {...elem,_id:Math.floor(Math.random()*88888888) + 11111111}})