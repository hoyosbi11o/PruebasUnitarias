function suma(a) {
    let acumuladora =1;
    for (let index = 1; index <= a; index++) {
        acumuladora = acumuladora * index;
    }

    return acumuladora;
}
module.exports=suma