import { query } from 'database/connection';

interface IVote {
  id:string;
  titulo:string;
  descricao:string;
  datainicio:string;
  datafim:string;
  votos: string[];
  opcoes: {
    id: string;
    nome: string;
    votos: number;
  }[];
}

class PessoasRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await query(`SELECT * FROM vote ORDER BY created_at ${direction}`);
    return rows;
  }

  async findById(id:any) {
    const [row] = await query('SELECT * FROM vote WHERE id = $1', [id]);
    return row;
  }

  async setVote(id:string,email:string ,option:string) {
    try {
      const votacao = await this.findById(id);
      if(!votacao) {
        return null;
      }

      const { opcoes, votos } = votacao;

      const votosAtualizado = [...JSON.parse(votos), email];
      const opcoesAtualizado = JSON.parse(opcoes).map((opcao:any) => {
        if(opcao.id === option) {
          return {
            ...opcao,
            votos: opcao.votos + 1,
          }
        }
        return opcao;
      });
      console.log(JSON.stringify(votosAtualizado), JSON.stringify(opcoesAtualizado));
      const [row] = await query(
        `UPDATE vote SET opcoes = $1, votos = $2 WHERE id = $3 RETURNING *`,
        [JSON.stringify(opcoesAtualizado), JSON.stringify(votosAtualizado), id],
      );

      return row;
    } catch (e) {
      console.log(JSON.stringify(e, null, 2));
      return null;
    }
  }

  async create({titulo, descricao, datainicio, datafim, opcoes}: Partial<IVote>) {
    try {
      console.log(opcoes)
      const [row] = await query(
        `INSERT INTO vote (titulo, descricao, datainicio, datafim, opcoes, votos, created_at, updated_at)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          RETURNING *`,
          [titulo,
            descricao,
            datainicio,
            datafim,
            JSON.stringify(opcoes),
            JSON.stringify([]),
            new Date().toISOString(),
            new Date().toISOString(),
          ],
      );
      return row;
    } catch (e) {
      console.log(JSON.stringify(e, null, 2));
      return null;
    }
  }

  async update(id:string, data: IVote) {
    try {
      console.log(data, id)
      const [row] = await query(
        `UPDATE vote SET titulo = $1, descricao = $2, datainicio = $3, datafim = $4, opcoes = $5, updated_at = $6
        WHERE id = $7
        RETURNING *`,
        [data.titulo,
          data.descricao,
          data.datainicio,
          data.datafim,
          data.opcoes,
          new Date().toISOString(),
          id,
        ],
      );
      return row;
    } catch (e) {
      console.log(JSON.stringify(e, null, 2));
      return null;
    }
  }

  async delete(id:string) {
    const [row] = await query('DELETE FROM vote WHERE id = $1 RETURNING *', [id]);
    return row;
  }

}

export = new PessoasRepository();