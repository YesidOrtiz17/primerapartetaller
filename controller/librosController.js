let db=require("../config/databese");
class librosController{
    static async obtenerlibros(req,res){
        let [lista] = await db.query("SELECT * from libros");
        res.json(lista);
     }
     static async insertarlibros(req,res){
        let {titulo,autor,añoPublicacion,disponibilidad}= req.body;
       let libros = await db.query("insert into libros(titulo,autor,añoPublicacion,disponibilidad) VALUES (?,?,?,?)",[titulo,autor,añoPublicacion,disponibilization]);
       res.json(req.body);
    }
    static async eliminarlibros(req,res){
        let {id}= req.params;
        await db.query("delete from libros where id=?",[id]);
        res.send({mensaje:"registro eliminado"});
    }
     static async actualizarlibros(req,res){
        let{id} = req.params;
        let{titulo,autor,añoPublicacion,disponibilidad}= req.body;
        await db.query("update libros set titulo=?,autor=?,añoPublicacion=?,disponibilidad=? where id=?",[titulo,autor,añoPublicacion,disponibilidad,id]);
        res.json(req.body);
     }
     static async buscarlibros(req,res){
         let {buscarT} = req.params;
         let buscar=await db.query("select * from libros where titulo=?",[buscarT]);
         res.json(buscar);
     }
     }
     

module.exports= librosController;