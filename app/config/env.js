const env = {
    database: 'exafinal',
    username: 'exafinal_user',
    password: 'maCbRrHkSx49QWq0klCKOA9DH7EC2Lbd',
    host: 'dpg-cslfarrv2p9s73851ct0-a.oregon-postgres.render.com', 
    dialect: 'postgres',
    ssl: true,
    
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
  module.exports = env;