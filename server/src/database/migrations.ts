export const migrations = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

  CREATE TABLE IF NOT EXISTS vote (
    id VARCHAR(255) NOT NULL UNIQUE DEFAULT uuid_generate_v4(), 
    titulo VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    dataInicio VARCHAR(255) NOT NULL,
    dataFim VARCHAR(255) NOT NULL,
    votos VARCHAR NOT NULL,
    opcoes VARCHAR NOT NULL,
    created_at VARCHAR(255) NOT NULL,
    updated_at VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  );
  
`;
