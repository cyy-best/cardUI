import React from 'react';
import './App.css';
import Card from './components/Card'; // 引入Card组件
import data from './posts.json'; // 引入数据
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="container">
      <div className="row">
        {data.map((post, index) => (
          <div className="col-md-4" key={index}>
            <Card post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


