export class Ativo {
    constructor(
        public id?:number,
        public sigla?: string,
        public nome?: string,
        public descricao_cnpj?: string,
        public tipo_ativo?: number
    ) {}
}