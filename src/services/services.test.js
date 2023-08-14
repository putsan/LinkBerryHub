import { test, assert } from 'vitest';
import { getBookmarks } from './bookmarksService';


test('getBookmarks повинна повертати масив', async () => {
  const bookmarks = await getBookmarks();
  assert(Array.isArray(bookmarks), 'Результат повинен бути масивом');
});
