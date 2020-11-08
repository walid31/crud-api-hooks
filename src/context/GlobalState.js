import React, { createContext, useReducer, useEffect, useState } from 'react';
import AppReducer from './AppReducer';
import {EmployeesData} from '../EmployeesData';
import axios from 'axios';

const InitialState = {
    employees: [
        { id: 1, employee_name: 'Walid Ghalem', employee_salary: '100.000 DZD', employee_age: '24' }
    ]
}





export const GlobalContext = createContext({
    id: '',
    employee_name: '',
    employee_salary: '',
    employee_age: ''
});
export const GlobalProvider = ({ children }) => {
    const [employees, setEmployees] = useState('');
    useEffect(async() => {
        const result = await axios(
            'http://dummy.restapiexample.com/api/v1/employees'
        )
        setEmployees(result.data.data);
        },[])
    const [state, dispatch] = useReducer(AppReducer, employees[0]);

    function removeEmployee(id) {
        dispatch({
            type: 'REMOVE_EMPLOYEE',
            payload: id
        });
    };

    function addEmployee(employees) {
        dispatch({
            type: 'ADD_EMPLOYEES',
            payload: employees
        });
    };

    function editEmployee(employees) {
        dispatch({
            type: 'EDIT_EMPLOYEE',
            payload: employees
        });
    };

    
    

    return (<GlobalContext.Provider value={{
        employees: employees,
        removeEmployee,
        addEmployee,
        editEmployee
    }}>
        {children}
    </GlobalContext.Provider>);
}

