(async () => {
    const {value: mostrarAuto} = await Swal.fire({
    title: 'Bienvenido!',
    text: 'Que Auto le Gusta a Usted',
    icon: 'question',
    confirmButtonText: 'Seleccionar',
    footer: '😎',
    padding: '5rem',
    width:'40rem',
    background:'orange',
    backdrop:'true',
    position: 'center',
    allowOutsideClick: true,
    allowEscapeKey: false,
    allowEnterKey: false, 
    stopKeydownPropagation: true,

    input: 'select',
    inputPlaceholder:'Auto',
    inputValue:'',
    inputOptions:{
        Bugatti:"Bugatti Veyron",
        Porsche:"Porsche 911 Carrera",
        Lamborghini:"Lamborghini Aventador LP 780-4",
        BMW:"Lamborghini Aventador LP 780-4"

    }
});
if (mostrarAuto){
    Swal.fire({
        icon: "info",
        background: "green",
        title: `A Usted le Gusta el  ${mostrarAuto}`
    })
}
})()
