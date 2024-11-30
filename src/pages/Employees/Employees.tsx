import React, { useState, useEffect } from "react";
import { Employee, useDeleteEmployeeMutation, useGetEmployeesQuery } from "../../graphql/schema";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "../../components/Table";
import { usePageTitle } from "../../contexts/PageTitleContext";
import { toast } from 'react-toastify';
import { ApolloError } from "@apollo/client";

export const Employees: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [_error, setError] = useState<string>();
    const [isDeleted, setIsDeleted] = useState<boolean>();
    const { loading, data, error, refetch } = useGetEmployeesQuery();
    const { setTitle } = usePageTitle();
    const [deleteEmployee] = useDeleteEmployeeMutation();

    useEffect(() => {
        setTitle('Employees');
    }, [data, setTitle]);

    useEffect(() => {
        if(data) {
            setEmployees(data.employees);
        }

        if(isDeleted) {
            toast.success('Employee deleted', {
                theme: 'light'
            });
            setIsDeleted(false);
            refetch();
        }

        if(_error) {
            toast.error(_error, {
                theme: 'light'
            })
        }
    }, [isDeleted, _error, setIsDeleted, data, refetch]);

    const handleDeleteClick: any = async (id: number) => {
        if(await !window.confirm(`Are you sure you want to delete Employee ${id.toString()}?`)) return;

        try {
            const result = await deleteEmployee({ variables: { id } });

            if(result.errors) {
                throw new Error(result.errors.map((err) => err.message).join(','));
            } else {
                setIsDeleted(result.data?.deleteEmployee || false);
            }
        } catch(err) {
            if(err instanceof ApolloError || err instanceof Error) {
                setError(err.message);
            }
        }
    }

    const fetchEmployees = (): any => {
        if(employees) {
            return employees.map((employee: Employee) => (
                <Tr key={employee.id}>
                    <Td><span className="font-medium">{employee.id}</span></Td>
                    <Td>{employee.firstName}</Td>
                    <Td>{employee.lastName}</Td>
                    <Td>{employee.position}</Td>
                    <Td>{employee.phoneNumber}</Td>
                    <Td>{employee.email}</Td>
                    <Td>
                        <Link to={`edit/${employee.id}`} className="font-medium underline">View</Link>&nbsp;|&nbsp;
                        <button className="font-medium underline" onClick={() => handleDeleteClick(+employee.id)}>Delete</button>
                    </Td>
                </Tr>
            ));
        }
    }

    if(loading) return <p>Fetching Employees...</p>

    if(error) {
        console.log(error.cause);

        return <p>Error: {error.message}</p>
    }

    return (
        <>  
            <Link to={`create`} type="button" className="inline-block rounded bg-blue-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Create New
            </Link>
            <br/>
            <br/>
            <Table>
                <Thead>
                    <Tr withStyle={false}>
                        <Th>ID</Th>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>Position</Th>
                        <Th>Phone Number</Th>
                        <Th>Email</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {fetchEmployees()}
                </Tbody>
            </Table>
        </>
    )
}