// CREAR FUNCION DE MOSTRAR 
function mostrar(){
    let item1=document.getElementById(`prod1`); // combo seleccionado item1
    let item2=document.getElementById(`prod2`); // combo seleccionado item2
    let item3=document.getElementById(`prod3`); // combo seleccionado item3
    let adic=0;
    // 1 item
    if(item1.selectedIndex==0){ // cuando item este vacio o nada
        document.getElementById(`desc01`).value="";
        document.getElementById(`vau01`).value=0;
        document.getElementById(`cant01`).value=0;
        document.getElementById(`vat01`).value=0;
    }
    if(item1.selectedIndex==1){
        document.getElementById(`desc01`).value="hamburgueza americana+Gaseosa+Papas Francesa";
        document.getElementById(`vau01`).value=item1.options[item1.selectedIndex].value;
        document.getElementById(`vat01`).value=(parseFloat(document.getElementById(`cant01`).value)*parseFloat(document.getElementById(`vau01`).value)||0).toFixed(0);
    }

    if(item1.selectedIndex==2){
        document.getElementById(`desc01`).value="Perro americano+Gaseosa+Papas Francesa";
        document.getElementById(`vau01`).value=item1.options[item1.selectedIndex].value;
        document.getElementById(`vat01`).value=(parseFloat(document.getElementById(`cant01`).value)*parseFloat(document.getElementById(`vau01`).value)||0).toFixed(0);
    }

    if(item1.selectedIndex==3){
        document.getElementById(`desc01`).value="Pizza+Gaseosa+Papas Francesa";
        document.getElementById(`vau01`).value=item1.options[item1.selectedIndex].value;
        document.getElementById(`vat01`).value=(parseFloat(document.getElementById(`cant01`).value)*parseFloat(document.getElementById(`vau01`).value)||0).toFixed(0);
    }

    // 2 item //
    if(item2.selectedIndex==0){ // cuando item este vacio o nada
        document.getElementById(`desc02`).value="";
        document.getElementById(`vau02`).value=0;
        document.getElementById(`cant02`).value=0;
        document.getElementById(`vat02`).value=0;
    }
    if(item2.selectedIndex==1){
        document.getElementById(`desc02`).value="hamburgueza americana+Gaseosa+Papas Francesa";
        document.getElementById(`vau02`).value=item2.options[item2.selectedIndex].value;
        document.getElementById(`vat02`).value=(parseFloat(document.getElementById(`cant02`).value)*parseFloat(document.getElementById(`vau02`).value)||0).toFixed(0);
    }

    if(item2.selectedIndex==2){
        document.getElementById(`desc02`).value="Perro americano+Gaseosa+Papas Francesa";
        document.getElementById(`vau02`).value=item2.options[item2.selectedIndex].value;
        document.getElementById(`vat02`).value=(parseFloat(document.getElementById(`cant02`).value)*parseFloat(document.getElementById(`vau02`).value)||0).toFixed(0);
    }

    if(item2.selectedIndex==3){
        document.getElementById(`desc02`).value="Pizza+Gaseosa+Papas Francesa";
        document.getElementById(`vau02`).value=item2.options[item2.selectedIndex].value;
        document.getElementById(`vat02`).value=(parseFloat(document.getElementById(`cant02`).value)*parseFloat(document.getElementById(`vau02`).value)||0).toFixed(0);
    }

    // 3 item
    if(item3.selectedIndex==0){ // cuando item este vacio o nada
        document.getElementById(`desc03`).value="";
        document.getElementById(`vau03`).value=0;
        document.getElementById(`cant03`).value=0;
        document.getElementById(`vat03`).value=0;
    }
    if(item3.selectedIndex==1){
        document.getElementById(`desc03`).value="hamburgueza americana+Gaseosa+Papas Francesa";
        document.getElementById(`vau03`).value=item3.options[item3.selectedIndex].value;
        document.getElementById(`vat03`).value=(parseFloat(document.getElementById(`cant03`).value)*parseFloat(document.getElementById(`vau03`).value)||0).toFixed(0);
    }

    if(item3.selectedIndex==2){
        document.getElementById(`desc03`).value="Perro americano+Gaseosa+Papas Francesa";
        document.getElementById(`vau03`).value=item3.options[item3.selectedIndex].value;
        document.getElementById(`vat03`).value=(parseFloat(document.getElementById(`cant03`).value)*parseFloat(document.getElementById(`vau03`).value)||0).toFixed(0);
    }

    if(item3.selectedIndex==3){
        document.getElementById(`desc03`).value="Pizza+Gaseosa+Papas Francesa";
        document.getElementById(`vau03`).value=item3.options[item3.selectedIndex].value;
        document.getElementById(`vat03`).value=(parseFloat(document.getElementById(`cant03`).value)*parseFloat(document.getElementById(`vau03`).value)||0).toFixed(0);
    }
    // Calcular total adicionales 
    let totaladic0=0;
    if(document.getElementById(`checkbox1`).checked){
        totaladic0 +=3000; //valor de cerveza
    }
    if(document.getElementById(`checkbox2`).checked){
        totaladic0 +=2500; //Valor helado
    }
    if(document.getElementById(`checkbox3`).checked){
        totaladic0 +=2300; //Valor jugo hit
    }
    // Calcular total adicionales 
    document.getElementById(`adic0`).value=totaladic0;
    // Calcular subtotal
    document.getElementById(`subt`).value=(parseFloat(document.getElementById(`vat01`).value)+parseFloat(document.getElementById(`vat02`).value)+parseFloat(document.getElementById(`vat03`).value)+parseFloat(document.getElementById(`adic0`).value)||0).toFixed(0);
    // Calcular iva
    document.getElementById(`iva`).value=(parseFloat(document.getElementById(`subt`).value)*0.19||0).toFixed(0);
    //Descuento
    if(document.getElementById(`radio1`).checked){
        document.getElementById(`desc`).value=(parseFloat(document.getElementById(`subt`).value)*0.10||0).toFixed(0);
    }
    else if(document.getElementById(`radio2`).checked){
        document.getElementById(`desc`).value=(parseFloat(document.getElementById(`subt`).value)*0.00||0).toFixed(0);
    }
    else if(document.getElementById(`radio3`).checked){
        document.getElementById(`desc`).value=(parseFloat(document.getElementById(`subt`).value)*0.00||0).toFixed(0);
    }
    //Calcular neto
    document.getElementById(`neto`).value=(parseFloat(document.getElementById(`subt`).value)+parseFloat(document.getElementById(`iva`).value)-parseFloat(document.getElementById(`desc`).value)||0).toFixed(0);
}
// Funcion nueva
function generar(){
        swal("Estimado cliente", "Favor espere su turno.. Estamos en proceso", "success");
}