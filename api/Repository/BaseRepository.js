class BaseRepository {

    constructor(_collection){
        this.collection = _collection;
    }

    findAll (){
        return this.collection.find().lean().exec();
    }

    findById(id){
        return this.collection.findById(id); 
    }

    create (model){
        return this.collection.create(model);
    }

    update (model){
        return this.collection.findByIdAndUpdate(model._id, model, {new:true});
    }

    deleteById(id){
        return this.collection.findByIdAndDelete(id);
    }

    cantidadEntidades(){
        return this.collection.estimatedDocumentCount();
    }

}

module.exports = BaseRepository; 