class Figuras_Geometricas{

    constructor(protected Nombre:string,protected R_perimetro?:number,protected R_Area?:number){

    }
}



export class Cuadrado extends Figuras_Geometricas{
    constructor(protected P_lado:number,protected S_lado:number,protected T_lado:number,protected C_lado:number){
        super('Cuadrado')
    }

 Calcular_Perimetro_Cuadrado(){
     try{
      this.R_perimetro=this.P_lado+this.S_lado+this.T_lado+this.C_lado;
      return this.R_perimetro;
     }catch(ex){

     }
 }

 Calcular_Area_Cuadrado(){
     try {
         
         this.R_Area=this.P_lado*this.P_lado;
         return this.R_Area;
     } catch (error) {
         
     }
 }

 //Metodo que une los dos resultados y retorna una promesa
Mostar_Resultado()

{
    try {
        var Resul=`El Perimetro del Cuadrado es ${this.Calcular_Perimetro_Cuadrado()} y su Area es ${this.Calcular_Area_Cuadrado()}`;
    
        return new Promise((codigo,error)=>{
        codigo(Resul)
    })
    
    

    } catch (error) {
        
    }
}

}
