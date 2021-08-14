import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDatabase implements InMemoryDbService {
    createDB(){
        const ativos = [
            { id: 1, sigla: 'ITUB4', nome: 'Itaú Unibanco', descricao_cnpj: '60.872.504/0001-23', tipo_ativo: '1' },
            { id: 2, sigla: 'B3SA3', nome: 'B3 S.A. - BRASIL. BOLSA. BALCÃO', descricao_cnpj: '09.346.601/0001-25', tipo_ativo: '1' }

        ];
        return { ativos }
    }
}