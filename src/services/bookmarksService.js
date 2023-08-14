import { connectDatabase } from './connToDatabase';

export const getBookmarks = async () => {
  const conn = connectDatabase();
  const results = await conn.execute('SELECT * FROM bookmarks');
  return results.rows;
};

export const addBookmark = async (bookmark) => {
  const conn = connectDatabase();
  const { url, name, size } = bookmark;
  const query = 'INSERT INTO bookmarks (url, name, size) VALUES (?, ?, ?)';
  await conn.execute(query, [url, name, size]);
};
