import { connect } from '@planetscale/database';

export const connectDatabase = () => {
  const config = {
    host: import.meta.env.VITE_DATABASE_HOST,
    username: import.meta.env.VITE_DATABASE_USERNAME,
    password: import.meta.env.VITE_DATABASE_PASSWORD,
  };

  const conn = connect(config);

  return conn;
};
