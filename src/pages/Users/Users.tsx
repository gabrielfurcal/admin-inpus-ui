import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

import Paginator from "../../components/Paginator";
import { Table, Tbody, Td, Th, Thead, Tr } from "../../components/Table";
import { USERS_URL } from "../../constants";
import { useAuth } from "../../contexts/auth/AuthContext";
import { usePageTitle } from "../../contexts/page-title/PageTitleContext";
import { User } from "../../types/security";
import { isRequestSuccessful } from "../../hooks/utils";

type UserPageResponse = {
    users: User[],
    totalCount: number
}

export const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const [error, setError] = useState<string>();
    const { setTitle } = usePageTitle();
    const { hasPermissions } = useAuth();

    useEffect(() => {
        setTitle('Users');
    }, [setTitle]);

    const loadUsers = async () => {
        try {
            setLoading(true);

            const response = await axios.get<UserPageResponse>(`${USERS_URL}/Paginated?offset=${currentPage - 1}&limit=${limit}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            if (isRequestSuccessful(response.status)) {
                setUsers(response.data.users);
                setTotalPages(Math.ceil(response.data.totalCount / limit));
            } else {
                throw new Error(response.statusText);
            }
        } catch(err) {
            if(err instanceof Error) {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        void loadUsers();
    }, []);

    useEffect(() => {
        void loadUsers();
    }, [limit, currentPage]);

    useEffect(() => {
        if (totalPages > 0 && currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const handleDeactivateClick: any = async (id: string) => {
        if(await !window.confirm(`Are you sure you want to deactivate User ${id}?`)) return;

        try {
            const result = await axios.delete(`${USERS_URL}/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            if(isRequestSuccessful(result.status)) {
                toast.success('Employee deleted', {
                    theme: 'light'
                });
                void loadUsers();
                
            } else {
                throw new Error(result.statusText);
            }
        } catch(err) {
            if(err instanceof Error) {
                setError(err.message);
            }
        }
    }

    const renderUsers = (): any => {
        if(users) {
            return users.map((user: User) => (
                <Tr key={user.id}>
                    <Td><span className="font-medium">{user.id}</span></Td>
                    <Td>{user.email}</Td>
                    <Td>{user.createdAt}</Td>
                    <Td>{user.updatedAt}</Td>
                    <Td>
                        { hasPermissions(["EMPLOYEE_EDIT"]) ? 
                            <><Link to={`edit/${user.id}`} className="font-medium underline">View</Link>&nbsp;|&nbsp;</> : 
                            <></> 
                        }
                        <button className="font-medium underline text-red-500" onClick={() => handleDeactivateClick(user.id)}>Deactivate</button>
                    </Td>
                </Tr>
            ));
        }
    }

    if(loading) return <p>Fetching Users...</p>

    if(error) {
        return <p>Error: {error}</p>
    }

    return (
        <>  
            <Link to={`create`} type="button" className="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-light-3 transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Create New
            </Link>
            <label className="ml-2 mr-2">Show Results</label>
            <select onChange={(e) => { setCurrentPage(1); setLimit(+e.target.value); }} value={limit}>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
            <br/>
            <br/>
            <Table>
                <Thead>
                    <Tr withStyle={false}>
                        <Th>ID</Th>
                        <Th>Email</Th>
                        <Th>Created at</Th>
                        <Th>Updated at</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {renderUsers()}
                </Tbody>
            </Table>
            <Paginator currentPage={currentPage} totalPages={totalPages} onPageChange={(pageNumber) => setCurrentPage(pageNumber)} />
        </>
    )
}