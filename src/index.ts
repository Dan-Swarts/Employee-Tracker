import inquirer from "inquirer";
// import { QueryResult } from "pg";
import { pool, connectToDb } from './connection.js';
// import { Employee } from "./employee.js";

await connectToDb();

const promptUser = async () => {
    let response: any = await inquirer.prompt([{
        name: 'answer',
        message: 'What would you like to do?',
        type: 'list',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit'
        ]
    }]);

    switch (response.answer) {
        case 'View All Employees':
            await viewAllEmployees();
            promptUser();
            return;

        case 'Add Employee':
            await addEmployee();
            promptUser();
            return;

        case 'Update Employee Role':
            await updateEmployeeRole();
            promptUser();
            return;

        case 'View All Roles':
            let roles = await getAllRoles();
            console.table(roles.rows);
            promptUser();
            return;

        case 'Add Role':
            await addRole();
            promptUser();
            return;

        case 'View All Departments':
            let departments = await getAllDepartments();
            console.table(departments.rows);
            promptUser();
            return;

        case 'Add Department':
            await addDepartment();
            promptUser();
            return;

        case 'Quit':
            pool.end();
            process.exit(1);
    }
}

// TODO: all of this lol
const getAllEmployees = async () => {
    const sql = 'SELECT * FROM EMPLOYEES';
    let answer = await pool.query(sql);
    return answer;
};

const viewAllEmployees = async () => {
    const sql = `
        SELECT main.first_name, main.last_name, roles.title, managers.first_name AS manager, roles.salary, departments.department_name
        FROM employees main
        JOIN roles ON main.role_id = roles.id
        JOIN departments ON roles.department_id = departments.id
        LEFT JOIN employees managers ON main.manager_id = managers.id
    ;`;
    let answer = await pool.query(sql);
    console.table(answer.rows);
}

const addEmployee = async () => {

    const roles_query = await getAllRoles();
    const employees_query = await getAllEmployees();

    const roles_array = roles_query.rows.map((role_object) => {
        return { name: role_object.title, value: role_object.id };
    });

    const employees_array = employees_query.rows.map((employee_object) => {
        const name = `${employee_object.first_name} ${employee_object.last_name}`;
        return { name: name, value: employee_object.id };
    });



    let response = await inquirer.prompt([{
        name: 'first_name',
        message: "What is the employee's first name?",
        type: 'input'
    },
    {
        name: 'last_name',
        message: "What is the employee's last name?",
        type: 'input'
    },
    {
        name: 'role',
        message: "What is the employee's role?",
        type: 'list',
        choices: roles_array
    },
    {
        name: 'manager',
        message: "who is the employee's manager?",
        type: 'list',
        choices: employees_array
    }]);

    const sql = "INSERT INTO employees (first_name,last_name,role_id,manager_id) VALUES ($1,$2,$3,$4);"
    const params = [response.first_name,response.last_name,response.role,response.manager];
    await pool.query(sql,params);
};

const updateEmployeeRole = async () => {

};

const getAllRoles = async () => {
    const sql = `SELECT * FROM ROLES`;
    let answer = await pool.query(sql);
    return answer;
};

const addRole = async () => {

};

const getAllDepartments = async () => {
    const sql = `SELECT * FROM DEPARTMENTS`;
    let answer = await pool.query(sql);
    return answer;
};

const addDepartment = async () => {

};

promptUser();