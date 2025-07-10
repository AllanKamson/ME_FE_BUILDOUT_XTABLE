import React, { useState } from 'react';

function App() {
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ];

  const [data, setData] = useState(initialData);

  const sortDataByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateComparison = new Date(b.date).getTime() - new Date(a.date).getTime();
      if (dateComparison === 0) {
        return b.views - a.views;
      }
      return dateComparison;
    });
    setData(sortedData);
  };

  const sortDataByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      const viewsComparison = b.views - a.views;
      if (viewsComparison === 0) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return viewsComparison;
    });
    setData(sortedData);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '3em' }}>Date and Views Table</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
        <button
          onClick={sortDataByDate}
          style={{
            padding: '8px 16px',
            backgroundColor: '#e0e0e0',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1em'
          }}
        >
          Sort by Date
        </button>
        <button
          onClick={sortDataByViews}
          style={{
            padding: '8px 16px',
            backgroundColor: '#e0e0e0',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1em'
          }}
        >
          Sort by Views
        </button>
      </div>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        border: '1px solid #ccc',
        borderRadius: '4px',
        overflow: 'hidden',
        backgroundColor: '#fff'
      }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Date</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Views</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{row.date}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{row.views}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;