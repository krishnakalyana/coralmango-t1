"use client"
import { useState } from "react";
import TableView from "./_components/TableView";
import CardView from "./_components/CardView";
import ToggleSwitch from "@/app/_components/Switch";
import Header from "./_components/Header";

export default function Users() {
    const [search, setSearch] = useState('');
    const [view, setView] = useState('table');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const handleViewSwitch = () => {
        setView(view === 'table' ? 'card' : 'table');
    };
    const handleSearch = event => {
        const value = event.target.value;
        setSearch(value);
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };
    return <div className="px-4">
        <Header handleViewSwitch={handleViewSwitch} handleSearch={handleSearch} view={view} search={search} />
        {view === 'table' ?
            <TableView /> : <CardView />}
    </div>

}