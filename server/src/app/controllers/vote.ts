import voteRepository from 'app/repositories/vote';
import { Request, Response } from 'express';

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

class VoteController {

  async index(request: Request, response: Response) {
    const { orderBy } = request.query;
    const vote = await voteRepository.findAll(orderBy as string);
    return response.status(200).json(vote);
  }

  async create(request: Request, response: Response) {
    const {titulo, descricao, datainicio, datafim, opcoes  }:IVote = request.body;

    if(!titulo) {
      return response.status(400).json({error: 'Parâmetro "titulo" não informado.'});
    }

    if(!descricao) {
      return response.status(400).json({error: 'Parâmetro "descricao" não informado.'});
    }

    if(!datainicio) {
      return response.status(400).json({error: 'Parâmetro "datainicio" não informado.'});

    } 

    if(!datafim) {
      return response.status(400).json({error: 'Parâmetro "datafim" não informado.'});
    }

    if(!opcoes) {
      return response.status(400).json({error: 'Parâmetro "opcoes" não informado.'});
    }

    const vote = await voteRepository.create({titulo, descricao, datainicio, datafim, opcoes});

    return response.status(201).json(vote);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    if(!id) {
      return response.status(400).json({error: 'Parâmetro "id" do local de coleta não informado.'});
    }

    const pessoas = await voteRepository.findById(id);
    return response.status(200).json(pessoas);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const {titulo, descricao, datainicio, datafim, opcoes  } = request.body;

    if(!titulo) {
      return response.status(400).json({error: 'Parâmetro "titulo" não informado.'});
    }

    if(!descricao) {
      return response.status(400).json({error: 'Parâmetro "descricao" não informado.'});
    }

    if(!datainicio) {
      return response.status(400).json({error: 'Parâmetro "datainicio" não informado.'});

    } 

    if(!datafim) {
      return response.status(400).json({error: 'Parâmetro "datafim" não informado.'});
    }

    if(!opcoes) {
      return response.status(400).json({error: 'Parâmetro "opcoes" não informado.'});
    }

    const vote = await voteRepository.update(id, {titulo, descricao, datainicio, datafim, opcoes} as IVote);

    return response.status(200).json(vote);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    if(!id) {
      return response.status(400).json({error: 'Parâmetro "id" do local de coleta não informado.'});
    }
    
    await voteRepository.delete(id);
    return response.status(204).send();
  }

  async vote(request: Request, response: Response) {
    const { id } = request.params;
    const { option, email} = request.body;
    if(!id) {
      return response.status(400).json({error: 'Parâmetro "id" não informado.'});
    }

    if(!option) {
      return response.status(400).json({error: 'Parâmetro "option" não informado.'});
    }

    if(!email) {
      return response.status(400).json({error: 'Parâmetro "email" não informado.'});
    }
    
    await voteRepository.setVote(id, email, option);
    return response.status(204).send();
  }
}

export = new VoteController();