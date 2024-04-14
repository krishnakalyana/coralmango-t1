"use client"
import { useEffect, useState } from "react";
import TableView from "./_components/TableView";
import CardView from "./_components/CardView";
import Header from "./_components/Header";
import useFetch from "@/hooks/useFetch";

export default function Users() {
    const [search, setSearch] = useState('');
    const [view, setView] = useState('table');
    const [data, setData] = useState([]);
    const [sortKey, setSortKey] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');
    const [filteredData, setFilteredData] = useState([]);
    const apiUrl = 'https://coralmango.com/api/react-test';
    const { fetchData, loading, error } = useFetch(apiUrl);
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
    const handleSort = key => {
        const order = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortKey(key);
        setSortOrder(order);

        const sortedData = [...filteredData].sort((a, b) => {
            if (a[key] < b[key]) {
                return order === 'asc' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return order === 'asc' ? 1 : -1;
            }
            return 0;
        });
        setFilteredData(sortedData);
    };
    const getUsersList = async () => {
        const fetchedData = await fetchData()
        setData(fetchedData);
        setFilteredData(fetchedData);
    }
    useEffect(() => { getUsersList() }, [])
    return <div className="px-4">
        <Header handleViewSwitch={handleViewSwitch} handleSearch={handleSearch} view={view} search={search} />
        {search && (
            <div className="mb-2 bg-yellow-200 p-2">
                Viewing filtered results for {search}
            </div>
        )}
        {view === 'table' ?
            <TableView list={filteredData} handleSort={handleSort} sortOrder={sortOrder} sortKey={sortKey} /> : <CardView list={filteredData} />}
    </div>

}