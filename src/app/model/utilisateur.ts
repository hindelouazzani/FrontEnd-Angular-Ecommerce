export class Utilisateur {
    constructor(
        public id : number ,
        public nom : String,
        public prenom : String,
        public cin : String,
        public dateNaissance : Date,
        public adresse: String,
        public numeroTelephone : String,
        public rib : String,
        public email : String,
        public motDePasse : String,
        public createdAt : Date,
        public updatedAt : Date,
        public role : String
        ){};
}
