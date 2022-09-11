import {useState,useEffect} from 'react';

import Search from 'components/search/Search';
import Table from 'components/table/Table';

import PEOPLE_DATA from 'data/PeopleData';

import './App.css';

function App() {
  const [people,setPeople]=useState(PEOPLE_DATA);
  const [searchText,setSearchText]=useState("");

  useEffect(()=>{
    searchPeopleHandler();
  },[searchText]);

  const changeHandler=(e)=>{
    setSearchText(e.target.value);
  };
  const searchPeopleHandler=()=>{
    setPeople(PEOPLE_DATA.filter(person=>person.name.toLowerCase().includes(searchText.toLowerCase()) || person.email.toLowerCase().includes(searchText.toLowerCase())));
  };
  
  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <Search searchText={searchText} changeHandler={changeHandler} />
        <Table people={people} />
      </div>
    </section>
  );
}

export default App;