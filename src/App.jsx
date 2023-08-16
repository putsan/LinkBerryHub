import { useEffect, useState } from 'react';
import AddButton from './components/AddButton/AddButton';
import CirclesCanvas from "./components/CirclesCanvas/CirclesCanvas";
import { getBookmarks } from './services/planeetScale/bookmarksService';

function App() {
  const [circlesData, setCirclesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await getBookmarks();
      setCirclesData(results);
    };

    fetchData();
  }, []);

  const handleAddBookmark = (bookmark) => {
    setCirclesData([...circlesData, bookmark]);
  };

  return (
    <div>
      <AddButton onAdd={handleAddBookmark} />
      <CirclesCanvas circlesData={circlesData} />
    </div>
  )
}

export default App;
